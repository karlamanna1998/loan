import { TargetedEvent } from 'preact/compat';
import { useContext, useState } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import CheckboxComp from '../../../../../shared/components/CheckboxComp/CheckboxComp';

class propertyVerificationDetailsModel {
    descOfSrtructure: string = '';
    water: boolean = false;
    electricity: boolean = false;
    Lift: boolean = false;
    motorableRoad: boolean = false;
    selfOccupiedVacantLetOut: string = '';
    areaOfProposed: string = '';
    whetherContruction: string = '';
    presentStageOfConstruction: string = '';
    whetherLocalDevelopment: string = '';
    localAuthOrDevelopername: string = '';
    inspectedBy: string = '';
    inspectedOn: string = '';
}

const PropertyVerificationDetails2 = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<propertyVerificationDetailsModel>(
        new propertyVerificationDetailsModel()
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
        <PageBody heading={'Property Verification details - 2'}>
            <form action="" onSubmit={onSubmitHandler} noValidate>
                <fieldset
                    className="fieldWrapper dg col4"
                    disabled={option === 'View'}
                >
                    <SelectComp
                        class="cs1"
                        name="descOfSrtructure"
                        value={formData.descOfSrtructure}
                        optionData={dummyoptionArray}
                        formValuesController={formValuesController}
                        label="Description of structure"
                    />
                    <div className="spacer cs4"></div>
                    <fieldset className=" cs4 dg col4">
                        <h3 className="cs4 ma-t-20 ma-x-15">
                            <u>Available Facilities</u>
                        </h3>
                        <CheckboxComp
                            name="water"
                            formValuesController={formValuesController}
                            label="Water"
                            checked={formData.water}
                            required
                        />
                        <CheckboxComp
                            formValuesController={formValuesController}
                            name="electricity"
                            checked={formData.electricity}
                            label="Electricity"
                        />
                        <CheckboxComp
                            formValuesController={formValuesController}
                            name="Lift"
                            checked={formData.Lift}
                            label="Lift facilities"
                        />
                        <CheckboxComp
                            formValuesController={formValuesController}
                            name="motorableRoad"
                            checked={formData.motorableRoad}
                            label="Motarable Road"
                        />
                    </fieldset>
                    <div className="spacer cs4"></div>
                    <SelectComp
                        formValuesController={formValuesController}
                        name="selfOccupiedVacantLetOut"
                        value={formData.selfOccupiedVacantLetOut}
                        label="Self occupied / Vacant / LetOut"
                        optionData={dummyoptionArray}
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="areaOfProposed"
                        value={formData.areaOfProposed}
                        label="Area of proposed Construction / Extension"
                    />
                    <SelectComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="whetherContruction"
                        value={formData.whetherContruction}
                        label="Whether construction / Extension according to approved plan"
                        option="yesNo"
                    />
                    <InputComp
                        class="cs4"
                        formValuesController={formValuesController}
                        name="presentStageOfConstruction"
                        value={formData.presentStageOfConstruction}
                        label="Present stage of Construction / Extension"
                    />
                    <SelectComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="whetherLocalDevelopment"
                        value={formData.whetherLocalDevelopment}
                        label="Whether the site is of local development authority or private Layout"
                        option="yesNo"
                    />
                    <InputComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="localAuthOrDevelopername"
                        value={formData.localAuthOrDevelopername}
                        label="Local Authority / Developer name"
                    />
                    <InputComp
                        class="cs2"
                        formValuesController={formValuesController}
                        name="inspectedBy"
                        value={formData.inspectedBy}
                        label="Inspected By"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="inspectedOn"
                        value={formData.inspectedOn}
                        label="Inspected on"
                        type="date"
                    />
                </fieldset>
                <div className="spacer"></div>
                <SubmitButtonSet />
            </form>
        </PageBody>
    );
};

export default PropertyVerificationDetails2;
