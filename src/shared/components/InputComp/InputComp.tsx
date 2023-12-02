import './InputComp.css';

const Input = (props: {
    formValuesController?;
    setStateFunc?;
    label?: string;
    value: string;
    name: string;
    regex?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'radio' | 'file';
    maxLength?: number;
    minLength?: number;
    required?: boolean;
    format?: 'interest' | 'year' | 'month' | 'amount';
    disabled?: boolean;
    class?: string;
    errorText?: string;
}) => {
    if (!props.formValuesController && !props.setStateFunc) {
        console.warn(
            'At least one of formValuesController or setStateFunc must be provided.'
        );
    }

    const handleInputChange = (event: Event) => {
        if (props.setStateFunc && !props.formValuesController) {
            const input = event.target as HTMLInputElement;
            const { value } = input;
            props.setStateFunc(value);
        } else {
            const input = event.target as HTMLInputElement;
            const { name, value } = input;
            props.formValuesController(value, name);
        }
    };

    return (
        <div class={`field_main_container ${props.class ? props.class : ''} `}>
            <label for="">
                {props.label}
                {props.required ? <b class="required">*</b> : ''}
            </label>
            <div class="input_wrapper">
                {props.format === 'interest' && (
                    <span class="helper_text_right">%</span>
                )}
                {props.format === 'year' && (
                    <span class="helper_text_right">Years</span>
                )}
                {props.format === 'month' && (
                    <span class="helper_text_right">Months</span>
                )}
                {props.format === 'amount' && (
                    <span class="helper_text_left">INR</span>
                )}
                <input
                    class="input"
                    value={props.value}
                    name={props.name}
                    pattern={props.regex}
                    type={props.type ? props.type : 'text'}
                    maxLength={props.maxLength}
                    minLength={props.minLength}
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
        </div>
    );
};

export default Input;
