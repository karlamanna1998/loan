import { useState, useContext } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';

class valuationDetailsModel {
    marketValueofLandByAppli: string = '';
    marketValueofBuildByAppli: string = '';
    totalByAppli: string = '';
    marketValueofLand: string = '';
    marketValueofBuild: string = '';
    total: string = '';
    estValueOfForceSale: string = '';
    remarks: string = '';
}

export const ValuationDetails = () => {
    const [formData, setFormData] = useState<valuationDetailsModel>(
        new valuationDetailsModel()
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
            <PageBody heading={'Valuation Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <fieldset class="cs4 dg col4 pa-10">
                            <h3 class="  pa-10">
                                <u>Declared by applicant</u>
                            </h3>
                            <div className="cs4"></div>
                            <div className="cs1"></div>
                            <div class="cs2">
                                <div
                                    style={{
                                        overflowX: 'auto',
                                        padding: '0 20px',
                                    }}
                                    class="cs4 table_container"
                                >
                                    <table class="tbl">
                                        <thead>
                                            <tr>
                                                <th colSpan={3}>
                                                    Market Value Of The Property
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="40%">Land</td>
                                                <td width="10%">INR</td>
                                                <td width="50%">
                                                    <InputComp
                                                        formValuesController={
                                                            formValuesController
                                                        }
                                                        value={
                                                            formData.marketValueofLandByAppli
                                                        }
                                                        name={
                                                            'marketValueofLandByAppli'
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="40%">Building</td>
                                                <td width="10%">INR</td>
                                                <td width="50%">
                                                    <InputComp
                                                        formValuesController={
                                                            formValuesController
                                                        }
                                                        value={
                                                            formData.marketValueofBuildByAppli
                                                        }
                                                        name={
                                                            'marketValueofBuildByAppli'
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="40%">
                                                    <b>Total</b>
                                                </td>
                                                <td width="10%">INR</td>
                                                <td width="50%">
                                                    <b>
                                                        {Number(
                                                            formData.marketValueofLandByAppli
                                                        ) +
                                                            Number(
                                                                formData.marketValueofBuildByAppli
                                                            )}
                                                    </b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="cs4 ma-y-10"></div>
                        </fieldset>
                        <div className="cs4 ma-y-10"></div>
                        <div className="cs4 ma-y-10"></div>
                        <div className="cs1"></div>
                        <div class="cs2">
                            <div
                                style={{
                                    overflowX: 'auto',
                                    padding: '0 20px',
                                }}
                                class="cs4 table_container"
                            >
                                <table class="tbl">
                                    <thead>
                                        <tr>
                                            <th colSpan={3}>
                                                Market Value Of The Property
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="40%">Land</td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <InputComp
                                                    formValuesController={
                                                        formValuesController
                                                    }
                                                    value={
                                                        formData.marketValueofLand
                                                    }
                                                    name={'marketValueofLand'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">Building</td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <InputComp
                                                    formValuesController={
                                                        formValuesController
                                                    }
                                                    value={
                                                        formData.marketValueofBuild
                                                    }
                                                    name={'marketValueofBuild'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <b>Total</b>
                                            </td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <b>
                                                    {Number(
                                                        formData.marketValueofLandByAppli
                                                    ) +
                                                        Number(
                                                            formData.marketValueofBuildByAppli
                                                        )}
                                                </b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                Estimated value on force sale
                                            </td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <InputComp
                                                    formValuesController={
                                                        formValuesController
                                                    }
                                                    value={
                                                        formData.estValueOfForceSale
                                                    }
                                                    name={'estValueOfForceSale'}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="cs4 ma-y-10"></div>
                        <div className="cs4 ma-y-10"></div>
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="remarks"
                            value={formData.remarks}
                            label="Remarks / Notes of the valuer"
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
