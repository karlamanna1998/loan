import { useState, useContext } from "preact/hooks";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import SubmitButtonSet from "../../../../../shared/components/SubmitButtonSet/SubmitButtonSet";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";

class LoanApplicationDetailModel {
    
  applicationDate: string = '';
  applicant : string = '';
  loanCode: string = '';
  loanAmount : string = '';
  address: string = '';
  cityCode : string = '';
  
}

export const LoanApplicationDetails = () => {
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
                            name="applicant"
                            value={formData.applicant}
                            label="Applicant"
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanCode"
                            value={formData.loanCode}
                            label="Loan Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanAmount"
                            value={formData.loanAmount}
                            label="Loan Amount Requested"
                            format='amount'
                            class='cs2'
                        />
                        <TextAreaComp
                        class='cs4'
                            formValuesController={formValuesController}
                            name="address"
                            value={formData.address}
                            label="Address"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="cityCode"
                            value={formData.cityCode}
                            label="City code"
                        />
                        
                        
                        
                    </fieldset>
                    <div className="cs4">
                        <SubmitButtonSet />
                    </div>
                </form>
            </PageBody>
        </>
  )
}
