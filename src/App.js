import {Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from "./page/homepage";
import Login from "./page/login";
import Peta from "./page/peta";
import Footer from "./components/footerr";

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/peta" element={<Peta />} />
        </Routes>
        <Footer />
      
      
       
      </div>
  );
}

export default App;
