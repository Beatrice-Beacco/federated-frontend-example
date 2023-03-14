import ReportForm from "./views/ReportForm";
import { HashRouter } from "react-router-dom";
import React from "react";
import ModalProvider from "mui-modal-provider";

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={null}>
        <ModalProvider>
          <ReportForm />
        </ModalProvider>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
