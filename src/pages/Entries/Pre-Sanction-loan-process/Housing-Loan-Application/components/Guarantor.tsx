import { useContext, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import { OptionContext } from '../../../../../State-Management/optionContext/context';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import { SmallHeading } from '../../../../../shared/components/Heading/Heading';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';

class guarantorModel {
    noOfGuarantor: string = '';
    slNo: string = '';
    indNo: string = '';
    address: string = '';
    empBusName: string = '';
    relWithApllicant: string = '';
    PhotoAttached: string = '';
    proofOfAgeAttached: string = '';
    proofOfResAttached: string = '';
    includeInIncCalc: string = '';

    noOfRefs: string = '';
    refSi: string = '';
    name: string = '';
    address2: string = '';
    pincode: string = '';
    telOffice: string = '';
    telRes: string = '';
}

export const Guarantor = () => {
    const { option } = useContext(OptionContext);
    const [formData, setFormData] = useState<guarantorModel>(
        new guarantorModel()
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
    return (
        <>
            <PageBody heading={'Guarantor'}>
                <div className="dg col4">
                    <form class="cs4" action="" onSubmit={onSubmitHandler}>
                        <fieldset
                            className="fieldWrapper dg col4"
                            disabled={option === 'View'}
                        >
                            <InputComp
                                formValuesController={formValuesController}
                                name="noOfGuarantor"
                                value={formData.noOfGuarantor}
                                label="No. of Guarantor"
                            />{' '}
                            <InputComp
                                formValuesController={formValuesController}
                                name="slNo"
                                value={formData.slNo}
                                label="Serial No."
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="indNo"
                                value={formData.indNo}
                                label="Individual No."
                            />
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="address"
                                value={formData.address}
                                label="Address"
                                class="cs4"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="empBusName"
                                value={formData.empBusName}
                                label="Employee / Business Name"
                                class="cs2"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="relWithApllicant"
                                value={formData.relWithApllicant}
                                label="Relationship with Applicant"
                                class="cs2"
                            />
                            <SelectComp
                                formValuesController={formValuesController}
                                name="PhotoAttached"
                                value={formData.PhotoAttached}
                                label="Photograph Attached ?"
                                optionData={[{ value: 'yes' }, { value: 'no' }]}
                            />
                            <SelectComp
                                formValuesController={formValuesController}
                                name="proofOfAgeAttached"
                                value={formData.proofOfAgeAttached}
                                label="Proof of age Attached ?"
                                optionData={[{ value: 'yes' }, { value: 'no' }]}
                            />
                            <SelectComp
                                formValuesController={formValuesController}
                                name="proofOfResAttached"
                                value={formData.proofOfResAttached}
                                label="Proof of residence Attached ?"
                                optionData={[{ value: 'yes' }, { value: 'no' }]}
                            />
                            <SelectComp
                                formValuesController={formValuesController}
                                name="includeInIncCalc"
                                value={formData.includeInIncCalc}
                                label="Include in income calc."
                                optionData={[{ value: 'yes' }, { value: 'no' }]}
                            />
                            <hr className="cs4" />
                            <div className="cs4">
                                <SmallHeading heading={'Reference Details'} />
                            </div>
                            <InputComp
                                formValuesController={formValuesController}
                                name="noOfRefs"
                                value={formData.noOfRefs}
                                label="No. of References"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="refSi"
                                value={formData.refSi}
                                label="Reference SI."
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="name"
                                value={formData.name}
                                label="Name"
                                class="cs3"
                            />
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="address2"
                                value={formData.address2}
                                label="Address"
                                class="cs4"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="pincode"
                                value={formData.pincode}
                                label="Pincode"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="telOffice"
                                value={formData.telOffice}
                                label="Telephone (Office)"
                            />
                            <InputComp
                                formValuesController={formValuesController}
                                name="telRes"
                                value={formData.telRes}
                                label="Telephone (Residence)"
                            />
                        </fieldset>
                        <div className="cs4">
                            <SubmitButtonSet />
                        </div>
                    </form>
                </div>
            </PageBody>
        </>
    );
};
