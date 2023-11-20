import Classes from '../styles/TextInput.module.css';
export default function InputText({icon,...rest}) {
    return (
        <div className={Classes.textInput}>
              <input  {...rest} />
              <span class="material-icons-outlined"> {icon} </span>
        </div>
    )
}