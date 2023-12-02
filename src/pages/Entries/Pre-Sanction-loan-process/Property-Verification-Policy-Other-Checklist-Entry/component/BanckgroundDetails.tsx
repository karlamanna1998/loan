import { TargetedEvent } from 'preact/compat';
import { useContext, useState } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import CheckboxComp from '../../../../../shared/components/CheckboxComp/CheckboxComp';

class backgrounfDetailsModel {
    office: boolean = false;
    residence: boolean = false;
    telephone: boolean = false;
    referee: boolean = false;
    processingFeePaid: string = '';
    noOfDetails: string = '';
    backgroundDetailsSerial: string = '';
    backgroundDetails: string = '';
}

const BanckgroundDetails = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<backgrounfDetailsModel>(
        new backgrounfDetailsModel()
    );
    //   function fired on form submit
    const onSubmitHandler = (e: TargetedEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.classList.add('showErrors');
        // alert('submitetd');
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
        <PageBody heading={'Background Details'}>
            <form action="" onSubmit={onSubmitHandler} noValidate>
                <fieldset
                    className="fieldWrapper dg col4"
                    disabled={option === 'View'}
                >
                    <div className="spacer cs4"></div>
                    <fieldset className="cs4 dg col4">
                        <h3 className="cs4 ma-t-20 ma-x-15">
                            <u>Position with regards to verification</u>
                        </h3>
                        <CheckboxComp
                            formValuesController={formValuesController}
                            label="Office"
                            name="office"
                            checked={formData.office}
                        />
                        <CheckboxComp
                            formValuesController={formValuesController}
                            name="residence"
                            checked={formData.residence}
                            label="Residence"
                        />
                        <CheckboxComp
                            formValuesController={formValuesController}
                            name="telephone"
                            checked={formData.telephone}
                            label="Telephone"
                        />
                        <CheckboxComp
                            formValuesController={formValuesController}
                            name="referee"
                            checked={formData.referee}
                            label="Referee"
                        />
                    </fieldset>
                    <div className="spacer cs4"></div>
                    <fieldset className="cs4 dg col4">
                        <h3 className="cs4 ma-t-20 ma-x-15">
                            <u>General Detiails</u>
                        </h3>
                        <div className="spacer cs4"></div>

                        <SelectComp
                            value={formData.processingFeePaid}
                            formValuesController={formValuesController}
                            name="processingFeePaid"
                            label="Processing fee paid"
                            option="yesNo"
                        />
                    </fieldset>
                    <div className="spacer cs4"></div>

                    <fieldset className="cs4 dg col4">
                        <h3 className="cs4 ma-t-20 ma-x-15">
                            <u>Background Detiails</u>
                        </h3>
                        <div className="spacer cs4"></div>
                        <InputComp
                            formValuesController={formValuesController}
                            type="number"
                            value={formData.noOfDetails}
                            name="noOfDetails"
                            label="Number of Details"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            value={formData.backgroundDetailsSerial}
                            name="backgroundDetailsSerial"
                            label="Background Detail Serial"
                        />
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            value={formData.backgroundDetails}
                            name="backgroundDetails"
                            label="Background Detail"
                        />
                    </fieldset>
                </fieldset>
                <div className="spacer"></div>
                <SubmitButtonSet />
            </form>
        </PageBody>
    );
};

export default BanckgroundDetails;
