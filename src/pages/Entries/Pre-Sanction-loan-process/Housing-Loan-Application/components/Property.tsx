import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import Input from '../../../../../shared/components/InputComp/InputComp';
import Addresscomp from '../../../../../shared/components/AddressComp/AddressComp';

class applicantData {
    surveyNo: string = '';
    plotNo: string = '';
    doorNo: string = '';
    flatNo: string = '';
    addressOfPropertyProposed: string = '';
    cityCode: string = '';
    stateCode: string = '';
    countryCode: string = '';
    pinCode: string = '';
    residualAgeOfHouse: string = '';
    allottedByCoOpHousing: string = '';
    landValue: string = '10';
    buildingValue: string = '20';
}

export const Property = () => {
    const [formData, setFormData] = useState<applicantData>(
        new applicantData()
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
            <PageBody heading={'Property'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="surveyNo"
                            value={formData.surveyNo}
                            label="Survey No"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="plotNo"
                            value={formData.plotNo}
                            label="Plot No"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="doorNo"
                            value={formData.doorNo}
                            label="Door No"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="flatNo"
                            value={formData.flatNo}
                            label="Flat No"
                        />
                        <div class="cs4">
                            <Addresscomp
                                address={{
                                    label: 'Address Of The Property Proposed',
                                    formValueController: formValuesController,
                                    name: 'addressOfPropertyProposed',
                                    value: formData.addressOfPropertyProposed,
                                }}
                                country={{
                                    label: 'country Code',
                                    formValueController: formValuesController,
                                    name: 'countryCode',
                                    value: formData.countryCode,
                                }}
                                state={{
                                    label: 'State Code',
                                    formValueController: formValuesController,
                                    name: 'stateCode',
                                    value: formData.stateCode,
                                }}
                                city={{
                                    label: 'City Code',
                                    formValueController: formValuesController,
                                    name: 'cityCode',
                                    value: formData.cityCode,
                                }}
                                pincode={{
                                    label: 'PinCode',
                                    formValueController: formValuesController,
                                    name: 'pinCode',
                                    value: formData.pinCode,
                                }}
                            />
                        </div>
                        <InputComp
                            formValuesController={formValuesController}
                            name="residualAgeOfHouse"
                            value={formData.residualAgeOfHouse}
                            label="Residual Age of The House/Flat"
                            format="year"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="allottedByCoOpHousing"
                            value={formData.allottedByCoOpHousing}
                            label="Allotted By Co-Op Housing Society"
                        />
                        <div class="cs2"></div>
                        <div class="cs1"></div>
                        <div class="cs2">
                            <div
                                style={{ overflowX: 'auto', padding: '0 20px' }}
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
                                                <Input
                                                    value={formData.landValue}
                                                    name={'landValue'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">Building</td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <Input
                                                    formValuesController={
                                                        formValuesController
                                                    }
                                                    value={
                                                        formData.buildingValue
                                                    }
                                                    name={'buildingValue'}
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
                                                        formData.landValue
                                                    ) +
                                                        Number(
                                                            formData.buildingValue
                                                        )}
                                                </b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
