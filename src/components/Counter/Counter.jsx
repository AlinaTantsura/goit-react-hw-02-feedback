import { Component } from "react";


export class Counter extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    // countFeedbackGood = (e) => {
    //     this.setState((prev) => {
    //         if(e.target !== 'BUTTON'){return}
    //         else if (e.target.textContent === 'Good') { return { good: prev.good += 1 } }
    //         else if (e.target.textContent === 'Neutral') { return { neutral: prev.neutral += 1 } }
    //         else if (e.target.textContent === 'Bad') { return { bad: prev.bad += 1 } };
    //     })
    // }
    countFeedbackGood = () => {
        this.setState((prev) => ({good: prev.good += 1}))
    }
    countFeedbackNeutral = () => {
        this.setState((prev) => ({neutral: prev.neutral += 1}))
    }
    countFeedbackBad = () => {
        this.setState((prev) => ({bad: prev.bad += 1}))
    }

    render(){
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>
                    <li>
                        <button type="button" onClick={this.countFeedbackGood}>Good</button>
                    </li>
                    <li>
                        <button type="button" onClick={this.countFeedbackNeutral}>Neutral</button>
                    </li>
                    <li>
                        <button type="button" onClick={this.countFeedbackBad}>Bad</button>
                    </li>
                </ul>
                <h2>Statistics</h2>
                <ul>
                    <li>
                        <p>Good: {this.state.good}</p>
                    </li>
                    <li>
                        <p>Neutral: {this.state.neutral}</p>
                    </li>
                    <li>
                        <p>Bad:  {this.state.bad}</p>
                    </li>
                    </ul>
            </div>
        )
    }
}
