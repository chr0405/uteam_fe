import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState} from "react";
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

import CleaningDummy from "./Component/Dummy/CleaningDummy"
import ContractDummy from "./Component/Dummy/ContractDummy"
import CookDummy from "./Component/Dummy/CookDummy"
import GoodsDummy from "./Component/Dummy/GoodsDummy"
import InteriorDummy from "./Component/Dummy/InteriorDummy"
import StorageDummy from "./Component/Dummy/StorageDummy"


function App() {

  const [value, setValue] = useState(0);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Join" element={<Join/>}/>
          <Route path="/SearchPage" element={<SearchPage value={value} setValue={setValue}/>}/>
          <Route path="/WritePage" element={<WritePage/>}/>

          <Route path="/Main" element={<Main value={value} setValue={setValue}/>}/>
          <Route path="/Cleaning" element={<Cleaning value={value} setValue={setValue}/>}/>
          <Route path="/Contract" element={<Contract/>}/>
          <Route path="/Cook" element={<Cook/>}/>
          <Route path="/Goods" element={<Goods/>}/>
          <Route path="/Interior" element={<Interior/>}/>
          <Route path="/Storage" element={<Storage/>}/>

          <Route path="/CleaningDummy" element={<CleaningDummy/>}/>
          <Route path="/ContractDummy" element={<ContractDummy/>}/>
          <Route path="/CookDummy" element={<CookDummy/>}/>
          <Route path="/GoodsDummy" element={<GoodsDummy/>}/>
          <Route path="/InteriorDummy" element={<InteriorDummy/>}/>
          <Route path="/StorageDummy" element={<StorageDummy/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
