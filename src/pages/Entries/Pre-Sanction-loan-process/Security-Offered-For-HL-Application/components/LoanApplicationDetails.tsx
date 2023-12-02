import { useContext, useEffect, useState } from "preact/hooks";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";
import SubmitButtonSet from "../../../../../shared/components/SubmitButtonSet/SubmitButtonSet";
import { OptionContext } from "../../../../../State-Management/optionContext/context";

class applicantData {
  dateOfApplication: string = "";
  applicant: string = "";
  loanCode: string = "";
  loanPurposeCode: string = "";
  loanAmountRequested: string = "";
  entryDate: string = "";
  numberOfSecuritiesOffered: string = "";
  serialNo: string = "";
  securityCode: string = "";
  briefDescriptionOfSecurity: string = "";
}

export const LoanApplicationDetails = () => {
  const [formData, setFormData] = useState<applicantData>(new applicantData());
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
      <PageBody  heading={'Loan Application Details'}>
        <form action="" onSubmit={onSubmitHandler}>
          <fieldset
            className="fieldWrapper dg col4"
            disabled={option === "View"}
          >
            <InputComp
              formValuesController={formValuesController}
              name="dateOfApplication"
              value={formData.dateOfApplication}
              label="Date Of Application"
              type="date"
            />
            <InputComp
              formValuesController={formValuesController}
              name="applicant"
              value={formData.applicant}
              label="Applicant"
            />
             <InputComp
              formValuesController={formValuesController}
              name="dateOfAppliloanCodeation"
              value={formData.loanCode}
              label="Loan Code"
              
            />
            <InputComp
              formValuesController={formValuesController}
              name="loanPurposeCode"
              value={formData.loanPurposeCode}
              label="Loan Purpose Code"
            />
            <InputComp
              formValuesController={formValuesController}
              name="loanAmountRequested"
              value={formData.loanAmountRequested}
              label="Loan Amount Requested"
              format="amount"
              class ='cs2'
            />
            <hr class="cs4" />
            <InputComp
              formValuesController={formValuesController}
              name="entryDate"
              value={formData.entryDate}
              label="Entry Date"
              type="date"
            />
            <InputComp
              formValuesController={formValuesController}
              name="numberOfSecuritiesOffered"
              value={formData.numberOfSecuritiesOffered}
              label="Number of Securities Offered"
            />
            <InputComp
              formValuesController={formValuesController}
              name="serialNo"
              value={formData.serialNo}
              label="Serial Number"
            />
            <InputComp
              formValuesController={formValuesController}
              name="securityCode"
              value={formData.securityCode}
              label="Security Code"
            />
            
            <div class="cs4">
              <TextAreaComp
                formValuesController={formValuesController}
                name="briefDescriptionOfSecurity"
                value={formData.briefDescriptionOfSecurity}
                label="Brief Description Of Security"
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


