import { useState, useEffect } from 'preact/hooks';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import ResidenceVerificationDtls  from './components/ResidenceVerificationDtls';
import { BusinessVerificationDtls } from './components/BusinessVerificationDtls';
import { TelephoneVerificationDtls } from './components/TelephoneVerificationDtls';
import { ReferenceVerificationDetails } from './components/ReferenceVerificationDetails';
export const HousingLoanFieldVerificationChecklist = () => {
    const sections: string[] = [
        'Residence verificatrion Dtls',
        'Business verificatrion Dtls',
        'Telephone verificatrion Dtls',
        'Reference verificatrion Dtls',
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
            <PageHeader heading={'Field Verification Checklist Entry'}>
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
            {currentSection === 'Residence verificatrion Dtls' ? (
                <ResidenceVerificationDtls/>
            ) : currentSection === 'Business verificatrion Dtls' ? (
                <BusinessVerificationDtls />
            ) : currentSection === 'Telephone verificatrion Dtls' ? (
                <TelephoneVerificationDtls/>
            ) : currentSection === 'Reference verificatrion Dtls' ? (
                <ReferenceVerificationDetails />
            ) :""}
            <Tabs
                tabsArray={sections}
                onTabSelect={setCurrentSection}
                currentTab={currentSection}
            />
        </>
    );
};
