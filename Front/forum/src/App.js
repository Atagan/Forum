import logo from './logo.svg';
import './App.css';
import MainView from './Components/MainView/MainView';
import AddPostButton from "./Components/Thread/AddPostButton";
import {useState} from 'react';

function App() {
  const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <MainView></MainView>
      <AddPostButton trigger={buttonPopup} setTrigger={setButtonPopup}></AddPostButton>
    </div>
  );
}

export default App;
