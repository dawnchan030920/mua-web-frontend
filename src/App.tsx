import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProjectContainer from "./pages/Project/ProjectContainer";
import ProjectListPage from "./pages/Project/ProjectListPage";
import SchoolContainer from "./pages/School/SchoolContainer";
import SchoolListPage from "./pages/School/SchoolListPage";
import SchoolPage from "./pages/School/SchoolPage";
import ProjectPage from "./pages/Project/ProjectPage";
import ActivityContainer from "./pages/Activity/ActivityContainer";
import ActivityListPage from "./pages/Activity/ActivityListPage";
import ActivityPage from "./pages/Activity/ActivityPage";
import OtherContainer from "./pages/Other/OtherContainer";
import OtherListPage from "./pages/Other/OtherListPage";
import OtherPage from "./pages/Other/OtherPage";
import RecurrenceContainer from "./pages/Recurrence/RecurrenceContainer";
import RecurrenceListPage from "./pages/Recurrence/RecurrenceListPage";
import RecurrencePage from "./pages/Recurrence/RecurrencePage";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/school" element={<SchoolContainer />}>
        <Route index element={<SchoolListPage />}></Route>
        <Route path=":pid" element={<SchoolPage />}></Route>
      </Route>
      <Route path="/project" element={<ProjectContainer />}>
        <Route index element={<ProjectListPage />}></Route>
        <Route path=":pid" element={<ProjectPage />}></Route>
      </Route>
      <Route path="/activity" element={<ActivityContainer />}>
        <Route index element={<ActivityListPage />}></Route>
        <Route path=":pid" element={<ActivityPage />}></Route>
      </Route>
      <Route path="/other" element={<OtherContainer />}>
        <Route index element={<OtherListPage />}></Route>
        <Route path=":pid" element={<OtherPage />}></Route>
      </Route>
      <Route path="/recurrence" element={<RecurrenceContainer />}>
        <Route index element={<RecurrenceListPage />}></Route>
        <Route path=":pid" element={<RecurrencePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
