import { useEffect, useState } from 'preact/hooks';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import LoanApplicationDtls from './components/LoanApplicationDtls';
import BankDtls from './components/BankDtls';
import OtherDtls from './components/OtherDtls';
import ProposalRecomendedDtls from './components/ProposalRecomendedDtls';

const HousingLoanApplicationChecklist = () => {
    const sections: string[] = [
        'Loan Application Details',
        'Bank Details',
        'Other Details',
        'Proposal Recommended Details',
    ];
    const [currentSection, setCurrentSection] = useState<string>('');
    const [loanAppNo, setLoanAppNo] = useState<string>('');
    const [ChecklistFor, setChecklistFor] = useState<string>('');
    const [indNum, setindNum] = useState<string>('');
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
            <PageHeader heading={'Housing Loan Application Check List Entry'}>
                <div className="dg col4">
                    <OptionSelector />
                    <InputComp
                        setStateFunc={setLoanAppNo}
                        name="loanAppNo"
                        value={loanAppNo}
                        label="Loan Application No."
                    />
                    <InputComp
                        setStateFunc={setChecklistFor}
                        name="ChecklistFor"
                        value={ChecklistFor}
                        label="Checklist For"
                    />
                    <InputComp
                        setStateFunc={setindNum}
                        name="indNum"
                        value={indNum}
                        label="Individual Number"
                    />
                    <div className="cs4">
                        <fieldset class={' pa-10'}>
                            A - Applicant , C - co-Applicant , J - Joint
                            Applicant , G - Guarantor
                        </fieldset>
                    </div>
                </div>
            </PageHeader>
            {currentSection === 'Loan Application Details' ? (
                <LoanApplicationDtls />
            ) : currentSection === 'Bank Details' ? (
                <BankDtls />
            ) : currentSection === 'Other Details' ? (
                <OtherDtls />
            ) : currentSection === 'Proposal Recommended Details' ? (
                <ProposalRecomendedDtls />
            ) : (
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

export default HousingLoanApplicationChecklist;
