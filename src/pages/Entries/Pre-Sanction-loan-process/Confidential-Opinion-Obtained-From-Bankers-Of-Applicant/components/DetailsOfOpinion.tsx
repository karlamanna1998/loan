import { useState, useContext } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';

class detailsOfOpinionModel {
    details: string = '';
}

export const DetailsOfOpinion = () => {
    const [formData, setFormData] = useState<detailsOfOpinionModel>(
        new detailsOfOpinionModel()
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
            <PageBody heading={'Details of opinion'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="details"
                            value={formData.details}
                            label="Details of opinion"
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
