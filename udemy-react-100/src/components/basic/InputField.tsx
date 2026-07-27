type InputFieldProps = {
    label: string;
    type: string;
    placeholder: string;
    required: boolean
};

const InputField: React.FC<InputFieldProps> = ({label, ...restProps}: InputFieldProps) => {
    return (
    <>
        <div className="input-field">
            <label for="target" >
                {label}：
                <input id="target" {...restProps} ></input>
            </label>
        </div>
    </>)
};

export default InputField;