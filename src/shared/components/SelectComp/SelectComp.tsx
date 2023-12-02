import './SelectComp.css';
export type optionsObjType = {
    value: string;
};
const SelectComp = (props: {
    formValuesController?: (value: string, name: string) => any;
    setStateFunc?: (value: string) => any;
    value: string;
    name: string;
    optionData?: Array<optionsObjType>;
    label?: string;
    required?: boolean;
    class?: string;
    option?: string | 'yesNo';
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
        <div class={`field_main_container ${props.class}`}>
            <label for="">
                {props.label}
                {props.label && props.required ? <b class="required">*</b> : ''}
            </label>
            <select
                name={props.name}
                id=""
                onChange={handleInputChange}
                required={props.required ? props.required : false}
                value={props.value}
            >
                {props.option == 'yesNo'
                    ? ['Yes', 'No'].map((option, key) => {
                          return <option value={option}>{option}</option>;
                      })
                    : props.optionData.map((option, key) => {
                          return (
                              <option value={option.value}>
                                  {option.value}
                              </option>
                          );
                      })}
            </select>
            <small class="error_text">
                {props.required && !props.errorText && 'This Field is required'}
                {props.errorText && props.errorText}
            </small>
        </div>
    );
};

export default SelectComp;
