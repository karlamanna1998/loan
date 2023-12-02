import { useContext, useState } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { TargetedEvent } from 'preact/compat';

class telephoneVerificationModel {
    tellVerificationMade: string = '';
    tellVerificationMadeReason: string = '';
    resPhonrNo: string = '';
    personContacted: string = '';
    relWithApplicant: string = '';
    verificationBy: string = '';
    overallAssesment: string = '';
    reasonForAsses: string = '';
}

export const TelephoneVerificationDtls = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<telephoneVerificationModel>(
        new telephoneVerificationModel()
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
        <PageBody heading={'Telephone verification details'}>
            <form action="" onSubmit={onSubmitHandler} noValidate>
                <fieldset
                    className="fieldWrapper dg col4"
                    disabled={option === 'View'}
                >
                    <h2 className="cs2 ma-t-20 ma-x-15">
                        C. Telephone verification made
                    </h2>
                    <SelectComp
                        class="cs2"
                        name="tellVerificationMade"
                        value={formData.tellVerificationMade}
                        optionData={dummyoptionArray}
                        formValuesController={formValuesController}
                        option="yesNo"
                        required
                    />
                    <TextAreaComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="tellVerificationMadeReason"
                        value={formData.tellVerificationMadeReason}
                        label="If no give reason"
                        required
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="resPhonrNo"
                        value={formData.resPhonrNo}
                        label="Residence phone number"
                        required
                        format="interest"
                    />
                    <InputComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="personContacted"
                        value={formData.personContacted}
                        label="Person Contacted"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="relWithApplicant"
                        value={formData.relWithApplicant}
                        label="Relationship with applicant"
                    />
                    <InputComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="verificationBy"
                        value={formData.verificationBy}
                        label="Verification done by"
                    />
                    <hr class="cs4" />
                    <SelectComp
                        name="overallAssesment"
                        value={formData.overallAssesment}
                        optionData={dummyoptionArray}
                        formValuesController={formValuesController}
                        option="yesNo"
                        label="Overall assessments"
                        required
                    />
                    <InputComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="reasonForAsses"
                        value={formData.reasonForAsses}
                        label="Reason for assessment"
                    />
                </fieldset>
                <SubmitButtonSet />
            </form>
        </PageBody>
    );
};
