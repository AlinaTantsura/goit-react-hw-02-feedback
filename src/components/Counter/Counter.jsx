import { Component } from "react";

export class Counter extends Component{
    static Props = {
       options:[],
    };

    render(){
        return (       
            <div>
                {this.props.options.map((item) =>
                <button type="button" key={item}>{item}</button>)}
            </div>
               
        )
    }
}

// {/* <div onClick={this.props.onLeaveFeedback}>
// <button type="button">Good</button>
// <button type="button">Neutral</button>
// <button type="button">Bad</button>
// </div> */}