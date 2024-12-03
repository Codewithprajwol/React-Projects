import React from 'react'
import style from '../style.module.css'
import Tile from './Tile';

interface item{
  onTileClick:(idx:number)=>void;
  size:number;
  tile:{symbol:string,isOpen:boolean}[];
}
function Grid({onTileClick,size,tile}:item) {
  return (
   <div className={style.grid}
   style={{gridTemplateRows:`repeat(${size},min(${80/size}vmin,6rem))`,
          gridTemplateColumns:`repeat(${size},min(${80/size}vmin,6rem))`,
          gap:`${10/size}vmin`
   }}>
    {tile.map((singleTile,idx)=><Tile idx={idx} tile={singleTile} onTileClick={onTileClick} key={idx} />)}
   </div>
  )
}

export default Grid