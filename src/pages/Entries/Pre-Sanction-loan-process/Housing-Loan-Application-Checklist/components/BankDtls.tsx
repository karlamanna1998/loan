import { useContext, useState } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import InputComp from '../../../../../shared/components/InputComp/InputComp';

class bankDetailsModel {
    salaryCreditedRegularly: string = '';
    salaryCreditedRegularlyReason: string = '';
    bankingHabit: string = '';
    regularDealing: string = '';
    checkBounce: string = '';
    checkBounceAmoount: string = '';
    checkBounceReason: string = '';
}

const BankDtls = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<bankDetailsModel>(
        new bankDetailsModel()
    );
    //   function fired on form submit
    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert('submitetd');
    };
    // function to store input field values in a common form state
    const formValuesController = (inputVal: string, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: inputVal,
        }));
    };
    const dummyoptionArray = [{ value: '' }, { value: 'o1' }];

    return (
        <>
            <PageBody heading={'Bank Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <SelectComp
                            name="salaryCreditedRegularly"
                            value={formData.salaryCreditedRegularly}
                            label="Is salary being credited reguarly"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                            option="yesNo"
                        />
                        <TextAreaComp
                            class="cs3"
                            formValuesController={formValuesController}
                            name="salaryCreditedRegularlyReason"
                            value={formData.salaryCreditedRegularlyReason}
                            label="If no give reason"
                        />
                        <SelectComp
                            name="bankingHabit"
                            value={formData.bankingHabit}
                            label="Banking Habit"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="regularDealing"
                            value={formData.regularDealing}
                            label="Whether the party had a regular dealing"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                            option="yesNo"
                        />
                        <div></div>
                        <div></div>
                        <SelectComp
                            name="checkBounce"
                            value={formData.checkBounce}
                            label="Any check bounce"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                            option="yesNo"
                        />
                        <InputComp
                            name="checkBounceAmoount"
                            value={formData.checkBounceAmoount}
                            label="Bounce Amount"
                            formValuesController={formValuesController}
                            format="amount"
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="checkBounceReason"
                            value={formData.checkBounceReason}
                            label="Reason for Check bounce"
                        />
                    </fieldset>
                </form>
            </PageBody>
        </>
    );
};

export default BankDtls;
