import React from "react";

function TempratureInput(props){

    function handleChange(e){
        //console.log(e.target.value,props.scale)
        props.TempChange(e.target.value);
    }

    return(
        <div>
            <h5>Enter Temprature in {props.scale}</h5>
            <input value ={props.value} onChange={handleChange}></input>
        </div>
    )

}

export default TempratureInput;