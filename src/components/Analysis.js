import Answers from "./Answers";
import Question from "./Question";
import Classes from "./styles/Analysis.module.css"
import QuestionClasses from './styles/Question.module.css';
export default function Analysis() {
    return (
        <div className={Classes.analysis}>
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>
          <div className={QuestionClasses.question}>
            <Question />
            <Answers/>
          </div>
        </div>
    )
}