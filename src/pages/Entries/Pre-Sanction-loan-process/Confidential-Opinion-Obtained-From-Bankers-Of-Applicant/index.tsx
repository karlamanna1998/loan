import { useState, useEffect } from 'preact/hooks';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import { LoanApplicationDetails } from './components/LoanApplicationDetails';
import { BankAccountDetails } from './components/BankAccountDetails';
import { DetailsOfOpinion } from './components/DetailsOfOpinion';
export const ConfidentialOpinionObtainedFromBankersOfApplicant = () => {
    const sections: string[] = [
        'Loan Application Detail',
        'Bank Account Details',
        'Details of Opinion'
    ];
    const [currentSection, setCurrentSection] = useState<string>('');
    const [loanAppNo, setLoanAppNo] = useState<string>('');

    //   initially set first section
    useEffect(() => {
        setCurrentSection(sections[0]);
    }, []);

    //   when section changes scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentSection]);

    return (
        <>
            <PageHeader
                heading={
                    'Confidential Opinion Obtained From Bankers Of Applicant'
                }
            >
                <div className="dg col4">
                    <OptionSelector />
                    <InputComp
                        setStateFunc={setLoanAppNo}
                        name="loanAppNo"
                        value={loanAppNo}
                        label="Loan Application No."
                    />
                </div>
            </PageHeader>
            {currentSection === 'Loan Application Detail' ? (
                <LoanApplicationDetails />
            ) : currentSection === 'Bank Account Details' ? (
                <BankAccountDetails />
            ) :currentSection === 'Details of Opinion' ? (
                <DetailsOfOpinion />
            ): (
                ''
            )}
            <Tabs
                tabsArray={sections}
                onTabSelect={setCurrentSection}
                currentTab={currentSection}
            />
        </>
    );
};
