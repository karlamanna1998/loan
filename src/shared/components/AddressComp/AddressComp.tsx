import InputComp from '../InputComp/InputComp';
import SelectComp from '../SelectComp/SelectComp';
import TextAreaComp from '../TextAreaComp/TextAreaComp';
import './AddressComp.css';
const Addresscomp = (props: {
    address: {
        label: string;
        formValueController: any;
        value: any;
        name: string;
    };
    country: {
        label: string;
        formValueController: any;
        value: any;
        name: string;
    };
    state: {
        label: string;
        formValueController: any;
        value: any;
        name: string;
    };
    city: {
        label: string;
        formValueController: any;
        value: any;
        name: string;
    };
    pincode: {
        label: string;
        formValueController: any;
        value: any;
        name: string;
    };
}) => {
    return (
        <>
            <div class="dg col4">
                <div class="cs4">
                    <TextAreaComp
                        label={props.address.label}
                        formValuesController={props.address.formValueController}
                        value={props.address.value}
                        name={props.address.name}
                    />
                </div>

                <SelectComp
                    label={props.country.label}
                    formValuesController={props.country.formValueController}
                    value={props.country.value}
                    name={props.country.name}
                    optionData={[{ value: 'country' }]}
                />
                <SelectComp
                    label={props.state.label}
                    formValuesController={props.state.formValueController}
                    value={props.state.value}
                    name={props.state.name}
                    optionData={[{ value: 'state' }]}
                />
                <SelectComp
                    label={props.city.label}
                    formValuesController={props.city.formValueController}
                    value={props.city.value}
                    name={props.city.name}
                    optionData={[{ value: 'city' }]}
                />
                <InputComp
                    label={props.pincode.label}
                    formValuesController={props.pincode.formValueController}
                    value={props.pincode.value}
                    name={props.pincode.name}
                />
            </div>
        </>
    );
};

export default Addresscomp;
