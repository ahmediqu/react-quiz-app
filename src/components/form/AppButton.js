import Classes from '../styles/Button.module.css';
export default function AppButton({children}) {
    return (
            <div className={Classes.button}>
              <span>{children}</span>
            </div>
    )
}