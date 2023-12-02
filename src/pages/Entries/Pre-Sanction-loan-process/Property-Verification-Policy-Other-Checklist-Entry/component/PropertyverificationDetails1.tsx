import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';

class PropertyVerificationDtls1Model {
    DateOfApplication: string = '';
    AmountRequested: string = '';
    Applicant: string = '';
    LoanCode: string = '';
    LoanPurposeCode: string = '';
    landMark: string = 'Yes';
    distanceFromBranch: string = '';
    extendOfLand: string = '';
    locality: string = '';
    areaOfExistingHouseOrFlat: string = '';
    purchasePriceOfHouseFlatLand: string = '';
    MarketPriceOfHouseFlatLand: string = '';
    yearOfConstruction: string = '';
}

const PropertyverificationDetails1 = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<PropertyVerificationDtls1Model>(
        new PropertyVerificationDtls1Model()
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
            <PageBody heading={'Property Verification Details'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="pa-10 dg col4"
                        disabled={option === 'View'}
                    >
                        <h3 class="cs4 ma-t-20 ma-x-15">
                            {' '}
                            <u>Loan Application Details</u>{' '}
                        </h3>
                        <div className="cs4 spacer"></div>
                        <InputComp
                            formValuesController={formValuesController}
                            name="DateOfApplication"
                            value={formData.DateOfApplication}
                            label="Date of application"
                            type="date"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="Applicant"
                            value={formData.Applicant}
                            label="Applicant"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="AmountRequested"
                            value={formData.AmountRequested}
                            label="Amount Requested"
                            format="amount"
                            class="cs2"
                        />

                        <InputComp
                            formValuesController={formValuesController}
                            name="LoanCode"
                            value={formData.LoanCode}
                            label="Loan Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="LoanPurposeCode"
                            value={formData.LoanPurposeCode}
                            label="Loan purpose Code"
                        />
                    </fieldset>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="landMark"
                            value={formData.landMark}
                            label="Land Mark"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="distanceFromBranch"
                            value={formData.distanceFromBranch}
                            label="Distance From Branch"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="extendOfLand"
                            value={formData.extendOfLand}
                            label="Extent of Land"
                            class="cs2"
                        />
                        <SelectComp
                            name="locality"
                            value={formData.locality}
                            label="Locality"
                            optionData={dummyoptionArray}
                            formValuesController={formValuesController}
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="areaOfExistingHouseOrFlat"
                            value={formData.areaOfExistingHouseOrFlat}
                            label="Area of existing house/Flat"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="purchasePriceOfHouseFlatLand"
                            value={formData.purchasePriceOfHouseFlatLand}
                            label="Purchase Price Of House/Flat/Land"
                            format="amount"
                            class="cs2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="MarketPriceOfHouseFlatLand"
                            value={formData.MarketPriceOfHouseFlatLand}
                            label="Market Price Of House/Flat/Land"
                            class="cs2"
                            format="amount"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="yearOfConstruction"
                            value={formData.yearOfConstruction}
                            label="Year of construction"
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

export default PropertyverificationDetails1;
