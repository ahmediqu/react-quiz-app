import AppButton from "../form/AppButton";
import Form from "../form/Form";
import Illustration from "../form/Illustration";
import InputText from "../form/InputText";
import Classes from "../styles/Login.module.css";
export default function Login() {
    return (
        <div>
            <h1>Login to your account</h1>
            <div class="column">
            <Illustration />
            <Form className={Classes.login}>
                <InputText type="text" placeholder="Enter email" icon="alternate_email"/>
                <InputText type="password" placeholder="Enter password" icon="lock"/>
                <AppButton><span>Login</span></AppButton>
                <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>

            </Form>
    
            </div>
        </div>
    )
}