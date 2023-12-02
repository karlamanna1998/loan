import { useState, useContext } from 'preact/hooks';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';

class  RemarksModel {
    lawyerRemarks: string = '';
}

export const Remarks = () => {
    const [formData, setFormData] = useState<RemarksModel>(
        new RemarksModel()
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
            <PageBody heading={'Remarks'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                      <h2 style={{marginLeft:"15px"}} class='cs4'><u>Lawyer's Remarks</u></h2>
                        <TextAreaComp
                            class="cs4"
                            formValuesController={formValuesController}
                            name="lawyerRemarks"
                            value={formData.lawyerRemarks}
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

export default Remarks

