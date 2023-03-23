import { Route, Routes } from "react-router-dom";

import PublicationDisplayPage from "./pages/PublicationDisplayPage";
import NewPublicationPage from "./pages/NewPublicationPage";

function App() {
  return (
    <div className="min-h-screen bg-stone-900 p-8 text-white">
      <h1 className="m-3 text-center text-3xl font-bold">Publications Display App</h1>
      <Routes>
        <Route element={<PublicationDisplayPage />} path="/" />
        <Route element={<NewPublicationPage />} path="/new" />
      </Routes>
    </div>
  );
}

export default App;
