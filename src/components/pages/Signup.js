import Illustration from "../form/Illustration";
import Form from "../form/Form";
import Classes from '../styles/Signup.module.css';
import InputText from "../form/InputText";
import Checkbox from "../form/Checkbox";
import AppButton from "../form/AppButton";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div>
            <h1>Create an account</h1>
            <div class="column">
            <Illustration />
                <Form className={Classes.signup}>
                    <InputText type="text" placeholder="Enter name" icon="person" />
                    <InputText type="text" placeholder="Enter Email" icon="alternate_email" />
                    <InputText type="password" placeholder="Enter Password" icon="lock" />
                    <InputText type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms & Conditions"/>
                    <AppButton><span>Submit now</span></AppButton>
                </Form>
                <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
                </div>
            
            </div>
        </div>
    )
}