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

class applicantData {
    loanPurposeCode: string = '';
    loanAmtRequested: string = '';
    basisOfInterestRate: string = '';
    interestCatagory: string = '';
    tenor: string = '';
    interestRate: string = '';
    loanPurposeDescription: string = '';
    tableData: Array<{
        costElementCode: string;
        description: string;
        amount: string;
    }> = [
        {
            costElementCode: '10',
            description: 'This is dummy description',
            amount: '10000',
        },
    ];
}

class newTableData {
    costElementCode: string = '';
    description: string = '';
    currency: string = '';
    amount: string = '';
}

export const Loan = () => {
    const [formError, setFormError] = useState<boolean>(false);
    const [formData, setFormData] = useState<applicantData>(
        new applicantData()
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

    //   to calculate total project cost
    const totalCost = () => {
        var total: number = 0;
        for (let i = 0; i < formData.tableData.length; i++) {
            total = total + Number(formData.tableData[i].amount);
        }
        return total.toString();
    };
    //   fired when submitted
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <PageBody heading={'Loan Details'}>
                <form action="">
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanPurposeCode"
                            value={formData.loanPurposeCode}
                            label="Loan Purpose Code"
                        />
                        <div class="cs2">
                            <InputComp
                                formValuesController={formValuesController}
                                name="loanAmtRequested"
                                value={formData.loanAmtRequested}
                                label="Loan Amount Requested"
                                format="amount"
                            />
                        </div>
                        <SelectComp
                            name="basisOfInterestRate"
                            value={formData.basisOfInterestRate}
                            label="Basis of Interest Rate"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="interestCatagory"
                            value={formData.interestCatagory}
                            label="Interest Category"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="tenor"
                            value={formData.tenor}
                            label="Tenor (Loan Period in Months)"
                        />

                        <InputComp
                            formValuesController={formValuesController}
                            name="interestRate"
                            value={formData.interestRate}
                            label="Interest Rate"
                            type="text"
                            format="interest"
                        />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="loanPurposeDescription"
                                value={formData.loanPurposeDescription}
                                label="Loan Purpose Description"
                            />
                        </div>
                        <h2 style={{ padding: '10px 20px' }}>Project Cost</h2>

                        <div
                            style={{ overflowX: 'auto', padding: '0 20px' }}
                            class="cs4 table_container"
                        >
                            <table class="tbl">
                                <thead>
                                    <tr>
                                        <th width="10%">SL.No</th>
                                        <th width="15%">Cost Element Code</th>
                                        <th width="35%">Description</th>
                                        <th width="10%">Currency</th>
                                        <th width="20%">Amount</th>
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
                                                        name={'costElementCode'}
                                                        value={
                                                            data.costElementCode
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
                                                        name={'description'}
                                                        value={data.description}
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
                                                        name={'amount'}
                                                        value={data.amount}
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
                                                name={'costElementCode'}
                                                value={
                                                    tableDataNew.costElementCode
                                                }
                                                onInput={(e) =>
                                                    tableValuesController(e)
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                name={'description'}
                                                value={tableDataNew.description}
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
                                                    name={'amount'}
                                                    value={tableDataNew.amount}
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
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <b>Total</b>
                                        </td>
                                        <td>{totalCost()}</td>
                                    </tr>
                                </tbody>
                            </table>
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
