import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Container } from "./Container/Container";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


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
    return Math.round((this.state.good * 100) / this.countTotalFeedback)
  };

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const totalStats = this.countTotalFeedback();
        const positivStats = this.countPositiveFeedbackPercentage();

        return (
            <Container>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback} />
            </Section>
             <Section title="Statistics">
          {totalStats > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalStats}
              positivePercentage={positivStats}
            />
          ) : (
            <Notification message={'There is no feedback!'} />
          )}
        </Section>
            </Container>
        )
    }
  
} 