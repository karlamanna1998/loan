import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class applicantData {
    loanCode: string = '';
    applicationDate: string = '';
    projectType: string = '';
    propertyType: string = '';
    locationOfProperty: string = '';
    repaymentFrequency: string = '';
    agentCode: string = '';
    applicationIndividualNumber: string = '';
    address: string = '';
    employerBusinessName: string = '';
    photographAttached: string = '';
    proofOfAgeAttached: string = '';
    proofOfResidenceAttached: string = '';
    noOfJointCoApplicant: string = '';
    applicantsSl: string = '';
    indivNo: string = '';
    JCApplicantAddress: string = '';
    JCApplicant: string = '';
    JCEmployerBusinessName: string = '';
    relationshipWithApplicant: string = '';
    JCPhotographAttached: string = '';
    JCProofOfAgeAttached: string = '';
    JCProofOfResidenceAttached: string = '';
    includeInIncomeCalc: string = '';
}

export const Applicant = () => {
    const [formData, setFormData] = useState<applicantData>(
        new applicantData()
    );
    const dummyoptionArray = [{ value: '' }, { value: 'o1' }];
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
        alert('submitetd');
    };

    return (
        <>
            <PageBody heading={'Applicant'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanCode"
                            value={formData.loanCode}
                            label="Loan Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicationDate"
                            value={formData.applicationDate}
                            label="Application Date"
                            type="date"
                        />
                        <SelectComp
                            name="projectType"
                            value={formData.projectType}
                            label="Project Type"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="propertyType"
                            value={formData.propertyType}
                            label="Property Type"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="locationOfProperty"
                            value={formData.locationOfProperty}
                            label="Location of Property"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="repaymentFrequency"
                            value={formData.repaymentFrequency}
                            label="Repayment frequency"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="agentCode"
                            value={formData.agentCode}
                            label="Agent code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicationIndividualNumber"
                            value={formData.applicationIndividualNumber}
                            label="Applicant Individual No"
                        />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="address"
                                value={formData.address}
                                label="Address"
                            />
                        </div>
                        <div class="cs2">
                            <InputComp
                                formValuesController={formValuesController}
                                name="employerBusinessName"
                                value={formData.employerBusinessName}
                                label="Employee / Business name"
                            />
                        </div>
                        <SelectComp
                            name="photographAttached"
                            value={formData.photographAttached}
                            label="Photograph Attached"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="proofOfAgeAttached"
                            value={formData.proofOfAgeAttached}
                            label="Proof of age Attached"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="proofOfResidenceAttached"
                            value={formData.proofOfResidenceAttached}
                            label="Proof of residence Attached"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />

                        <hr class="cs4" />

                        <InputComp
                            formValuesController={formValuesController}
                            name="noOfJointCoApplicant"
                            value={formData.noOfJointCoApplicant}
                            label="No. of joint and Co Applicants"
                            type="number"
                        />

                        <InputComp
                            formValuesController={formValuesController}
                            name="applicantsSl"
                            value={formData.applicantsSl}
                            label="Applicant's SI."
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="indivNo"
                            value={formData.indivNo}
                            label="Indiv No."
                        />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="JCApplicantAddress"
                                value={formData.JCApplicantAddress}
                                label="Address"
                            />
                        </div>
                        <SelectComp
                            name="JCApplicant"
                            value={formData.JCApplicant}
                            label="Joint / Co Applicant"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <div className="cs2">
                            <InputComp
                                formValuesController={formValuesController}
                                name="JCEmployerBusinessName"
                                value={formData.JCEmployerBusinessName}
                                label="Employee / Business Name"
                            />
                        </div>
                        <div className="cs2">
                            <InputComp
                                formValuesController={formValuesController}
                                name="relationshipWithApplicant"
                                value={formData.relationshipWithApplicant}
                                label="Relationship with Applicant"
                            />
                        </div>
                        <SelectComp
                            name="JCPhotographAttached"
                            value={formData.JCPhotographAttached}
                            label="Photograph Attached"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="JCProofOfAgeAttached"
                            value={formData.JCProofOfAgeAttached}
                            label="Proof of age Attached"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="JCProofOfResidenceAttached"
                            value={formData.JCProofOfResidenceAttached}
                            label="Proof of residence Attached"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="includeInIncomeCalc"
                            value={formData.includeInIncomeCalc}
                            label="Include in income calculation"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
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
