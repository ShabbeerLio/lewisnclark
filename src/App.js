import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Peoples from './Components/Peoples/Peoples';
import Contact from './Pages/Contact/Contact';
import Category from './Components/Category/Category';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us/" exact element={<About />} />
          <Route path="/lurury-india-tour/" exact element={<Peoples />} />
          <Route path="/luxury-nouth-india/" exact element={<Category />} />
          <Route path="/luxury-south-india/" exact element={<Category />} />
          <Route path="/contact-us/" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
