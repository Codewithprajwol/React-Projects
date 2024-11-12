import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import style from './style.module.css'
import config from './config'


function App() {
   const [currentLight,setCurrentLight]=useState('red')
   const [currentDuration,setCurrentDuration]=useState(config[currentLight].duration)

  useEffect(()=>{
    let timerId;
     if(currentDuration<=0){
        setCurrentLight(config[currentLight].next);
        setCurrentDuration(config[config[currentLight].next].duration)
     }else{
       timerId=setInterval(()=>{
        setCurrentDuration((previousDuration)=>previousDuration-1000)
       },1000)

       return ()=>clearInterval(timerId)
     }

  },[currentLight,currentDuration])

  return (
  <>
  <Header />
    <div className={style['traffic-light-container']}>
        <div className={style['traffic-shape']}>
          {Object.keys(config).map((light)=><div
           key={config[light].id}
           style={{backgroundColor: currentLight===light ? currentLight :''}}  className={style['light']}></div>)}
        </div>
        <div className={style['count']}><b>{Math.floor(currentDuration/1000)} seconds</b></div>
    </div>
  </>
  )
}

export default App