import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Navbar } from './shared/components/Navbar/index.js';
import { HousingLoanApplication } from './pages/Entries/Pre-Sanction-loan-process/Housing-Loan-Application/index.js';
import { OptionProvider } from './State-Management/optionContext/provider.js';
import { SecurityOfferedForHLApplication } from './pages/Entries/Pre-Sanction-loan-process/Security-Offered-For-HL-Application/index.js';
import HousingLoanApplicationChecklist from './pages/Entries/Pre-Sanction-loan-process/Housing-Loan-Application-Checklist/index.js';
import { HousingLoanFieldVerificationChecklist } from './pages/Entries/Pre-Sanction-loan-process/Housing-Loan-Field-Verification-Checklist/index.js';
import { PropertyVerificationPolicyOtherChecklistEntry } from './pages/Entries/Pre-Sanction-loan-process/Property-Verification-Policy-Other-Checklist-Entry/index.js';
import { useEffect } from 'preact/hooks';
import { addRefreshAlert } from './shared/Functions/refreshAlert.js';
import { ValueRecievedFromTheValuers } from './pages/Entries/Pre-Sanction-loan-process/Value-Recieved-From-Valuers/index.js';
import { ConfidentialOpinionObtainedFromBankersOfApplicant } from './pages/Entries/Pre-Sanction-loan-process/Confidential-Opinion-Obtained-From-Bankers-Of-Applicant/index.js';
import LeagalOpinionForHLApplication from './pages/Entries/Pre-Sanction-loan-process/Leagal-Opinion-For-HL-Application/index.js';
import { PreSanctionVisitMadeToProperty } from './pages/Entries/Pre-Sanction-loan-process/Pre-Sanction-Visits-Made-To-Property/index.js';
import { ProcessingFeesOtherPreSanctionCharges } from './pages/Entries/Pre-Sanction-loan-process/Processing-Fees-Other-Pre-Sanction-Charges/index.js';

export function App() {
    useEffect(() => {
        // to warn users before reloading the page
        const removeRefreshAlert = addRefreshAlert();

        return () => {
            // to remove addEventListener after component unmount
            removeRefreshAlert();
        };
    }, []);
    return (
        <LocationProvider>
            <OptionProvider>
                <Navbar></Navbar>
                <Router>
                    <Route
                        default
                        path="/"
                        component={HousingLoanApplication}
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/HousingLoanApplication"
                        component={HousingLoanApplication}
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/SecurityOfferedForHLApplication"
                        component={SecurityOfferedForHLApplication}
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/HousingLoanApplicationChecklist"
                        component={HousingLoanApplicationChecklist}
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/HousingLoanFieldVerificationChecklist"
                        component={HousingLoanFieldVerificationChecklist}
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/PropertyVerificationPolicyOtherChecklistEntry"
                        component={
                            PropertyVerificationPolicyOtherChecklistEntry
                        }
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/ValueRecievedFromTheValuers"
                        component={
                            ValueRecievedFromTheValuers
                        }
                    />
                    <Route
                        path="/entries/PreSanctionLoanProcess/ConfidentialOpinionObtainedFromBankersOfApplicant"
                        component={
                            ConfidentialOpinionObtainedFromBankersOfApplicant
                        }
                    />
                    <Route
                        path='/entries/preSanctionLoanProcess/LeagalOpinionForHLApplication'
                        component={LeagalOpinionForHLApplication}
                    />
                    <Route
                        path='/entries/preSanctionLoanProcess/Pre-sanctionVisitsMadeToProperty'
                        component={PreSanctionVisitMadeToProperty}
                    />
                    <Route
                        path='/entries/preSanctionLoanProcess/ProcessingFeesOtherPreSanctionCharges'
                        component={ProcessingFeesOtherPreSanctionCharges}
                    />

                    <Route component={NotFound} />
                </Router>
            </OptionProvider>
        </LocationProvider>
    );
}

render(<App />, document.getElementById('app'));
