import React,{useState,useEffect} from "react";
import TempratureInput from './TempratureInput';
import BoilingPoint from './BoilingPoint';

function Main(){

    const [scale,setScale] = useState('c');
    const [Temprature,setTemprature] = useState(5)

    function handleCelsiusChange(temprature){
        //console.log("Hello");
        setScale('c');
        setTemprature(temprature)
        //console.log("The Temprature is " + Temprature)
    }

    function handleFarahaneitChange(temprature){
        setScale('f');
        setTemprature(temprature);
    }

    useEffect = ()=>{
        
    }
    
    const cel = (scale === 'c') ? Temprature: Temprature;
    const far = (scale === 'f') ? Temprature: Temprature;
    return(
    <>
    <TempratureInput scale="c" value = {cel} TempChange={handleCelsiusChange} />
    <TempratureInput scale="f" value = {far} TempChange= {handleFarahaneitChange}/>
    <BoilingPoint />
    </>
    )

}

export default Main;