import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../src/pages/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
