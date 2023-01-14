import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = evt => {
    return ((this.state.good * 100) / this.countTotalFeedback)
  };

  leaveFeedback = evt => {
    const name = evt.target.name
  }
} 