import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';

class PolicyDtlsModel {
    investigationReportObtained: string = '';
    ifNoGiveReason: string = '';
    partyHasObtainedPolicy: string = '';
    reasonForNotOpting: string = '';
    policyNumber: string = '';
    termOfPolicy: string = 'Yes';
    policyAmount: string = '';
    premiumType: string = '';
    premiumAmount: string = '';
    modeOfPremium: string = '';
}

const PolicyDetails = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<PolicyDtlsModel>(
        new PolicyDtlsModel()
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
            <PageBody heading={'Property Verification Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <h3 class="cs4 ma-t-20 ma-x-15">
                            <u>Investigation Report</u>
                        </h3>
                        <div className="spacer cs4"></div>
                        <SelectComp
                            name="investigationReportObtained"
                            value={formData.investigationReportObtained}
                            label="Investigation Report Obtained"
                            formValuesController={formValuesController}
                            option="yesNo"
                        />
                        <TextAreaComp
                            class="cs3"
                            formValuesController={formValuesController}
                            name="ifNoGiveReason"
                            value={formData.ifNoGiveReason}
                            label="If No Give Reason"
                        />
                        <div class="spacer cs4"></div>
                        <h3 class="cs4 ma-t-20 ma-x-15">
                            <u>Policy Details</u>
                        </h3>
                        <div className="spacer cs4"></div>
                        <SelectComp
                            name="partyHasObtainedPolicy"
                            value={formData.partyHasObtainedPolicy}
                            label="Where Party Has Obtained Policy"
                            formValuesController={formValuesController}
                            option="yesNo"
                        />
                        <TextAreaComp
                            class="cs3"
                            formValuesController={formValuesController}
                            name="reasonForNotOpting"
                            value={formData.reasonForNotOpting}
                            label="Reason For Not Opting"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="policyNumber"
                            value={formData.policyNumber}
                            label="Policy Number"
                            class="cs2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="termOfPolicy"
                            value={formData.termOfPolicy}
                            label="Term of Policy"
                            class="cs2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="policyAmount"
                            value={formData.policyAmount}
                            label="Policy Amount"
                            format="amount"
                            class="cs2"
                        />
                        <SelectComp
                            name="premiumType"
                            value={formData.premiumType}
                            label="Premium Type"
                            formValuesController={formValuesController}
                            optionData={dummyoptionArray}
                            class="cs2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="premiumAmount"
                            value={formData.premiumAmount}
                            label="Premium Amount"
                            class="cs2"
                            format="amount"
                        />
                        <SelectComp
                            name="modeOfPremium"
                            value={formData.modeOfPremium}
                            label="Mode Of Premium"
                            formValuesController={formValuesController}
                            optionData={dummyoptionArray}
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

export default PolicyDetails;
