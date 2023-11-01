import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Add from "./Pages/Add";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/addpage" element={<Add />} />
        <Route path="/updatePage" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
