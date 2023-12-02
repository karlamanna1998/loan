import { useState, useEffect } from 'preact/hooks';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import { ChargesDetails } from './components/ChargesDetails';
import { OtherTaxDetails } from './components/OtherTaxDetails';
import { RecieptDetails } from './components/RecieptDetails';
export const ProcessingFeesOtherPreSanctionCharges = () => {
    const sections: string[] = [
        'Charges Details',
        'Other Tax Details',
        'Reciept Details',
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
                    'Processing Fees and Other Pre-Sanction Charges'
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
            {currentSection === 'Charges Details' ? (
                <ChargesDetails />
            ) : currentSection === 'Other Tax Details' ? (
                <OtherTaxDetails />
            ) : currentSection === 'Reciept Details' ? (
                <RecieptDetails />
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
