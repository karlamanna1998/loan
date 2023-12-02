import { useContext, useEffect, useState } from "preact/hooks";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";
import SubmitButtonSet from "../../../../../shared/components/SubmitButtonSet/SubmitButtonSet";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import Input from "../../../../../shared/components/InputComp/InputComp";
import SelectComp from "../../../../../shared/components/SelectComp/SelectComp";

class applicantData {
  hosingLoanFor: string = "";
  builderCode: string = "";
  projectName: string = "";
  sellerAndAddress: string = "";
  cityCode: string = "";
  stateCode: string = "";
  countryCode: string = "";
  pinCode: string = "";
}

export const BuilderDetails = () => {
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
      <PageBody  heading={'Builder Details'}>
        <form action="" onSubmit={onSubmitHandler}>
          <fieldset
            className="fieldWrapper dg col4"
            disabled={option === "View"}
          >
            <SelectComp
              name="hosingLoanFor"
              value={formData.hosingLoanFor}
              label="Housing Loan For"
              optionData={dummyoptionArray}
              formValuesController={formValuesController}
            />
            <InputComp
              formValuesController={formValuesController}
              name="builderCode"
              value={formData.builderCode}
              label="Builder Code"
            />
            <div class="cs2">
               <Input value="Builder name" name="" label="-" disabled={true} /> 
            </div>
            <div class="cs4">
            <InputComp
              formValuesController={formValuesController}
              name="projectName"
              value={formData.projectName}
              label="Project Name"
            />
            </div>
           
            <div class="cs4">
              <TextAreaComp
                formValuesController={formValuesController}
                name="sellerAndAddress"
                value={formData.sellerAndAddress}
                label="Seller And His Address"
              />
            </div>
            <InputComp
              formValuesController={formValuesController}
              name="cityCode"
              value={formData.cityCode}
              label="City Code"
            />
            <InputComp
              formValuesController={formValuesController}
              name="stateCode"
              value={formData.stateCode}
              label="State Code"
            />
            <InputComp
              formValuesController={formValuesController}
              name="countryCode"
              value={formData.countryCode}
              label="Country Code"
            />
            <InputComp
              formValuesController={formValuesController}
              name="pinCode"
              value={formData.pinCode}
              label="Pin Code"
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

