import './App.css';
import Home from "./Component/Home.jsx";
import Gallary from "./Component/Gallary.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";

function App() {
  return ( 
    <div className = "App" >
    <Home/>
    <About/>
    <Gallary/>
    <Contact/>
    </div>
  );
}

export default App;