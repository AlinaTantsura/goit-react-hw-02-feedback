import { Component } from "react";

export class Statistics extends Component{
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    };
    countTotalFeedback() {
        return this.setState((prev) => {this.props.total = prev.total + this.props.good + this.props.neutral + this.props.bad})
    }
    countPositiveFeedbackPercentage = () =>{
        if(this.props.total === 0){return 0};
        return this.props.positivePercentage = Math.round(this.props.good / this.props.total * 100);
    }
    render(){
        const {good, neutral, bad, total, positivePercentage} = this.props;
        return (
            // <h2>Statistics</h2>
                <ul>
                    <li>
                        <p>Good: {good}</p>
                    </li>
                    <li>
                        <p>Neutral: {neutral}</p>
                    </li>
                    <li>
                        <p>Bad:  {bad}</p>
                    </li>
                    <li>
                        <p>Total:  {total}</p>
                    </li>
                    <li>
                        <p>Positive feedbacks:  {positivePercentage}%</p>
                    </li>
                </ul>
        )

    }
}