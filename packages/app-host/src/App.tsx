import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  console.log("NODE_ENV", process.env.NODE_ENV);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
