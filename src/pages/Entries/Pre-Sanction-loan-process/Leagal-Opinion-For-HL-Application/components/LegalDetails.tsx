import { useState, useContext } from "preact/hooks";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import InputComp from "../../../../../shared/components/InputComp/InputComp";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import SubmitButtonSet from "../../../../../shared/components/SubmitButtonSet/SubmitButtonSet";
import CheckboxComp from "../../../../../shared/components/CheckboxComp/CheckboxComp";

class LegalDetailsModel {
    legalOpinionSerial: string = '';
    dateOfEntry: string = '';
    refrenceNumber: string = '';
    dated: string = '';
    lawerCode: string = '';
    legalOpinionIndicatesClear: boolean = false;
    validMorgage: boolean = false;
}
const LegalDetails = () => {

    const [formData, setFormData] = useState<LegalDetailsModel>(
        new LegalDetailsModel()
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
        <PageBody heading={'Legal Details'}>
            <form action="" onSubmit={onSubmitHandler}>
                <fieldset
                    className="fieldWrapper dg col4"
                    disabled={option === 'View'}
                >
                    <InputComp
                        formValuesController={formValuesController}
                        name="legalOpinionSerial"
                        value={formData.legalOpinionSerial}
                        label="Legal Opinion Serial"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="dateOfEntry"
                        value={formData.dateOfEntry}
                        label="Date of Entry"
                        type="date"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="refrenceNumber"
                        value={formData.refrenceNumber}
                        label="Reference Number"
                    />
                    <InputComp
                        formValuesController={formValuesController}
                        name="dated"
                        value={formData.dated}
                        label="Dated"
                        type="date"
                    />

                    <InputComp
                        formValuesController={formValuesController}
                        name="lawerCode"
                        value={formData.lawerCode}
                        label="Lawer Code"
                    />
                    <div className=" cs4 spacer"></div>
                    <fieldset className="ma-x-15 cs4 pa-10 dg col4">
                        <CheckboxComp
                            class='cs2'
                            formValuesController={formValuesController}
                            name="legalOpinionIndicatesClear"
                            checked={formData.legalOpinionIndicatesClear}
                            label="Whether legal opinion indicates clear / Marketable title of the applicant"
                        />
                        <div className="cs2"></div>
                        <CheckboxComp
                            class='cs2'
                            formValuesController={formValuesController}
                            name="validMorgage"
                            checked={formData.validMorgage}
                            label="Whether valid Morgage can be created in favor of our bank"
                        />
                    </fieldset>
                </fieldset>
                <div className=" cs4 spacer"></div>
                <div className="cs4">
                    <SubmitButtonSet />
                </div>
            </form>
        </PageBody>
    )
}

export default LegalDetails