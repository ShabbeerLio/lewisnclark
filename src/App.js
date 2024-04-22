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
import Blog from './Components/Blog/Blog';
import BlogDetail from './Components/BlogDetail/BlogDetail';

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
          <Route path="/" exact element={<Home title={"Book Luxury India Tour Packages, Luxury Tour of India, Luxury Vacation - Lewis and Clark Tours"} descriptions={"Lewis and Clark Tour is one of the best luxury tour operators in India. Experience the epitome of luxury India Vacations with us and uncover its natural beauty and rich culture. We create a tailor-made Luxury tour in India, ensuring an unforgettable journey from start to finish."}/>} />
          <Route path="/about-us/" exact element={<About title={"Exotic Trip | Inbound Tour Agency India - Lewis N Clark Tours"} />} />
          <Route path="/lurury-india-tour/" exact element={<Peoples title={"India Tour Trip | Luxury India Tours Packages | Luxury Travel India"} />} />
          <Route path="/luxury-north-india/" exact element={<Category title={"North India Luxury Tour Packages | Oberoi Golden Triangle Tour, Luxury North India Tours"} descriptions={"Bespoke Luxury India Tour with Lewis and Clark Expedition. We customize your luxury vacation packages to India and plan the best luxury trip in India and Indian subcontinent. Explore the trails of rich heritage, culture and history with Lewis and Clark."} category="LUXURY NORTH INDIA" />} />
          <Route path="/luxury-south-india/" exact element={<Category title={"South India Tour Packages | Luxury Houseboat, Kerala Tour"} descriptions={"Experience the charm of South India Luxury travel. We design your Luxury South India Tour packages with Taj Houseboat Kerala and make tour India Luxury Tours unforgettable. Discover Luxury North and South India Tour Packages together with Lewis and Clark travels"} category="LUXURY SOUTH INDIA" />} />
          <Route path="/:pathName" exact element={<HotelDetail />} />
          <Route path="/luxury-hotels/" exact element={<Hotels title={"Luxury Hotels - Lewis and Clark Tours"} />} />
          <Route path="/india-tour-images/" exact element={<Images title={"India Tour Images - Lewis and Clark Tours"} />} />
          <Route path="/contact-us/" exact element={<Contact title={"Lewis and Clark Travel Expeditions - Lewis and Clark Tours"} />} />
          <Route path="/blogs/" exact element={<Blog title={"Lewis and Clark Travel Expeditions - Lewis and Clark Tours"} descriptions={"Lewis and Clark Tour is one of the best luxury tour operators in India. Experience the epitome of luxury India Vacations with us and uncover its natural beauty and rich culture. We create a tailor-made Luxury tour in India, ensuring an unforgettable journey from start to finish."}/>} />
          <Route path="/blogs/:pathName" exact element={<BlogDetail/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
