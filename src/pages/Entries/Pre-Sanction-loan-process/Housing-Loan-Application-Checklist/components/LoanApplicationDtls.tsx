import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';

class loanApplicationDetailsModel {
    DateOfApplication: string = '';
    AmountRequested: string = '';
    Applicant: string = '';
    LoanCode: string = '';
    LoanPurposeCode: string = '';
    Address: string = '';
    isphotoOfBankStatementGiven: string = '';
    isphotoOfBankStatementGivenReason: string = '';
}

const LoanApplicationDtls = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<loanApplicationDetailsModel>(
        new loanApplicationDetailsModel()
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
            <PageBody heading={'Loan Application Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="pa-10 dg col4"
                        disabled={option === 'View'}
                    >
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
                        <SelectComp
                            name="isphotoOfBankStatementGiven"
                            value={formData.isphotoOfBankStatementGiven}
                            label="Photo copies of latest bank statement for last 6 months"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                            option="yesNo"
                        />
                        <TextAreaComp
                            class="cs3"
                            formValuesController={formValuesController}
                            name="isphotoOfBankStatementGivenReason"
                            value={formData.isphotoOfBankStatementGivenReason}
                            label="If no give reason"
                        />
                    </fieldset>
                </form>
            </PageBody>
        </>
    );
};

export default LoanApplicationDtls;
