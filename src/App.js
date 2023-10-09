import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setBtnText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Light mode Enabled","Success");
    } 
    else if (mode === "light") {
      setMode("dark");
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert(" Dark mode Enabled","Success");
    }
  };
  return (
    <>
      <Navbar
        title="TextEditor"
        mode={mode}
        btn={btntext}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} heading="Text Utility Tool" mode={mode} />
    </>
  );
}

export default App;
