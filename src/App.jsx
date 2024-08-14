import Home from "./components/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/CreateUSer" element={<Form />} />
      {/* Add more routes here */}
    </Routes>
    </>
  );
}

export default App;
