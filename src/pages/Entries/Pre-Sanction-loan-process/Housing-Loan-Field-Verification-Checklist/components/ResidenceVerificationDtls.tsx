import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';

class ResidenceVerificationDtlsModel {
    DateOfApplication: string = '';
    AmountRequested: string = '';
    Applicant: string = '';
    LoanCode: string = '';
    LoanPurposeCode: string = '';
    Address: string = '';
    residenceVerificationMade: string = 'Yes';
    ifNoGiveReason: string = '';
    personContactedAtResidence: string = '';
    typeOfResidence: string = '';
    isThePremises: string = '';
    premisesMonthlyRent: string = '';
    localityIsInTheArea: string = '';
    verificationDoneBy: string = '';
}


const ResidenceVerificationDtls = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<ResidenceVerificationDtlsModel>(
        new ResidenceVerificationDtlsModel()
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
            <PageBody heading={'Residence Verification Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="pa-10 dg col4"
                        disabled={option === 'View'}
                    >
                        <h2 class="cs4">Loan Application Details</h2>
                        <InputComp
                            formValuesController={formValuesController}
                            name="DateOfApplication"
                            value={formData.DateOfApplication}
                            label="Date of application"
                            type="date"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="AmountRequested"
                            value={formData.AmountRequested}
                            label="Amount Requested"
                            format="amount"
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="Applicant"
                            value={formData.Applicant}
                            label="Applicant"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="LoanCode"
                            value={formData.LoanCode}
                            label="Loan Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="LoanPurposeCode"
                            value={formData.LoanPurposeCode}
                            label="Loan purpose Code"
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="Address"
                            value={formData.Address}
                            label="Applicant / Co-obligant / Joint Applicant / Guarantor's Address"
                        />
                    </fieldset>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <h2 class='cs2' style={{marginTop: "20px", marginLeft: "10px"}}>A.Residence Verification Made</h2>
                        <SelectComp
                            name="residenceVerificationMade"
                            value={formData.residenceVerificationMade}
                            label=""
                            formValuesController={formValuesController}
                            option="yesNo"
                            class='cs2'
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="ifNoGiveReason"
                            value={formData.ifNoGiveReason}
                            label="If no give reason"
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="Address"
                            value={formData.Address}
                            label="Address"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="personContactedAtResidence"
                            value={formData.personContactedAtResidence}
                            label="Person Contacted At Residence"
                            class="cs2"
                        />
                         <SelectComp
                            name="typeOfResidence"
                            value={formData.typeOfResidence}
                            label="Type of Residence"
                            optionData = {dummyoptionArray}
                            formValuesController={formValuesController}
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="isThePremises"
                            value={formData.isThePremises}
                            label="Is The Premises"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="premisesMonthlyRent"
                            value={formData.premisesMonthlyRent}
                            label="Premises Monthly Rent"
                            class="cs2"
                            format="amount"
                        />
                        <SelectComp
                            name="localityIsInTheArea"
                            value={formData.localityIsInTheArea}
                            label="Loacality In The Area"
                            optionData = {dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                         <InputComp
                            formValuesController={formValuesController}
                            name="verificationDoneBy"
                            value={formData.verificationDoneBy}
                            label="Verification Done By"
                            class='cs2'
                        />
                    </fieldset>
                    <div className="cs4">
                        <SubmitButtonSet />
                    </div>
                </form>
            </PageBody>
        </>
    );
};

export default ResidenceVerificationDtls;

