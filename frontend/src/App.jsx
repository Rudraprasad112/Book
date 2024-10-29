import React from "react";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeMain from "./Home/HomeMain";
import DashbordMain from "./Dashbord/DashbordMain";
function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomeMain></HomeMain>}></Route>
          <Route path="/dashbord" element= {<DashbordMain></DashbordMain>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
