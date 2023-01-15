import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import {Section} from "./Section/Section"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

    addFeedback = evt => {
        const key = evt.target.name;
        this.setState(prevState => {
            return { [key]: (prevState[key] += 1) }
        })
    };
    
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = evt => {
    return ((this.state.good * 100) / this.countTotalFeedback)
  };

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const totalStats = this.countTotalFeedback();
        const positivStats = this.countPositiveFeedbackPercentage();

        return (
            
            <Section title={'Please leave feedback'}>
                <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback} />
            </Section>
            
        )
    }
  
} 