import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class applicantData {
    dateOfAgreement: string = '';
    agreementNumber: string = '';
    agreementInTheNameOf: string = '';
    firstMorgage: string = '';
    firstMorgageName: string = '';
    ownershipStatus: string = '';
    landHoldingType: string = '';
    dateOfExpiryOfLeasePeriod: string = '';
    unexpiredLeasePeriodYear: string = '';
    unexpiredLeasePeriodMonth: string = '';
    dwellingUnitStatus: string = '';
    ageOfReadyBuiltHouseYear: string = '';
    ageOfReadyBuiltHouseMonth: string = '';
    periodRequiredForConstructionYear: string = '';
    periodRequiredForConstructionMonth: string = '';
    existingHouse: string = '';
    houseRent : string = '';
    houseForSelfOrRenting: string = '';
    expectedRentPerMonth: string = '';
}

export const PropertyDetails = () => {
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
            <PageBody heading={''}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        
                        <InputComp
                            formValuesController={formValuesController}
                            name="dateOfAgreement"
                            value={formData.dateOfAgreement}
                            label="Date Of Agreement"
                            type="date"
                        />
                        <InputComp
                            name="agreementNumber"
                            value={formData.agreementNumber}
                            label="Agreement Number"
                            formValuesController={formValuesController}
                        />
                        <div class="cs2">
                        <InputComp
                            name="agreementInTheNameOf"
                            value={formData.agreementInTheNameOf}
                            label="Agreement In The Name Of"
                            formValuesController={formValuesController}
                        />
                        </div>
                        <SelectComp
                            name="firstMorgage"
                            value={formData.firstMorgage}
                            label="First Morgage"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <div class="cs2">
                        <InputComp
                            name="firstMorgageName"
                            value={formData.firstMorgageName}
                            label="First Morgage Name"
                            formValuesController={formValuesController}
                        />
                        </div>
                        <SelectComp
                            name="ownershipStatus"
                            value={formData.ownershipStatus}
                            label="Ownership Status"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <SelectComp
                            name="landHoldingType"
                            value={formData.landHoldingType}
                            label="Land Holding Type"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                       <InputComp
                            formValuesController={formValuesController}
                            name="dateOfExpiryOfLeasePeriod"
                            value={formData.dateOfExpiryOfLeasePeriod}
                            label="Date Of Expiry of Lease Period"
                            type="date"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="unexpiredLeasePeriodYear"
                            value={formData.unexpiredLeasePeriodYear}
                            label="Unexpired Lease Period"
                            type="text"
                            format='year'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="unexpiredLeasePeriodMonth"
                            value={formData.unexpiredLeasePeriodMonth}
                            label="-"
                            type="text"
                            format='month'
                        />
                        <div class="cs2">
                        <SelectComp
                            name="dwellingUnitStatus"
                            value={formData.dwellingUnitStatus}
                            label="Dwelling Unit Status"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        </div>
                        
                         <InputComp
                            formValuesController={formValuesController}
                            name="ageOfReadyBuiltHouseYear"
                            value={formData.ageOfReadyBuiltHouseYear}
                            label="Age Of Ready Built House"
                            type="text"
                            format='year'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="ageOfReadyBuiltHouseMonth"
                            value={formData.ageOfReadyBuiltHouseMonth}
                            label="-"
                            type="text"
                            format='month'
                        />
                         <InputComp
                            formValuesController={formValuesController}
                            name="periodRequiredForConstructionYear"
                            value={formData.periodRequiredForConstructionYear}
                            label="Period Required For Construction"
                            type="text"
                            format='year'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="periodRequiredForConstructionMonth"
                            value={formData.periodRequiredForConstructionMonth}
                            label="-"
                            type="text"
                            format='month'
                        />
                        <SelectComp
                            name="existingHouse"
                            value={formData.existingHouse}
                            label="Existing House"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="houseRent"
                            value={formData.houseRent}
                            label="House Rent"
                            type="text"
                        />
                        <div class="cs2">
                        <SelectComp
                            name="houseForSelfOrRenting"
                            value={formData.houseForSelfOrRenting}
                            label="House For Self Occupancy/Renting Out"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        </div>
                        <div class="cs2">
                        <InputComp
                            formValuesController={formValuesController}
                            name="expectedRentPerMonth"
                            value={formData.expectedRentPerMonth}
                            label="Rent Savings/Expected Rent Per Month"
                            type="text"
                            format='amount'
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

