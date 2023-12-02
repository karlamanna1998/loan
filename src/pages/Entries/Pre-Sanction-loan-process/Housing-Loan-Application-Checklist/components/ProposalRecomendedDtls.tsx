import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';

class proposalRecomendedDtlsModel {
    proposalReferredName: string = '';
    proposalReferredAddress: string = '';
    wellKnownToCompany: string = 'Yes';
    whatContext: string = '';
    distanceOfPartyHouse: string = '';
    withinManagableDistance: string = 'No';
}

const ProposalRecomendedDtls = () => {
    const [formData, setFormData] = useState<proposalRecomendedDtlsModel>(
        new proposalRecomendedDtlsModel()
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
            <PageBody heading={'Proposal Referred/Recommended'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="proposalReferredName"
                            value={formData.proposalReferredName}
                            label="Name"
                            class="cs4"
                        />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="proposalReferredAddress"
                                value={formData.proposalReferredAddress}
                                label="Address"
                            />
                        </div>
                        <SelectComp
                            name="wellKnownToCompany"
                            value={formData.wellKnownToCompany}
                            label="Well Known to the Company"
                            option="yesNo"
                            formValuesController={formValuesController}
                        />
                        <div class="cs3">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="whatContext"
                                value={formData.whatContext}
                                label="What Context"
                            />
                        </div>
                        <InputComp
                            formValuesController={formValuesController}
                            name="distanceOfPartyHouse"
                            value={formData.distanceOfPartyHouse}
                            label="Distance at which the Party/house Property is located"
                            class="cs3"
                        />
                        <SelectComp
                            name="withinManagableDistance"
                            value={formData.withinManagableDistance}
                            label="Is withis a managable distance"
                            option="yesNo"
                            formValuesController={formValuesController}
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

export default ProposalRecomendedDtls;
