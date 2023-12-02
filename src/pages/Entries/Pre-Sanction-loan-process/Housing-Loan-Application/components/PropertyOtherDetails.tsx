import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import Input from '../../../../../shared/components/InputComp/InputComp';
import Addresscomp from '../../../../../shared/components/AddressComp/AddressComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';

class applicantData {
    purchasePrice: string = '';
    registrationchargesAndStampDuty: string = '';
    presentStage: string = '';
    landArea: string = '';
    builtUpArea: string = '';
    Property: string = '';
    dwellingUnitHasBooked: string = '';
    amountAlreadyPaid: string = '';
    particularsOfCompletion: string = '';
    
}

export const PropertyOtherDetails = () => {
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
                        <div class="cs2">
                            <div
                                style={{ overflowX: 'auto', padding: '0 20px' }}
                                class="cs4 table_container"
                            >
                                <table class="tbl">
                                   
                                    <tbody>
                                        <tr>
                                            <td width="40%">Purchase Price</td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <Input
                                                    value={formData.purchasePrice}
                                                    name={'landValue'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="40%">Registration Charges And Stamp Duty</td>
                                            <td width="10%">INR</td>
                                            <td width="50%">
                                                <Input
                                                    formValuesController={
                                                        formValuesController
                                                    }
                                                    value={
                                                        formData.registrationchargesAndStampDuty
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
                                                        formData.purchasePrice
                                                    ) +
                                                        Number(
                                                            formData.registrationchargesAndStampDuty
                                                        )}
                                                </b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="cs2"></div>
                        <div class="cs2">
                        <InputComp
                            formValuesController={formValuesController}
                            name="presentStage"
                            value={formData.presentStage}
                            label="Present Stage"
                        />
                        </div>
                         
                        <InputComp
                            formValuesController={formValuesController}
                            name="landArea"
                            value={formData.landArea}
                            label="Land Area"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="builtUpArea"
                            value={formData.builtUpArea}
                            label="Built Up Area"
                        />
                        <SelectComp
                            name="Property"
                            value={formData.Property}
                            label="Property"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                         <SelectComp
                            name="dwellingUnitHasBooked"
                            value={formData.dwellingUnitHasBooked}
                            label="Dwelling Unit Has Booked"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="amountAlreadyPaid"
                            value={formData.amountAlreadyPaid}
                            label="Amount already paid"
                            format='amount'
                        />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="particularsOfCompletion"
                                value={formData.particularsOfCompletion}
                                label="Particulars Of Completion/Occupancy Certificate Issued" 
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


