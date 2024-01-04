import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Component/Header";
import Login from "./Component/Login"
import Join from "./Component/Join"
import Main from "./Component/Main"
import SearchPage from "./Component/SearchPage"
import WritePage from "./Component/WritePage";

import Cleaning from "./Component/DetailsPage/Cleaning"
import Contract from "./Component/DetailsPage/Contract"
import Cook from "./Component/DetailsPage/Cook"
import Goods from "./Component/DetailsPage/Goods"
import Interior from "./Component/DetailsPage/Interior"
import Storage from "./Component/DetailsPage/Storage"

function App() {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  const [isLoggedin, setIsLoggedin] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
        <Routes>
          <Route path="/Login" element={<Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}/>
          <Route path="/Join" element={<Join isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>}/>
          <Route path="/SearchPage" element={<SearchPage/>}/>
          <Route path="/WritePage" element={<WritePage/>}/>

          <Route path="/" element={<Main/>}/>
          <Route path="/Cleaning" element={<Cleaning/>}/>
          <Route path="/Contract" element={<Contract/>}/>
          <Route path="/Cook" element={<Cook/>}/>
          <Route path="/Goods" element={<Goods/>}/>
          <Route path="/Interior" element={<Interior/>}/>
          <Route path="/Storage" element={<Storage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
