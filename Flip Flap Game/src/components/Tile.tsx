import React, { useEffect, useRef } from 'react'
import style from '../style.module.css'

interface props{
    idx:number;
    tile:{symbol:string, isOpen:boolean};
    onTileClick:(idx:number)=>void;
}
function Tile({idx,tile,onTileClick}:props) {
    const frontFaceTile=useRef<HTMLDivElement>(null)
    const backFaceTile=useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(frontFaceTile.current && backFaceTile.current){
            if(tile.isOpen){
                frontFaceTile.current.style.transform=`rotateY(180deg)`;
                backFaceTile.current.style.transform=`rotateY(0deg)`;
            }
            else{
                frontFaceTile.current.style.transform=`rotateY(0deg)`;
                backFaceTile.current.style.transform=`rotateY(180deg)`;
            }
        }
    },[tile.isOpen])
    
  return (
    <div className={style.tile} onClick={()=>{
        onTileClick(idx)
    }}>
        <div className={`${style.tile} ${style.frontFace}`} ref={frontFaceTile}></div>
        <div className={`${style.tile} ${style.backFace}`} ref={backFaceTile}>{tile.symbol}</div>
    </div>
  )
}

export default Tile