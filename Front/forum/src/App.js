import logo from "./logo.svg";
import "./App.css";
import MainView from "./Components/MainView/MainView";
import AddPostButton from "./Components/Thread/AddPostButton";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <><Router>
      <Routes>
        <Route exact path="/home" element={<MainView />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      </Router></>
  );
}

export default App;
