import React, { useContext, useEffect } from 'react'
import Style from './Home.module.css'
import { CounterContext } from '../../Context/CounterContext';
import RecentProducts from '../RecentProducts/RecentProducts';
import CaregoriesSlider from '../CaregoriesSlider/CaregoriesSlider';
import MainSlider from '../MainSlider/MainSlider';


export default function Home() {
    // let { Counter, changeCounter, setCounter } = useContext(CounterContext);
    useEffect(() => {
   
     }, [])
  
    return <>


<MainSlider/>
<CaregoriesSlider/>
<RecentProducts/>

        {/* <div className='bg-yellow-300'>{Counter}</div>
        <button onClick={changeCounter} className='btn'>click</button>
        1
        <button onClick={() => setCounter(Math.round(Math.random() * 100))} className='btn'>click</button>
        2 */}
    </>
}
