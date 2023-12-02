import './CheckboxComp.css';
const CheckboxComp = (props: {
    name: string;
    checked: boolean;
    formValuesController?;
    setStateFunc?;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    class?: string;
    errorText?: string;
}) => {
    if (!props.formValuesController && !props.setStateFunc) {
        console.warn(
            'At least one of formValuesController or setStateFunc must be provided for checkbox.'
        );
    }

    const handleInputChange = (event: Event) => {
        if (props.setStateFunc && !props.formValuesController) {
            const input = event.target as HTMLInputElement;
            const { checked } = input;
            props.setStateFunc(checked);
        } else {
            const input = event.target as HTMLInputElement;
            const { name, checked } = input;
            props.formValuesController(checked, name);
        }
    };
    return (
        <>
            <div className={`field_main_container checkBox_main_container ${props.class}`}>
                <label htmlFor="">
                    {props.label}
                    {props.required ? <b class="required">*</b> : ''}
                </label>
                <input
                    class="checkbox"
                    checked={props.checked}
                    name={props.name}
                    type="checkbox"
                    required={props.required ? props.required : false}
                    onInput={handleInputChange}
                    disabled={props.disabled}
                />{' '}
                <small class="error_text">
                    {props.required && !props.errorText
                        ? 'This Field is required'
                        : props.errorText
                        ? props.errorText
                        : ''}
                </small>
            </div>
        </>
    );
};

export default CheckboxComp;
