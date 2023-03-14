import React from "react";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  console.log("NODE_ENV", process.env.NODE_ENV);
  console.log("FEDERATION TYPES", process.env.FEDERATION_TYPES);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
