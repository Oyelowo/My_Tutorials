import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import useReactRouter from 'use-react-router';

const App: React.FC = () => {
  const { history } = useReactRouter();

  useEffect(() => {
    history.push("/cart")
    return () => {
    };
  }, [])
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
