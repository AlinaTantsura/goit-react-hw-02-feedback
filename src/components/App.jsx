import {Component} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  }


  countFeedback = (e) => {
 
  this.setState((prev) => {
      if(e.target.nodeName !== "BUTTON"){return}
      else if (e.target.textContent === 'Good') { return { good: prev.good += 1 } }
      else if (e.target.textContent === 'Neutral') { return { neutral: prev.neutral += 1 } }
      else if (e.target.textContent === 'Bad') { return { bad: prev.bad += 1 } };
  })
      ;
    console.log(this.state.good, this.state.neutral, this.state.bad);
    this.countTotalFeedback();
  }

  countTotalFeedback = () => {
    console.log(this.state.good, this.state.neutral, this.state.bad);
    this.setState(() => ({ total: this.state.good + this.state.neutral + this.state.bad }));
  }
countPositiveFeedbackPercentage = () =>{
    if(this.state.total === 0){return 0};
    this.setState(() => ({positivePercentage: Math.round(this.state.good / this.state.total * 100)}));
  }
  

render(){
  return(
    <>
      <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={this.countFeedback}/>
      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage}/>
  </>
  )
  
}
  
};




// render(){
//   return (
//     <div>
//      <Counter onLeaveFeedback={this.countFeedback()} />
//      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
//     </div>
//   );
// }