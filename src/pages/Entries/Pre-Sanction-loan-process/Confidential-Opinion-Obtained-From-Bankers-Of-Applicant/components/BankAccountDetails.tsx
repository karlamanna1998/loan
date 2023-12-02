import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { TargetedEvent } from 'preact/compat';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class bankAccountDetailsModel {
    individualNumber: string = '';
    acountAtBank: string = '';
    accountAtBranch: string = '';
    branchAddress: string = '';
    numberOfAccountHeld: string = '';
    effectiveDate: string = '';
    letterFromBankReferenceNumber: string = '';
    dated: string = '';
    tableData: Array<{
        accountNumber: string ;
        natureOfAccount: string ;
         limit: string ;
    }> = [
        {
            accountNumber: "123456789",
        natureOfAccount: "savings",
        limit: "220000",
        },
    ];
    
}

class newTableData {
    accountNumber: string = '';
    natureOfAccount: string = '';
    limit: string = '';
}

export const BankAccountDetails = () => {
    const [formError, setFormError] = useState<boolean>(false);
    const [formData, setFormData] = useState<bankAccountDetailsModel>(
        new bankAccountDetailsModel()
    );
    const [tableDataNew, settableDataNew] = useState<newTableData>(
        new newTableData()
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
        settableDataNew(new newTableData());
    };

    // while editing existing table data this function runs and updates data in formdata
    const tableInputChangeHandler = (e: TargetedEvent<HTMLInputElement>, i) => {
        const { name, value } = e.currentTarget;
        const tempFormData = formData;
        tempFormData['tableData'][i][name] = value;
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
            <PageBody heading={'Bank Account Details'}>
                <form action="">
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="individualNumber"
                            value={formData.individualNumber}
                            label="Individual Number"
                        />
                            <InputComp
                                formValuesController={formValuesController}
                                name="acountAtBank"
                                value={formData.acountAtBank}
                                label="Account At Bank"
                            />
                             <InputComp
                                formValuesController={formValuesController}
                                name="accountAtBranch"
                                value={formData.accountAtBranch}
                                label="Account At Branch"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="numberOfAccountHeld"
                                value={formData.numberOfAccountHeld}
                                label="Number Of Account Held"
                            />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="branchAddress"
                                value={formData.branchAddress}
                                label="Branch Address"
                            />
                        </div>
                        
                        <div
                            style={{ overflowX: 'auto', padding: '0 20px' }}
                            class="cs4 table_container"
                        >
                            <table class="tbl">
                                <thead>
                                    <tr>
                                        <th width="10%">SL.No</th>
                                        <th width="30%">Account Number</th>
                                        <th width="20%">Nature Of Account</th>
                                        <th width="10%">Currency</th>
                                        <th width="20%">Limit</th>
                                        <th width="10%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.tableData.map((data, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <input
                                                        name={'accountNumber'}
                                                        value={
                                                            data.accountNumber
                                                        }
                                                        onInput={(e) =>
                                                            tableInputChangeHandler(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        name={'natureOfAccount'}
                                                        value={data.natureOfAccount}
                                                        onInput={(e) =>
                                                            tableInputChangeHandler(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        value={'INR'}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        name={'limit'}
                                                        value={data.limit}
                                                        onInput={(e) =>
                                                            tableInputChangeHandler(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        class="bttn table_delete_btn"
                                                        onClick={() =>
                                                            tableRowDeleteHandler(
                                                                i
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input
                                                name={'accountNumber'}
                                                value={
                                                    tableDataNew.accountNumber
                                                }
                                                onInput={(e) =>
                                                    tableValuesController(e)
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                name={'natureOfAccount'}
                                                value={tableDataNew.natureOfAccount}
                                                onInput={(e) =>
                                                    tableValuesController(e)
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input value={'INR'} />
                                        </td>
                                        <td>
                                            <div class="add_button_wrapper">
                                                <input
                                                    name={'limit'}
                                                    value={tableDataNew.limit}
                                                    onInput={(e) =>
                                                        tableValuesController(e)
                                                    }
                                                />
                                                <button
                                                    type={'button'}
                                                    class="add_btn"
                                                    onClick={addTableDataToForm}
                                                    disabled={option === 'View'}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <InputComp
                                formValuesController={formValuesController}
                                name="effectiveDate"
                                value={formData.effectiveDate}
                                label="Effective Date"
                                type='date'
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="letterFromBankReferenceNumber"
                                value={formData.letterFromBankReferenceNumber}
                                label="Letter From Bank Reference Number"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="dated"
                                value={formData.dated}
                                label="Dated"
                                type='date'
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
