import React from "react";
import Navbar from "./page/components/navbar/Navbar";
import Page from "./page/Page";

import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="custom-bgrd col-12">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default App;
