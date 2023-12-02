import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';

class securityDetailsModel {
    approxValue: string = '';
    primaryOrCollateral: string = '';
    totPriSecValue: string = '';
    totcolSecValue: string = '';
    totValOfSecOffered: string = '';
    remarks: string = '';
}
export const SecurityDetails = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<securityDetailsModel>(
        new securityDetailsModel()
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
            <PageBody heading={'Security Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="approxValue"
                            value={formData.approxValue}
                            label="Approximate value"
                            format="amount"
                        />
                        <SelectComp
                            name="primaryOrCollateral"
                            value={formData.primaryOrCollateral}
                            label="Primary / Collateral"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <div className="spacer cs4"></div>
                        <div className="spacer cs4"></div>

                        <div
                            class="cs4 table_container"
                            style={{ overflowX: 'auto', padding: '0 20px' }}
                        >
                            <table className="tbl">
                                <thead>
                                    <tr>
                                        <th width="10%">SI No.</th>
                                        <th width="15%">Security code</th>
                                        <th width="20%">Concise Description</th>
                                        <th>Brief Description of security</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="spacer cs4"></div>
                        <div className="spacer cs4"></div>
                        <InputComp
                            formValuesController={formValuesController}
                            name="totPriSecValue"
                            value={formData.totPriSecValue}
                            label="Total primary security value"
                            format="amount"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="totcolSecValue"
                            value={formData.totcolSecValue}
                            label="Total collateral security value"
                            format="amount"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="totValOfSecOffered"
                            value={formData.totValOfSecOffered}
                            label="Total value of security offered"
                            format="amount"
                        />
                        <TextAreaComp
                            formValuesController={formValuesController}
                            name="remarks"
                            value={formData.remarks}
                            label="Remarks / Notes"
                            class="cs4"
                        />
                    </fieldset>
                </form>
            </PageBody>
        </>
    );
};
