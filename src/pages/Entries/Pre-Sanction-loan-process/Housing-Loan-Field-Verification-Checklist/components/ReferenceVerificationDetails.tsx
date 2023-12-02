import { useContext, useState } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import { TargetedEvent } from 'preact/compat';

class refVerificationDtlsModel {
    refVerMade: string = '';
    refVerMadeReason: string = '';
    refMadeForRef: string = '';
    name: string = '';
    address: string = '';
    teleRes: string = '';
    teleOffice: string = '';
    calledOnDate: string = '';
    hasKnownAppForYears: string = '';
    howDoesHeKnowHim: string = '';
    knowsHim: string = '';
    desRecGiveLoan: string = '';
    remarks: string = '';
    verDoneBy: string = '';
}

export const ReferenceVerificationDetails = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<refVerificationDtlsModel>(
        new refVerificationDtlsModel()
    );
    //   function fired on form submit
    const onSubmitHandler = (e: TargetedEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.classList.add('showErrors');
        // alert('submitetd');
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
        <PageBody heading={'Reference verification details'}>
            <form action="" onSubmit={onSubmitHandler} noValidate>
                <fieldset
                    className="fieldWrapper dg col4"
                    disabled={option === 'View'}
                >
                    <h2 className="cs2 ma-t-20 ma-x-15">
                        D. Reference Verification Made
                    </h2>
                    <SelectComp
                        class="cs2"
                        name="refVerMade"
                        value={formData.refVerMade}
                        optionData={dummyoptionArray}
                        formValuesController={formValuesController}
                        option="yesNo"
                        required
                    />
                    <TextAreaComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="refVerMadeReason"
                        value={formData.refVerMadeReason}
                        label="If no give reason"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="refMadeForRef"
                        value={formData.refMadeForRef}
                        label="Verification made for reference"
                    />
                    <br />
                    <br />
                    <br />
                    <InputComp
                        class="cs3"
                        formValuesController={formValuesController}
                        name="name"
                        value={formData.name}
                        label="Name"
                    />
                    <TextAreaComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="address"
                        value={formData.address}
                        label="Address"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="teleRes"
                        value={formData.teleRes}
                        label="Telephone (Residence)"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="teleOffice"
                        value={formData.teleOffice}
                        label="Telephone (Office)"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="calledOnDate"
                        value={formData.calledOnDate}
                        label="Called on date"
                        type="date"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="hasKnownAppForYears"
                        value={formData.hasKnownAppForYears}
                        label="Has known Applicant for"
                        format="year"
                    />
                    <InputComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="howDoesHeKnowHim"
                        value={formData.howDoesHeKnowHim}
                        label="How does he know him"
                    />
                    <SelectComp
                        name="knowsHim"
                        value={formData.knowsHim}
                        optionData={dummyoptionArray}
                        formValuesController={formValuesController}
                        label="Knows him"
                    />
                    <SelectComp
                        class="cs2"
                        name="knowsHim"
                        value={formData.knowsHim}
                        formValuesController={formValuesController}
                        label="Did he recomend to give loan to the customer"
                        option="yesNo"
                    />
                    <TextAreaComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="remarks"
                        value={formData.remarks}
                        label="Remarks"
                    />
                    <InputComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="verDoneBy"
                        value={formData.verDoneBy}
                        label="Verification done by"
                    />
                </fieldset>
                <SubmitButtonSet />
            </form>
        </PageBody>
    );
};
