import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Program_Schedule from "./pages/Program_Schedule.js";
import Keynote_Speakers from "./pages/Keynote_Speakers.js";
import Tutorial_Speakers from "./pages/Tutorial_Speakers.js";
import Track_Chairs from "./pages/Track_Chairs.js";
import Special_Session from "./pages/Special_Session.js";
import Organizing_Committee from "./pages/Organizing_Committee.js";
import AdvisoryCommittee from "./pages/Advisory_Committee.js";
import HomePage from "./pages/Homepage.js";
import Layout from "./components/Layout.js";
import Sidebar from "./components/Sidebar.js";
import ImportantDates from "./pages/Important_Dates.js";
import CallForPapers from "./pages/Call_For_Papers.js";
import SubmissionGuidelines from "./pages/Guidelines_For_Paper_Submission.js";
import ContactUs from "./pages/ContactUs.js";
import Registration from "./pages/Registration.js";

const App = () => {
  const [activePage, setActivePage] = useState("/");

  return (
    <div className="bodym">
      <Layout>
        <div className="maina">
          <Sidebar />
          <div className="containera">
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/organizing_committee"
                  element={<Organizing_Committee />}
                />
                <Route
                  path="/advisory_committee"
                  element={<AdvisoryCommittee />}
                />
                <Route
                  path="/program_schedule"
                  element={<Program_Schedule />}
                />
                <Route
                  path="/keynote_speakers"
                  element={<Keynote_Speakers />}
                />
                <Route
                  path="/tutorial_speakers"
                  element={<Tutorial_Speakers />}
                />
                <Route path="/track_chairs" element={<Track_Chairs />} />
                <Route path="/special_session" element={<Special_Session />} />
                <Route path="/important_dates" element={<ImportantDates />} />
                <Route path="/call_for_papers" element={<CallForPapers />} />
                <Route
                  path="/guideline_for_paper_submission"
                  element={<SubmissionGuidelines />}
                />
                <Route path="/registration" element={<Registration />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route
                  path="/program_schedule"
                  element={<Program_Schedule />}
                />
              </Routes>
            </Router>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default App;
