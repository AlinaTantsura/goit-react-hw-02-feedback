// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import {Component} from 'react';
import { Counter } from './Counter/Counter';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}
countFeedback = (e) => {
  this.setState((prev) => {
      if(e.target.nodeName !== "BUTTON"){return}
      else if (e.target.textContent === 'Good') { return { good: prev.good += 1 } }
      else if (e.target.textContent === 'Neutral') { return { neutral: prev.neutral += 1 } }
      else if (e.target.textContent === 'Bad') { return { bad: prev.bad += 1 } };
  })
}
render(){
  return(
    <>
      <Counter options={["Good", "Neutral", "Bad"]} onLeaveFeedback={this.countFeedback}/>
      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
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