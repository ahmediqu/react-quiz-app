import Image from '../../assets/images/signup.svg';
import Classes from '../styles/Illestration.module.css';
export default function Illustration() {
    return (
        <div className={Classes.illustration}>
            <img src={Image} alt="Signup" />
          </div>
    )
}