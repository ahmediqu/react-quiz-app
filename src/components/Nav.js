import Classes from './styles/Nav.module.css';
import Image from '../assets/images/logo-bg.png';
import Account from './Account';
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav className={Classes.nav}>
            <ul>
                <li>
                <Link to="/" className={Classes.brand}>
                    <img src={Image} alt="Learn with Sumit Logo" />
                    <h3>Quiz & Quiz</h3>
                </Link>
                </li>
            </ul>
            <Account />
        </nav>
    )
}