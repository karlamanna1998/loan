import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import Input from '../../../../../shared/components/InputComp/InputComp';

class RecieptDetailModel {
  cashRecieptAmount: string = '100';
  cashGLAccessCode: string = '';
  bankRecieptAmount: string = '3422';
  bankGLAccessCode: string = '';
  transferRecieptAmount: string = '2222';
  tranferGLAccessCode: string = '';
  chequeNumber: string = '';
  bankCode: string = '';
  BranchCode: string = '';
  transactionNarration: string = '';
}

export const RecieptDetails = () => {
  const [formData, setFormData] = useState<RecieptDetailModel>(
    new RecieptDetailModel()
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
      <PageBody heading={'Reciept Details'}>
        <form action="" onSubmit={onSubmitHandler}>
          <fieldset
            className="fieldWrapper dg col4"
            disabled={option === 'View'}
          >
            <div class="cs4">
              <div
                style={{ overflowX: 'auto' }}
                class="cs4 table_container"
              >
                <table class="tbl">
                  <thead>
                    <tr>
                      <th width={"10%"}>
                        Details
                      </th>
                      <th width={"40%"}>
                        Reciept Amount
                      </th>
                      <th width={"50%"}>
                        GL Access Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cash</td>
                      <td><Input
                        formValuesController={
                          formValuesController
                        }
                        value={
                          formData.cashRecieptAmount
                        }
                        name={'cashRecieptAmount'}
                      /></td>
                      <td>
                        <Input
                          value={formData.cashGLAccessCode}
                          name={'cashGLAccessCode'}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td><Input
                        formValuesController={
                          formValuesController
                        }
                        value={
                          formData.bankRecieptAmount
                        }
                        name={'bankRecieptAmount'}
                      /></td>
                      <td>
                        <Input
                          formValuesController={
                            formValuesController
                          }
                          value={
                            formData.bankGLAccessCode
                          }
                          name={'bankGLAccessCode'}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Tranfer</td>
                      <td><Input
                        formValuesController={
                          formValuesController
                        }
                        value={
                          formData.transferRecieptAmount
                        }
                        name={'transferRecieptAmount'}
                      /></td>
                      <td>
                        <Input
                          formValuesController={
                            formValuesController
                          }
                          value={
                            formData.tranferGLAccessCode
                          }
                          name={'tranferGLAccessCode'}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
                      <td><b>
                        {Number(
                          formData.cashRecieptAmount
                        ) +
                          Number(
                            formData.bankRecieptAmount
                          ) +
                          Number(
                            formData.transferRecieptAmount
                          )}
                      </b></td>
                      <td>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </fieldset >
         <div class="cs4 spacer"></div>
          <fieldset className=" dg col4"
            disabled={option === 'View'}>
              <h4 style={{margin:"15px"}} class='cs4'><u>Bank Details</u></h4>
          <InputComp
            formValuesController={formValuesController}
            name="chequeNumber"
            value={formData.chequeNumber}
            label="Cheque Number"
          />
          <InputComp
           formValuesController={formValuesController}
           name="bankCode"
           value={formData.bankCode}
           label="Bank Code"
           />
          <InputComp
           formValuesController={formValuesController}
           name="BranchCode"
           value={formData.BranchCode}
           label="Branch Code"
          />
          </fieldset>
          <fieldset className="fieldWrapper dg col4"
            disabled={option === 'View'}>
            <TextAreaComp
            class="cs4"
            formValuesController={formValuesController}
            name="transactionNarration"
            value={formData.transactionNarration}
            label='Transaction Narration'
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





