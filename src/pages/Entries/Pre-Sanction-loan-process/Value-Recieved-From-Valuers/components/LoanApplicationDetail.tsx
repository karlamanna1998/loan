import { useContext, useEffect, useState } from 'preact/hooks';
import PageBody from '../../../../../shared/components/PageBody/PageBody';
import PageHeader from '../../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../../shared/components/Tabs/Tabs';
import InputComp from '../../../../../shared/components/InputComp/InputComp';
import SelectComp from '../../../../../shared/components/SelectComp/SelectComp';
import TextAreaComp from '../../../../../shared/components/TextAreaComp/TextAreaComp';
import SubmitButtonSet from '../../../../../shared/components/SubmitButtonSet/SubmitButtonSet';
import { OptionContext } from '../../../../../State-Management/optionContext/context';

class LoanApplicationDetailModel {
    
    applicationDate: string = '';
    applicant : string = '';
    loanCode: string = '';
    loanAmount : string = '';
    flatAddress: string = '';
    cityCode: string = '';
    dateOfEntry: string = '';
    valuersCode: string = '';
    dateOfValuation: string = '';
    letterOrCertificateNumberGivenByValuer: string = '';
    letterOrCertificateDate: string = '';
}

export const LoanApplicationDetail = () => {
    const [formData, setFormData] = useState<LoanApplicationDetailModel>(
        new LoanApplicationDetailModel()
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
            <PageBody heading={'Loan Application Detail'}>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset
                        className=" dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicationDate"
                            value={formData.applicationDate}
                            label="Application Date"
                            type="date"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="applicant"
                            value={formData.applicant}
                            label="Applicant"
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanCode"
                            value={formData.loanCode}
                            label="Loan Code"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="loanAmount"
                            value={formData.loanAmount}
                            label="Loan Amount"
                            format='amount'
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="cityCode"
                            value={formData.cityCode}
                            label="City Code"
                        />
                        <div class="cs4">
                            <TextAreaComp
                                formValuesController={formValuesController}
                                name="flatAddress"
                                value={formData.flatAddress}
                                label="Flat Address"
                            />
                        </div>
                        
                    </fieldset>

                    <fieldset
                        className="fieldWrapper dg col4"
                        disabled={option === 'View'}
                    >
                        <InputComp
                            formValuesController={formValuesController}
                            name="dateOfEntry"
                            value={formData.dateOfEntry}
                            label="Date of Entry"
                            type="date"
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="valuersCode"
                            value={formData.valuersCode}
                            label="Valuer's Code"
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="dateOfValuation"
                            value={formData.dateOfValuation}
                            label="Date of Valuation"
                            type='date'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="letterOrCertificateNumberGivenByValuer"
                            value={formData.letterOrCertificateNumberGivenByValuer}
                            label="Letter or Certificate Number Given by Valuer"
                            class='cs2'
                        />
                        <InputComp
                            formValuesController={formValuesController}
                            name="letterOrCertificateDate"
                            value={formData.letterOrCertificateDate}
                            label="Letter or Certificate Date"
                            type='date'
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
