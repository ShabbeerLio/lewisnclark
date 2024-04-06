import './App.css';
import { BrowserRouter as  Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Peoples from './Components/Peoples/Peoples';
import Contact from './Pages/Contact/Contact';
import Category from './Components/Category/Category';
import Images from './Pages/Images/Images';
import Hotels from './Pages/Hotels/Hotels';
import HotelDetail from './Components/HotelDetail/HotelDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={"India Tour Trip | Luxury India Tours Packages | Luxury Travel India"} />} />
          <Route path="/about-us/" exact element={<About title={"Exotic Trip | Inbound Tour Agency India - Lewis N Clark Tours"} />} />
          <Route path="/lurury-india-tour/" exact element={<Peoples title={"India Tour Trip | Luxury India Tours Packages | Luxury Travel India"} />} />
          <Route path="/luxury-north-india/" exact element={<Category title={"North India Tour Packages | North India Holiday | North India Trip"} category="LUXURY NORTH INDIA" />} />
          <Route path="/luxury-south-india/" exact element={<Category title={"South India Tour Packages | Luxury Houseboat, Kerala Tour"} category="LUXURY SOUTH INDIA" />} />
          <Route path="/:pathName" exact element={<HotelDetail />} />
          <Route path="/luxury-hotels/" exact element={<Hotels title={"Luxury Hotels - Lewis and Clark Tours"} />} />
          <Route path="/india-tour-images/" exact element={<Images title={"India Tour Images - Lewis and Clark Tours"} />} />
          <Route path="/contact-us/" exact element={<Contact title={"Lewis and Clark Travel Expeditions - Lewis and Clark Tours"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
