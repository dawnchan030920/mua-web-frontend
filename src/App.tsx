import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home/HomePage";
import ProjectContainer from "./Project/ProjectContainer";
import ProjectListPage from "./Project/ProjectListPage";
import SchoolContainer from "./School/SchoolContainer";
import SchoolListPage from "./School/SchoolListPage";
import SchoolPage from "./School/SchoolPage";
import ProjectPage from "./Project/ProjectPage";
import ActivityContainer from "./Activity/ActivityContainer";
import ActivityListPage from "./Activity/ActivityListPage";
import ActivityPage from "./Activity/ActivityPage";
import OtherContainer from "./Other/OtherContainer";
import OtherListPage from "./Other/OtherListPage";
import OtherPage from "./Other/OtherPage";

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
    </Routes>
  );
};

export default App;
