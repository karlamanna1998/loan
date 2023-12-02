import { useContext, useEffect, useState } from "preact/hooks";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";
import SubmitButtonSet from "../../../../../shared/components/SubmitButtonSet/SubmitButtonSet";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import SelectComp from "../../../../../shared/components/SelectComp/SelectComp";

class otherDetailsModel {
    proofOfAge: string = "Yes";
    proofOfAgeDetail: string = "";
    proofOfResidence: string = "Yes";
    proofOfResidenceDetail: string = "";
    anyPastCredit: string = "No";
    experienceInRecovery: string = "";
    existingLiabilityWithBank: string = "No";
    experienceInParty: string = "";
}

const OtherDtls = () => {
    const [formData, setFormData] = useState<otherDetailsModel>(new otherDetailsModel());
    const dummyoptionArray = [{ value: "" }, { value: "o1" }];
    const { option } = useContext(OptionContext);
    // function to store input field values in a common form state
    const formValuesController = (inputVal: string, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: inputVal,
        }));
    };

    //   function fired on form submit
    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("submitetd");
    };

    return (
        <>
            <PageBody heading={'Other Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === "View"}
                    >
                        <SelectComp
                            name="proofOfAge"
                            value={formData.proofOfAge}
                            label="Proof of Age"
                            option="yesNo"
                            formValuesController={formValuesController}
                        />
                        <div class="cs3">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="proofOfAgeDetail"
                                value={formData.proofOfAgeDetail}
                                label="Give Reason/Detail"
                            />
                        </div>
                        <SelectComp
                            name="proofOfResidence"
                            value={formData.proofOfResidence}
                            label="Proof of Residence"
                            option="yesNo"
                            formValuesController={formValuesController}
                        />
                        <div class="cs3">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="proofOfResidenceDetail"
                                value={formData.proofOfResidenceDetail}
                                label="Give Reason/Detail"
                            />
                        </div>
                        <SelectComp
                            name="anyPastCredit"
                            value={formData.anyPastCredit}
                            label="Any Past Credit-Facility from our Group Companies to the Loan Party"
                            option="yesNo"
                            formValuesController={formValuesController}
                        />
                        <div class="cs3">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="experienceInRecovery"
                                value={formData.experienceInRecovery}
                                label="Experience in Recovery"
                            />
                        </div>
                        <SelectComp
                            name="existingLiabilityWithBank"
                            value={formData.existingLiabilityWithBank}
                            label="Existing liability of party with bank/institution"
                            option="yesNo"
                            formValuesController={formValuesController}
                        />
                        <div class="cs3">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="experienceInParty"
                                value={formData.experienceInParty}
                                label="Experience in Party"
                            />
                        </div>

                    </fieldset>
                    <div className="cs4">
                        <SubmitButtonSet />
                    </div>
                </form>
            </PageBody>
        </>
    );
};

export default OtherDtls
