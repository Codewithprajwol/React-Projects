import React, { useEffect, useRef, useState } from 'react'
import { getSuffledSymbol } from './helper/symbol.helper'
import Grid from './components/Grid';
import style from './style.module.css'


const size=4;
const matchLength=2;

interface item{
  symbol:string;
  isOpen:boolean;
}
const getItem=():item[]=>{
    return getSuffledSymbol((size*size)/matchLength,true).map((symbol)=>({symbol,isOpen:false}))
}

function MatchPair() {
  const [tile,setTile]=useState(()=>getItem())
  console.log(tile)
  const [openTile,setOpenTile]=useState<number[]>([])
  const isResetting=useRef<boolean>(false)
  const matchValue=useRef<number>(0)
  const attemptValue=useRef<number>(0)
  const timerId=useRef<number>()

  const resetGame=()=>{
    timerId.current=undefined;
    matchValue.current=0;
    attemptValue.current=0;
    isResetting.current=true;
        setTile((tile)=>{
          const newTile=[...tile];
          newTile.map((newtile)=>({symbol:newtile.symbol,isOpen:false}))
          return newTile
        })
         setTimeout(()=>{
          setTile(getItem());
          isResetting.current=false;
         },500)

  }

 const onTileClick=(idx:number)=>{
  if (tile[idx].isOpen || isResetting.current) {
    return;
  }
  attemptValue.current+=1;
  setTile((tile)=>{
        const newTile=[...tile];
        newTile[idx]={...newTile[idx],isOpen:true}
        return newTile;
  })
  setOpenTile([...openTile,idx])
  
 }

  const closePrevisousTile=()=>{
    if(openTile.length<matchLength){  
      return;
    }
    const [idx0,idx1]=openTile;
    setTile((tile)=>{
      const newTile=[...tile];
      newTile[idx0]={symbol:tile[idx0].symbol, isOpen:false};
      newTile[idx1]={symbol:tile[idx1].symbol, isOpen:false};
      setOpenTile(openTile.slice(matchLength))
      return newTile;
    })
  }

  useEffect(()=>{
  if(openTile.length===matchLength)
  {
    if(tile[openTile[0]].symbol===tile[openTile[1]].symbol){
      setOpenTile([])
      matchValue.current+=matchLength;
    }else{  
      timerId.current=window.setTimeout(()=>{
          closePrevisousTile()
      },1000)
    }
  }
  if(openTile.length===matchLength+1){
    clearTimeout(timerId.current);
    closePrevisousTile()  
  }
  },[tile])

  return (
   <div className={style.layout}>
   <Grid onTileClick={onTileClick} size={size} tile={tile} />
   <div className={style.displayDiv}>
    <button onClick={resetGame}>Reset</button>
    <p>attempts:{attemptValue.current}</p>
    <p>{matchValue.current===size*size && "Congratulations"}</p>
   </div>
   </div>
  )
}

export default MatchPair