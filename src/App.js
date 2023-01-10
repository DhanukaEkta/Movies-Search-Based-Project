import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";
import {Contact} from "./pages/contact";
import {About} from "./pages/about";
import {Home} from "./pages/home";
import {Details} from "./pages/details";
function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details" element={<Details />}/>
          </Routes>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App;
