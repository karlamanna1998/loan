import { useState } from 'preact/hooks';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';

class generalInfoModel {
    paymentMode: string = '';
    CapabilityToPayEmi: string = '';
}
export const GeneralInfo = () => {
    const [formData, setFormData] = useState<generalInfoModel>(
        new generalInfoModel()
    );
    const formValuesController = (inputVal: string, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: inputVal,
        }));
    };
    return (
        <>
            <PageBody heading={'General Information'}>
                <div className="dg col3">
                    <SelectComp
                        name="paymentMode"
                        value={formData.paymentMode}
                        label="Payment Mode"
                        formValuesController={formValuesController}
                        optionData={[{ value: 'payment mode 1' }]}
                    />{' '}
                    <InputComp
                        name="CapabilityToPayEmi"
                        value={formData.CapabilityToPayEmi}
                        label="Capability to pay EMI"
                        formValuesController={formValuesController}
                        format="amount"
                    />
                </div>
            </PageBody>
        </>
    );
};
