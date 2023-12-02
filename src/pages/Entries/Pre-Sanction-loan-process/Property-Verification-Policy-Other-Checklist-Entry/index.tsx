import { useState, useEffect } from 'preact/hooks';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import PropertyVerificationDetails2 from './component/PropertyVerificationDetails2';
import PropertyverificationDetails1 from './component/PropertyverificationDetails1';
import BanckgroundDetails from './component/BanckgroundDetails';
import PolicyDetails from './component/PolicyDetails';
export const PropertyVerificationPolicyOtherChecklistEntry = () => {
    const sections: string[] = [
        'Property Verification Details 1',
        'Property Verification Details 2',
        'Background Details',
        'Policy Details',
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
                    'Property Verification / Policy / Other Checklist Entry'
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
            {currentSection === 'Property Verification Details 1' ? (
                <PropertyverificationDetails1 />
            ) : currentSection === 'Property Verification Details 2' ? (
                <PropertyVerificationDetails2 />
            ) : currentSection === 'Background Details' ? (
                <BanckgroundDetails />
            ) : currentSection === 'Policy Details' ? (
                <PolicyDetails />
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
