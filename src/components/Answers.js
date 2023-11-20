import Checkbox from './form/Checkbox';
import Classes from './styles/Answers.module.css';
export default function Answers() {
    return (
        <div className={Classes.answers}>
          <Checkbox text=" A New Hope 1" className={Classes.answer}/>
        </div>
    )
}