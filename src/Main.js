import React,{useState,useEffect} from "react";
import TempratureInput from './TempratureInput';
import {tocel,tofar} from './fun_temp'

function Main(){

    const [scale,setScale] = useState('c');
    const [Temprature,setTemprature] = useState(0)
    const [Celsius,setCelsius] = useState(0)
    const [Boil,setBoil] = useState(false)
    
    function handleCelsiusChange(temprature){
        //console.log("Hello");
        setScale('c');
        setTemprature(temprature);
        setCelsius(temprature);
        //console.log("The Temprature is " + Celsius)
    }

    function handleFarahaneitChange(temprature){
        setScale('f');
        setTemprature(temprature);
        setCelsius(tofar(temprature));
    }

    useEffect (()=>{
        //console.log("Temp changed");
        (Celsius >= 100) ? setBoil(true) : setBoil(false);
    },[Celsius])

    const cel = (scale === 'c') ? Temprature: tocel(Temprature);
    const far = (scale === 'f') ? Temprature: tofar(Temprature);
    
    return(
    <>
    <TempratureInput scale="c" value = {cel} TempChange={handleCelsiusChange} />
    <TempratureInput scale="f" value = {far} TempChange= {handleFarahaneitChange}/>
    <p> The Water Would {(Boil) ? " ": "not"} Boil.</p>
    </>
    )
}

export default Main;