import { useState, useEffect } from 'preact/hooks';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import { LoanApplicationDetail } from './components/LoanApplicationDetail';
import { ValuationDetails } from './components/ValuationDetails';
export const ValueRecievedFromTheValuers = () => {
    const sections: string[] = [
        'Loan Application Detail',
        'Valuation Details',
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
                    'Property Valuation Entry'
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
                <LoanApplicationDetail />
            ) : currentSection === 'Valuation Details' ? (
                <ValuationDetails />
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
