import { useState, useContext } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';

class ConditionsModel {
    conditionsSpecifiedByLawyer: string = '';
}

export const Conditions = () => {
    const [formData, setFormData] = useState<ConditionsModel>(
        new ConditionsModel()
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
            <PageBody heading={'Conditions'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                      <h2 style={{marginLeft:"15px"}} class='cs4'><u>Conditions, If any specified by Lawyer</u></h2>
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="conditionsSpecifiedByLawyer"
                            value={formData.conditionsSpecifiedByLawyer}
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

export default Conditions
