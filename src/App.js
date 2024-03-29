import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us/" exact element={<About />} />
          {/* <Route path="/products-details" exact element={<ProductDetails />} /> */}
          {/* <Route path="/my-account" exact element={<MyAccount />} /> */}
          {/* <Route path="/contact" exact element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
