import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class LoanApplicationDetailModel {
    
    applicationDate: string = '';
    applicant : string = '';
    loanCode: string = '';
    loanAmount : string = '';
    partyCode: string = '';
    
}

export const ApplicantDetails = () => {
    const [formData, setFormData] = useState<LoanApplicationDetailModel>(
        new LoanApplicationDetailModel()
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
            <PageBody heading={'Loan Application Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className=" dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicationDate"
                            value={formData.applicationDate}
                            label="Application Date"
                            type="date"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanCode"
                            value={formData.loanCode}
                            label="Loan Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="partyCode"
                            value={formData.partyCode}
                            label="Party Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicant"
                            value={formData.applicant}
                            label="Applicant"
                            class='cs2'
                        />
                        
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanAmount"
                            value={formData.loanAmount}
                            label="Loan Amount Requested"
                            format='amount'
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

export default ApplicantDetails

