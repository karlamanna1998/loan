import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';

class BusinessVerificationDtlsModel {
    businessVerificationMade: string = 'Yes';
    ifNoGiveReason: string = '';
    applicatsEmployerBusinessName: string = '';
    address: string = '';
    applicatntsDesignation: string = '';
    personContacted: string = '';
    designationOfContactedPerson: string = '';
    typeOfPremises: string = '';
    localityOfArea: string = '';
    anyOtherInformation: string = '';
    verificationDoneBy: string = '';
}


export const BusinessVerificationDtls = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<BusinessVerificationDtlsModel>(
        new BusinessVerificationDtlsModel()
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
            <PageBody heading={'Business Verification Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <h2 class='cs2' style={{marginTop: "20px", marginLeft: "10px"}}>B.Business Verification Made</h2>
                        <SelectComp
                            name="businessVerificationMade"
                            value={formData.businessVerificationMade}
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
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicatsEmployerBusinessName"
                            value={formData.applicatsEmployerBusinessName}
                            label="Applicants Employer/Business Name"
                            class="cs4"
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
                            name="applicatntsDesignation"
                            value={formData.applicatntsDesignation}
                            label="Applicats Designation"
                            class="cs2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="personContacted"
                            value={formData.personContacted}
                            label="Person Contacted"
                            class="cs2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="designationOfContactedPerson"
                            value={formData.designationOfContactedPerson}
                            label="Designation of Contacted Person"
                            class="cs2"
                        />
                         <SelectComp
                            name="typeOfPremises"
                            value={formData.typeOfPremises}
                            label="Type of Residence"
                            optionData = {dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                          <SelectComp
                            name="localityOfArea"
                            value={formData.localityOfArea}
                            label="Locality is in the Area"
                            optionData = {dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="anyOtherInformation"
                            value={formData.anyOtherInformation}
                            label="Any Other Information"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="verificationDoneBy"
                            value={formData.verificationDoneBy}
                            label="Verification Done By"
                            class="cs2"
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


