import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { TargetedEvent } from 'preact/compat';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class SourceDetailsModel {
    sourceEleCode: string = '';
    description: string = '';
    currency: string = '';
    amount: string = '';
}

class SourceDetailsModelFilled extends SourceDetailsModel {
    sourceEleCode: string = '132';
    description: string = 'asdasdasd';
    currency: string = 'INR';
    amount: string = '13456';
}

export const SourceDetails = () => {
    const { option } = useContext(OptionContext);

    const [formData, setFormData] = useState<SourceDetailsModelFilled[]>([
        new SourceDetailsModelFilled(),
    ]);
    const [tableDataNew, settableDataNew] = useState<SourceDetailsModel>(
        new SourceDetailsModel()
    );
    // while editing existing table data this function runs and updates data in formdata
    const tableInputChangeHandler = (e: TargetedEvent<HTMLInputElement>, i) => {
        const { name, value } = e.currentTarget;
        const tempFormData = formData;
        tempFormData[i][name] = value;
        setFormData(tempFormData);
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
        setFormData([...formData, tableDataNew]);
        settableDataNew(new SourceDetailsModel());
    };
    // to delete an row from the table
    const tableRowDeleteHandler = (i: number) => {
        if (i > -1 && i < formData.length) {
            const tempArray = formData;
            tempArray.splice(i, 1);
            setFormData([...tempArray]);
        }
    };
    //   to calculate total project cost
    const totalCost = () => {
        var total: number = 0;
        for (let i = 0; i < formData.length; i++) {
            total = total + Number(formData[i].amount);
        }
        return total.toString();
    };
    return (
        <>
            <PageBody heading={'Source Details'}>
                <h2 style={{ padding: '10px 20px' }}>Estimation Of Source</h2>
                <div class="table_container" style="overflowX:hidden">
                    <table class="tbl">
                        <thead>
                            <tr>
                                <th width="10%">SI. No.</th>
                                <th width="15%">Source Element Code</th>
                                <th>Description</th>
                                <th width="10%">Currency</th>
                                <th width="20%">Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((data, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>
                                            <input
                                                name={'costElementCode'}
                                                value={data.sourceEleCode}
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
                                            <input value={'INR'} disabled />
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
                                                    tableRowDeleteHandler(i)
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
                                        name={'sourceEleCode'}
                                        value={tableDataNew.sourceEleCode}
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
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <b>Total</b>
                                </td>
                                <td>{totalCost()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </PageBody>
        </>
    );
};
