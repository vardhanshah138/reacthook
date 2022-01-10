import React from "react";

class SampleClass extends React.Component{
    constructor(){
        super();
        this.state = {width:window.innerWidth};
    }

    render(){
        return(
            <div>
                {this.state.width}
            </div>
        )
    }
}

export default SampleClass;