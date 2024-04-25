
import React, { useEffect } from 'react'
import "./Home.css"
import Banner from '../../Components/Banner/Banner'
import himg1 from "../../Assets/Home/LUXURY-NORTH-INDIA-2.jpg"
import himg2 from "../../Assets/Home/luxury-south-india-tours.jpg"
import tag1 from "../../Assets/Home/Lewis-and-Clark-Tours-1.png"
import tag2 from "../../Assets/Home/Lewis-and-Clark-Tours-2.png"
import tag3 from "../../Assets/Home/Lewis-and-Clark-Tours-3.png"
import tag4 from "../../Assets/Home/Lewis-and-Clark-Tours-4.png"
import theam from "../../Assets/Home/romantic-rajasthan-tour.jpg"
import chooseus1 from "../../Assets/Home/India-exploration.jpg"
import chooseus2 from "../../Assets/Home/explore-india-tour.jpg"
import exoticimg from "../../Assets/Home/Images-1280.1280.jpeg"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import BlogData from '../../Components/Blog/BlogData'

const Home = (props) => {

  /* global dataLayer */
  const location = useLocation();

  useEffect(() => {
      document.title = props.title;

      const canonicalUrl = `${window.location.origin}${location.pathname}`;
      let canonicalLink = document.querySelector("link[rel='canonical']");
      if (canonicalLink) {
          canonicalLink.setAttribute("href", canonicalUrl);
      } else {
          canonicalLink = document.createElement("link");
          canonicalLink.setAttribute("rel", "canonical");
          canonicalLink.setAttribute("href", canonicalUrl);
          document.head.appendChild(canonicalLink);
      }

      const description = props.descriptions;
      let metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
          metaDescription.setAttribute("content", description);
      } else {
          metaDescription = document.createElement("meta");
          metaDescription.setAttribute("name", "description");
          metaDescription.setAttribute("content", description);
          document.head.appendChild(metaDescription);
      }

      // Ensure dataLayer is initialized before the GA script loads
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }

      // Load the Google Analytics script only once
      const gaScriptId = 'ga-gtag';
      if (!document.getElementById(gaScriptId)) {
          const script = document.createElement('script');
          script.id = gaScriptId;
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
          document.head.appendChild(script);

          script.onload = () => {
              gtag('js', new Date());
              gtag('config', 'G-3BK9F87D6E');
          };
      }
  }, [props.title, props.descriptions, location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  const formatPathname = (pathname) => {
    return pathname.toLowerCase().replace(/\s+/g, '-');
  };

  const trimDescription = (desc) => {
    const wordLimit = 30;
    const words = desc.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return desc;
  };


  return (
    <>
      <div className='home'>
        <Banner />
        <div className="home-about">
          <div className="home-boxes">
            <h3>Welcome To</h3>
            <h1>Lewis and Clark Tours! </h1>
            <div className="home-icon">
              <span>
                <div className="seperator">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 14 14">
                    <g fill="none" stroke="currentColor" stroke-line-cap="round" stroke-line-join="round">
                      <path d="M10.638 1.54H3.362a1.07 1.07 0 0 0-.85.46L.692 4.52a1.05 1.05 0 0 0 .06 1.29L6.21 12.1a.999.999 0 0 0 1.58 0l5.457-6.29a1.05 1.05 0 0 0 .06-1.29L11.488 2a1.07 1.07 0 0 0-.85-.46" />
                      <path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96" />
                    </g>
                  </svg>
                </div>
              </span>
            </div>
            <div className="home-detail">
              <p>Plan the Luxury and enjoy the finest experience in India with Luxury Hotels and exotic nature!</p>
            </div>
            <p>India is a vast country and beholds rich history and vibrant culture and vivid types of nature. Lewis and Clark Tour offers Luxury tour packages in India. We make your dream to Travel to India true. Our tours are filled up with stories—tales that fascinate the travellers coming back to India again and again.</p>
            <div className="home-images">
              <div className="home-img-item">
                <Link to="/luxury-north-india/" onClick={scrollToTop}>
                  <img src={himg1} alt="north india tour packages" />
                  <h4>Luxury North India</h4>
                </Link>
              </div>
              <div className="home-img-item">
                <Link to="/luxury-south-india/" onClick={scrollToTop}>
                  <img src={himg2} alt="Luxury tour of India" />
                  <h4>Luxury South India</h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-tags">
            <div className="tags-item">
              <img src={tag1} alt="best travel agency in india" />
              <h3>Travel Experts</h3>
              <p>Plan your Luxury India vacation with us! Personalized journeys exclusively
                guided and assisted by our India Travel experts at best!</p>
            </div>
            <div className="tags-item">
              <img src={tag2} alt="india tour packages from usa" />
              <h3>Authentic Experiences</h3>
              <p>India Trip with a private Tour guide Escort and Chauffeur for an authentic and local experience in the privately arranged and comfortable transport!</p>
            </div>
            <div className="tags-item">
              <img src={tag3} alt="best trip packages in india" />
              <h3>Exceptional Service</h3>
              <p>Providing exceptional services with special care and assistance during the entire Luxury tour which makes your holidays in India mesmerizing!</p>
            </div>
            <div className="tags-item">
              <img src={tag4} alt="travel packages in india" />
              <h3>Unconditional support</h3>
              <p>Available 24/7 for the tour support, change your Luxury Tour plan during the trip or any modification required to your itinerary, we are just one call or message away!</p>
            </div>
          </div>
          <div className="home-boxes">
            <div className="home-theam">
              <img src={theam} alt="luxury india tour packages" />
              <h2>Luxury Hotels</h2>
              <p>Lewis and Clark Tours is Luxury tour operators in India and offers all kind of Rajasthan tours luxury packages, Luxury private tours India and plans your India holidays exclusively with all inclusive for your best and unforgettable journey. Plan your Luxury vacation India with local tour operator in India for an authentic and real India experience! We are an India holiday specialists and are available to advice and support 24 x 7 for your India trip.</p>
              <div className="theam-button">
                <p>View All</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-chooseUs">
          <div className="home-boxes">
            <h2>Why Lewis and Clark?</h2>
            <p>Lewis and Clark expedition is known as a major chapter in the history of American exploration. The famous travellers Lewis N Clark and their team travelled a lot and discovered unmapped lands, rivers and mountains significantly.</p>
            <div className="chooseUs-main">
              <div className="chooseUs-item">
                <div className="chooseUs-left">
                  <Link to="/luxury-north-india/" onClick={scrollToTop}>
                    <img src={chooseus1} alt="rajasthan tour packages" />
                  </Link>
                </div>
                <div className="chooseUs-right">
                  <p>We got our inspiration from the trails of Lewis and Clark Expedition; hence our company name Lewis and Clark Tour came in to existence on the famous traveller’s name.</p>
                  <p>Lewis and Clark Tour: an India Destination Management Company (DMC)</p>
                  <p>Lewis and Clark is a start up in India since 2017 and an India Destination Management Company (India DMC). Our travel company is specialised in customized & authentic pre-designed tours through India. We are an <strong>inbound Tour Agency</strong> in India and offer customized and <strong>Tailor made tours in India</strong> .  Our Luxury India Tour programs are uniquely planned by Indian Tour experts and professionally executed.  Lewis and Clark Tourplans your <strong>exotic trip</strong> in India authentically with flexibility.</p>
                  <h4>Why India exploration?</h4>
                  <p>India is a vast country and beholds rich history and vibrant culture and vivid types of nature. We Lewis and Clark Tour offers Luxury tour packages in India. We make your dream to Travel to India true. Our tours are filled up with stories—tales that fascinatethe travellers coming back to India again and again.</p>
                </div>
              </div>
              <div className="chooseUs-item">
                <div className="chooseUs-right">
                  <h4>Dream Explore Experience! </h4>
                  <p>India has been dream destination for many travellers. Multilanguage, Multilanguage and multi religions, so much India offers, and then India is better known and refereed as a sub-continent. Explore India and its facets with Lewis and Clark DMC. We offer exciting cultural tours and luxury tours in India. Discover Rajasthan and the cities of Maharaja; stay in Maharaja Palaces, Oberoi Hotels, Taj Group Hotels, Leela Palaces, and Amar Vilas or at country side <strong>luxury Rajasthan </strong>Rawala Narlai for exotic experiences during your <strong>India trip</strong>.</p>
                  <p>Our <strong>India Customized Tours </strong>are well planned with private driver with Car and highly qualified accompany language speaking guide. Rejuvenate yourself with <strong>Kerala Ayurveda, Tea Plant Munnar</strong> and relax at beautiful Kerala and Goa beaches.  Varanasi beholds richness of Indian culture; feel divine of Hinduism at Varanasi Ganges Ghats. Enthrill yourself with our <strong>Luxury India wildlife tou</strong>r for Tiger Safari through Ranthambhore Tiger Park, <strong>Kanha National park</strong> and with Bandhav Garh national park with overnight at Taj Lodges. For a <strong>short India trip</strong>, we always recommend <strong>Luxury Golden Triangle</strong> India from Delhi to Jaipur via Agra Taj Mahal.</p>
                </div>
                <div className="chooseUs-left">
                  <Link to="/luxury-north-india/" onClick={scrollToTop}>
                    <img src={chooseus2} alt="travel packages in india" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-details">
              <h4>Lewis and Clark Tours believes in Personal care, authentic luxury experience & value for money! </h4>
              <p>We are looking forward to welcome you in India for an unforgettable and luxury experience from north India to south India as well from West India Mumbai to east India Calcutta of colonial time.</p>
              <p>Feel free to choose your favourite Luxury trip from our <strong>exotic India travel </strong>Programs. Contact us for your <strong>India tour private with guide</strong> and chauffeur. We are always happy to help you.</p>
            </div>
          </div>
        </div>
        <div className="home-exotic">
          <div className="home-boxes">
            <h3>Exotic India Tour | Best Luxury India Tours | Best Holiday Packages in India </h3>
            <p>Incredible Travel Experiences with LUXURY, Designed for you….!!!</p>
            <p>Our Luxury India Travel Experts will take over the entire planning of your personal and Luxury trips to India and ensure that you will explore and experience the best trip to India, with a perfect vacation. Your satisfaction is our happiness. We are available 24 x7 for our Travel guests!</p>
            <div className="exotic-img">
              <img src={exoticimg} alt="rajasthan vacation packages" />
            </div>
            <p>Discover the epitome of opulence with the Best Luxury India Tours curated by the premier tour operator in Delhi. Indulge in the allure of the Best of India’s Luxury Packages, meticulously designed to offer an unparalleled travel experience.</p>
            <p>Our expertise as the Best Luxury Tour Operator in India ensures that every detail of your journey is seamlessly orchestrated, providing you with the utmost comfort and sophistication.</p>
            <p>Embark on a journey of a lifetime with our Best North India Tour Packages, exploring the rich cultural tapestry and majestic landscapes. Immerse yourself in the charm of India with the Best Escorted Tours, and let our expert guides unveil the treasures of this vibrant nation. Elevate your holiday experience with the Best Holiday Packages in India, where luxury meets tradition for an unforgettable escapade.</p>
            <p>An enchanting journey with our Luxury Tours of India, where opulence meets cultural splendor. Indulge in the regal charm of Rajasthan with our bespoke Luxury Rajasthan Tour, crafted to immerse you in the rich history and royal heritage of the land. Our curated Luxury India Tours redefine extravagance, offering a seamless blend of comfort and cultural immersion. Tailored by expert Luxury Tour Operators in India, our packages promise an unparalleled experience, complemented by stays at iconic Oberoi Hotels and Taj Hotels.</p>
            <p>Elevate your vacation with our Luxury India Tour Packages, meticulously designed for those seeking refined travel experiences. Whether exploring the majestic forts of Rajasthan or unwinding in the backwaters of Kerala, our Luxury Holidays Packages in India cater to every discerning traveler. Discover the epitome of luxury with our exclusive offerings, ensuring that your Luxury India Vacation is a symphony of comfort and cultural richness.</p>
            <h5>Luxury India Tour from USA, Canada, Australia, UK | Luxury India Travel Packages from USA</h5>
            <p>Embark on an opulent journey with our bespoke Luxury South India Tour, where indulgence knows no bounds. Tailored to perfection, our Luxury India private tour packages cater to discerning travelers from the USA, Canada, Australia, and the UK, offering an unparalleled experience in the heart of the Indian subcontinent. </p>
            <p>Elevate your senses with our meticulously crafted Luxury India Tours Packages, ensuring a seamless blend of culture, heritage, and extravagance. Immerse yourself in the lap of luxury with our exclusive Luxury India Travel Packages, carefully curated for the elite traveler seeking an unforgettable escape. </p>
            <p>Explore the treasures of India with our exquisite Luxury Indian Holiday Packages, encompassing the splendors of the Golden Triangle and beyond. For a truly regal experience, embark on our Luxury Train Tours. Discover the epitome of luxury with our Luxury Tours to India, where each destination unfolds a story of opulence and magnificence.</p>
          </div>
        </div>
        <div className="home-blogs">
          <div className="home-boxes">
            <h2>Blogs</h2>
            <div className="home-blog-box">
              {BlogData.slice(1).reverse().slice(0, 3).map((item) => (
                <div className="blog-box-item" key={item.pathName}>
                  <Link to={{
                    pathname: `/blogs/${formatPathname(item.pathName)}/`
                  }} onClick={scrollToTop}>
                    <img src={item.cover} alt={item.alttag} />
                    <div className="blog-card-desc">
                      <p>{item.date}</p>
                      <h4>{item.title}</h4>
                      <p>{trimDescription(item.desc)}</p>
                    </div>
                  </Link>
                  <div className="blog-box-button">
                    <Link to={{
                      pathname: `/blogs/${formatPathname(item.pathName)}/`
                    }} onClick={scrollToTop}>View More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
