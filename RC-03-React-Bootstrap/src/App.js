import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/MyNavbar";
import Slider from "./Components/Slider";
import MyCard from "./Components/MyCard";
import dataa from "./data"


function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <MyCard veri ={dataa}/>
    </div>
  );
}

export default App;
