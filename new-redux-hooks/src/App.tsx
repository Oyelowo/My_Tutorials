import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
