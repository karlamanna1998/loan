import { TargetedEvent } from "preact/compat";
import { useState, useContext } from "preact/hooks";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import SubmitButtonSet from "../../../../../shared/components/SubmitButtonSet/SubmitButtonSet";

class otherDetailsModel {
  applicationDate: string = "";
  loanApplied: string = "";
  loanCode: string = "";
  purposeCode: string = "";
  applicant: string = "";
  tableData: Array<tableModel> = [new tableModel()];

  totalCharges: string = "";
  totalChargesOnserviceTax: string = "";
  serviceTaxOnCharges: string = "";
}
class tableModel {
  chargeCode: string = "";
  chargeDescription: string = "";
  GLCode: string = "";
  taxToBeCollected: string = "";
}

export const OtherTaxDetails = () => {

  const [formError, setFormError] = useState<boolean>(false);
  const [formData, setFormData] = useState<otherDetailsModel>(
    new otherDetailsModel()
  );
  const [tableDataNew, settableDataNew] = useState<tableModel>(
    new tableModel()
  );
  const dummyoptionArray = [{ value: "" }, { value: "o1" }];
  const { option } = useContext(OptionContext);

  // function to store input field values in a common form state
  const formValuesController = (inputVal: string, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputVal,
    }));
  };
  // function to store table field values in a common table state
  const tableValuesController = (e: TargetedEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    settableDataNew((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // to add newly typed table data to table
  const addTableDataToForm = () => {
    setFormData((prevState) => ({
      ...prevState,
      tableData: [...prevState.tableData, tableDataNew],
    }));
    settableDataNew(new tableModel());
  };

  // while editing existing table data this function runs and updates data in formdata
  const tableInputChangeHandler = (e: TargetedEvent<HTMLInputElement>, i) => {
    const { name, value } = e.currentTarget;
    const tempFormData = formData;
    tempFormData["tableData"][i][name] = value;
    setFormData(tempFormData);
  };

  // to delete an row from the table
  const tableRowDeleteHandler = (i: number) => {
    if (i > -1 && i < formData.tableData.length) {
      const tempArray = formData.tableData;
      tempArray.splice(i, 1);
      setFormData((prevState) => ({
        ...prevState,
        tableData: [...tempArray],
      }));
    }
  };

  //   fired when submitted
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <PageBody heading={"Charges Details"}>
        <form action="">
          <fieldset
            className="fieldWrapper dg col4"
            disabled={option === "View"}
          >
            <fieldset className="cs4 pa-15 dg col4">
              <InputComp
                formValuesController={formValuesController}
                name="applicationDate"
                value={formData.applicationDate}
                label="Applicant Date"
                type="date"
              />
              <InputComp
                class="cs2"
                formValuesController={formValuesController}
                name="loanApplied"
                value={formData.loanApplied}
                label="Loan Applied"
                format="amount"
              />
              <InputComp
                formValuesController={formValuesController}
                name="loanCode"
                value={formData.loanCode}
                label="Loan Code"
              />
              <InputComp
                formValuesController={formValuesController}
                name="purposeCode"
                value={formData.purposeCode}
                label="Purpose Code"
              />
              <InputComp
                formValuesController={formValuesController}
                name="applicant"
                value={formData.applicant}
                label="Applicant"
              />
            </fieldset>
            <div className="spacer cs4"></div>
            <div className="spacer cs4"></div>
            <div
              style={{ overflowX: "auto", padding: "0 20px" }}
              class="cs4 table_container"
            >
              <table class="tbl">
                <thead>
                  <tr>
                    <th>Charge code</th>
                    <th>Charge Code Description</th>
                    <th>GL Code</th>
                    <th>Tax to be collected</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {formData.tableData.map((data, i) => {
                    return (
                      <tr>
                        <td>
                          <input
                            name={"chargeCode"}
                            value={data.chargeCode}
                            onInput={(e) => tableInputChangeHandler(e, i)}
                          />
                        </td>
                        <td>
                          <input
                            name={"chargeDescription"}
                            value={data.chargeDescription}
                            onInput={(e) => tableInputChangeHandler(e, i)}
                          />
                        </td>
                        <td>
                          <input
                            name={"GLCode"}
                            value={data.GLCode}
                            onInput={(e) => tableInputChangeHandler(e, i)}
                          />
                        </td>
                        <td>
                          <input
                            name={"totalToBeCollected"}
                            value={data.taxToBeCollected}
                            onInput={(e) => tableInputChangeHandler(e, i)}
                          />
                        </td>
                        
                        <td>
                          <button
                            type="button"
                            class="bttn table_delete_btn"
                            onClick={() => tableRowDeleteHandler(i)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>
                      <input
                        name={"chargeCode"}
                        value={tableDataNew.chargeCode}
                        onInput={(e) => tableValuesController(e)}
                      />
                    </td>
                    <td>
                      <input
                        name={"chargeDescription"}
                        value={tableDataNew.chargeDescription}
                        onInput={(e) => tableValuesController(e)}
                      />
                    </td>
                    <td>
                      <input
                        name={"GLCode"}
                        value={tableDataNew.GLCode}
                        onInput={(e) => tableValuesController(e)}
                      />
                    </td>
                    <td>
                      <div class="add_button_wrapper">
                        <input
                          name={"taxToBeCollected"}
                          value={tableDataNew.taxToBeCollected}
                          onInput={(e) => tableValuesController(e)}
                        />
                        <button
                          type={"button"}
                          class="add_btn"
                          onClick={addTableDataToForm}
                          disabled={option === "View"}
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="spacer cs4"></div>
            <h4 className="cs2 dg pic">Total other tax to be collected on service tax:</h4>
            <InputComp
              formValuesController={formValuesController}
              name=""
              value={''}
            />
            <hr className="cs4 divider ma-t-10" />

            <h4 className="cs2 dg pic">
              Total charges to be collected :
            </h4>
            <InputComp
              formValuesController={formValuesController}
              name=""
              value={''}
            />
            <h4 className="cs2 dg pic">Total tax to be collected on charges charges :</h4>
            <InputComp
              formValuesController={formValuesController}
              name=""
              value={''}
            />
            <h4 className="cs2 dg pic">Total amount to be collected from applicant :</h4>
            <InputComp
              formValuesController={formValuesController}
              name=""
              value={''}
            />
            <h4 className="cs2 dg pic">Payment date</h4>
            <InputComp
              formValuesController={formValuesController}
              name=""
              value={''}
              type='date'
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
