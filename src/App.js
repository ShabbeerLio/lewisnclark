import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
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

  // remove inspect and copy element
  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home canonical={"https://lewisnclarktours.com/"} title={"India Tour Trip | Luxury India Tours Packages | Luxury Travel India"} />} />
          <Route path="/about-us/" exact element={<About canonical={"https://lewisnclarktours.com/about-us/"} title={"Exotic Trip | Inbound Tour Agency India - Lewis N Clark Tours"} />} />
          <Route path="/lurury-india-tour/" exact element={<Peoples canonical={"https://lewisnclarktours.com/lurury-india-tour/"} title={"India Tour Trip | Luxury India Tours Packages | Luxury Travel India"} />} />
          <Route path="/luxury-north-india/" exact element={<Category canonical={"https://lewisnclarktours.com/luxury-north-india/"} title={"North India Tour Packages | North India Holiday | North India Trip"} category="LUXURY NORTH INDIA" />} />
          <Route path="/luxury-south-india/" exact element={<Category canonical={"https://lewisnclarktours.com/luxury-south-india/"} title={"South India Tour Packages | Luxury Houseboat, Kerala Tour"} category="LUXURY SOUTH INDIA" />} />
          <Route path="/:pathName" exact element={<HotelDetail />} />
          <Route path="/luxury-hotels/" exact element={<Hotels canonical={"https://lewisnclarktours.com/luxury-hotels/"} title={"Luxury Hotels - Lewis and Clark Tours"} />} />
          <Route path="/india-tour-images/" exact element={<Images canonical={"https://lewisnclarktours.com/india-tour-images/"} title={"India Tour Images - Lewis and Clark Tours"} />} />
          <Route path="/contact-us/" exact element={<Contact canonical={"https://lewisnclarktours.com/contact-us/"} title={"Lewis and Clark Travel Expeditions - Lewis and Clark Tours"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
