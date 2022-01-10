import React,{useState,useEffect} from "react";

function Sample(){

    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        console.log("Width changed.")
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
        
    },[width]);

    return(
        <div>
        <p>{width}</p>
        <p>{height}</p>
        </div>
    )
}

export default Sample;
