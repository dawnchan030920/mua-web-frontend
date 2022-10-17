import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home/HomePage";
import SchoolContainer from "./School/SchoolContainer";
import SchoolListPage from "./School/SchoolListPage";
import SchoolPage from "./School/SchoolPage";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/school" element={<SchoolContainer />}>
        <Route index element={<SchoolListPage />} ></Route>
        <Route path=":name" element={<SchoolPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
