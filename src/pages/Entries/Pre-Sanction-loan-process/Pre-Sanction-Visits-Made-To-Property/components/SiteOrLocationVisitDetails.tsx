import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class SiteOrLocationVisitDetailsModel {
    visitSerial: string = '';
    dateOfVisit : string = '';
    OfficialsVisited1: string = '';
    OfficialsVisited2 : string = '';
    OfficialsVisited3: string = '';
    houseFlatCompleted: string = '';
}

export const SiteOrLocationVisitDetails = () => {
    const [formData, setFormData] = useState<SiteOrLocationVisitDetailsModel>(
        new SiteOrLocationVisitDetailsModel()
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
            <PageBody heading={'Site/Location Visit Details'}>
                <form action="" onSubmit={onSubmitHandler}>

                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="visitSerial"
                            value={formData.visitSerial}
                            label="Visited Serial"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="dateOfVisit"
                            value={formData.dateOfVisit}
                            label="Date of Visit"
                            type='date'
                        />
                        <h4 class='cs4' style={{marginLeft:"15px"}}>Officials Visited</h4>
                        <InputComp
                            formValuesController={formValuesController}
                            name="OfficialsVisited1"
                            value={formData.OfficialsVisited1}
                            label="#1"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="OfficialsVisited2"
                            value={formData.OfficialsVisited2}
                            label="#2"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="OfficialsVisited3"
                            value={formData.OfficialsVisited3}
                            label="#3"
                        />
                        <div></div>
                        <SelectComp
                            name="houseFlatCompleted"
                            value={formData.houseFlatCompleted}
                            label="House/Flat Completed"
                            formValuesController={formValuesController}
                            option='yesNo'
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
