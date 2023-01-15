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
    bad: 0,
  };

    leaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
    
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = event => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback())
  };

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const totalStats = this.countTotalFeedback();
        const positivStats = this.countPositiveFeedbackPercentage();

        return (
            <Container>
                <Section title={"Please leave feedback"}  >
                <FeedbackOptions options={options} leaveFeedback={this.leaveFeedback} />
               </Section>
               <Section title="Statistics" >
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