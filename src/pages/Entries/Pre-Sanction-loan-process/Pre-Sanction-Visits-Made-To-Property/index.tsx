import { useState, useEffect } from 'preact/hooks';
import Tabs from '../../../../shared/components/Tabs/Tabs';
import PageHeader from '../../../../shared/components/PageHeader/PageHeader';
import OptionSelector from '../../../../shared/components/OptionSelector/OptionSelector';
import InputComp from '../../../../shared/components/InputComp/InputComp';
import { SiteOrLocationVisitDetails } from './components/SiteOrLocationVisitDetails';
import { CommentsOnSiteOrLocation } from './components/CommentsOnSiteOrLocation';
import { CommentsOnConstruction } from './components/CommentsOnConstruction';
import { CommentsOnAdverseFeature } from './components/CommentsOnAdverseFeature';
import { GeneralRemarksOrObservations } from './components/GeneralRemarksOrObservations';
import { LoanApplicationDetails } from './components/LoanApplicationDetails';
export const PreSanctionVisitMadeToProperty = () => {
    const sections: string[] = [
        'Loan Application Details',
        'Site/Location Visit Details',
        'Comments on Site/Location',
        'Comments on Construction',
        'Comments on Adverse Features',
        'General Remarks/Observations'
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
                    'Pre-Sanction Visits Entry'
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
            {currentSection === 'Loan Application Details' ? (
                <LoanApplicationDetails />
            ) : currentSection === 'Site/Location Visit Details' ? (
                <SiteOrLocationVisitDetails />
            ) :currentSection === 'Comments on Site/Location' ? (
                <CommentsOnSiteOrLocation />
            ) : currentSection === 'Comments on Construction' ? (
                <CommentsOnConstruction/>
            ) : currentSection === 'Comments on Adverse Features' ? (
                <CommentsOnAdverseFeature />
            ) : currentSection === 'General Remarks/Observations' ? (
                <GeneralRemarksOrObservations/>
            ) :  (
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
