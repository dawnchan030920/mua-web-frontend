import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import SchoolListPage from "./SchoolListPage";
import SchoolPage from "./SchoolPage";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/school" element={<SchoolListPage />}>
        <Route index element={<></>} ></Route>
        <Route path=":name" element={<SchoolPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
