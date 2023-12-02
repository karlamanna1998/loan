import { useState, useEffect } from "preact/hooks";
import InputComp from "../../../../shared/components/InputComp/InputComp";
import OptionSelector from "../../../../shared/components/OptionSelector/OptionSelector";
import PageHeader from "../../../../shared/components/PageHeader/PageHeader";
import Tabs from "../../../../shared/components/Tabs/Tabs";
import ApplicantDetails from "./components/ApplicantDetails";
import LegalDetails from "./components/LegalDetails";
import Conditions from "./components/Conditions";
import Remarks from "./components/Remarks";

const LeagalOpinionForHLApplication = () => {

    const sections: string[] = [
        'Applicant Details',
        'Legal Details',
        'Conditions',
        'Remarks'
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
    {currentSection === 'Applicant Details' ? (
        <ApplicantDetails />
    ) : currentSection === 'Legal Details' ? (
        <LegalDetails />
    ) :currentSection === 'Conditions' ? (
        <Conditions />
    ): currentSection === 'Remarks'? (
        <Remarks/>
    ) : (
        ''
    )}
    <Tabs
        tabsArray={sections}
        onTabSelect={setCurrentSection}
        currentTab={currentSection}
    />
</>
  )
}

export default LeagalOpinionForHLApplication