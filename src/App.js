import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Sidebar from "./components/Sidebar";
import { useState } from "react";





function App() {
  const [selectedTab, setSelectedTab] = useState("Bid");
  return (
    <>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      
    </>
  );
}

export default App;
