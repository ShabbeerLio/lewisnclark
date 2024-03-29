import React from 'react'
import "./About.css"
import aboutimg from "../../Assets/About/Lewis-and-Clark-Tours.jpg"
import p4 from "../../Assets/About/3f1e7d76-a3cc-4a98-acc7-7173fd98f071.jpg"
import p2 from "../../Assets/About/PHOTO-2023-03-29-14-54-28.jpg"
import p5 from "../../Assets/About/WhatsApp-Image-2023-04-26-at-17.17.17.jpeg"
import p1 from "../../Assets/About/bikram-1.jpg"
import p3 from "../../Assets/About/prashant.jpg"


const About = () => {
  return (
    <div className='about'>
      <div className='about-main'>
        <div className="about-head">
          <h2>About us</h2>
          <div className="about-icon">
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
        </div>
        <div className="about-image">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about-detail">
          <h2>Lewis N Clark Tours</h2>
          <h4>An India Destination Management Company (DMC)</h4>
          <div className="about-detail-desc">
            <p>Lewis N Clark Tours is a start up in India from April 2019 and an India Destination Management Company (India DMC). Our travel company specialises in customized & authentic pre-designed tours throughout India. We are an inbound Tour Agency in India and offer customized Tour and Tailor made tours in India.  Our Luxury India Tour programs are uniquely planned by Indian Tour experts and professionally executed.  Lewis N Clark Tours plans your exotic trip in India authentically with flexibility.</p>
            <p>India has been a dream destination for many travellers. Multilanguage, Multicultural and multi religions, so much India offers, that’s why India is better known and refereed as a sub-continent than a country. Explore Incredible India and its facets with Lewis and Clark DMC. We offer exciting cultural tours and luxury tours in India. Discover Rajasthan and the cities of Maharaja; stay in Maharaja Palaces, Oberoi Hotels, Taj Group Hotels, Leela Palaces, and Amar Vilas or at countryside luxury Rajasthan Rawla Narlai for exotic experiences during your Luxury India vacation. Our India Customized Tours are well planned with private drivers with Car and led by highly qualified accompanying Tour guides. Rejuvenate yourself with Kerala Ayurveda, visit Tea Plant Munnar and relax at beautiful Kerala and Goa beaches.  Varanasi beholds the richness of Indian culture; feel divine of Hinduism religion and Indian culture deeply at Varanasi Ganges Ghats. Enthrill yourself with our Luxury India wildlife tour for Tiger Safari through Ranthambore Tiger Park, Kanha National park and with Bandhav Garh national park overnight at Taj Lodges. For a short India trip, we always recommend you Luxury Golden Triangle India from Delhi to Jaipur via Agra Taj Mahal.</p>
            <p>We are looking forward to welcoming you in India for an unforgettable and luxurious experience from north India to south India as well from West India Mumbai to east India Calcutta of colonial time.</p>
            <p>Lewis N Clark Tours believes in Personal care, authentic luxury experience & value for money! </p>
            <p>Feel free to choose your favourite Luxury India trips from our exotic India travel Programs. Contact us for your India tour private with a guide and chauffeur. We are always happy to help you.</p>
            <span>Note: Lewis N Clark DMC is a part of Amazing Indien Reisen UG group. </span>
          </div>
        </div>
        <div className="about-our-people">
          <h2>Our Team</h2>
          <div className="about-people-detail">
            <div className="people-box">
              <img src={p1} alt="" />
              <div className="people-box-detail">
                <a href="">
                  <h3>Bikram K. (Tour Operation)</h3>
                </a>
                <p>Bikram leads Lewis and Clark company management in India. He brings with him over 14 years of experience from the tour and travel industry in particular Inbound Tourism, creating the program and executing the whole operation to the end. Bikram firmly believes in value for both guests and suppliers, resulting in win-win partnerships for all. He is a passionate traveller and his favourite place is Varanasi and Jaisalmer in north India, whereas he likes spending time in Kerala for his leisure.</p>
              </div>
            </div>
            <div className="people-box">
              <img src={p2} alt="" />
              <div className="people-box-detail">
                <a href="">
                  <h3>NAVEEN PATHAK (SALES & MARKETING)</h3>
                </a>
                <p>I’m an Asian indigenous, obsessed with travel and recreational activities. I believe travelling may calibrate an individual enough to differentiate the charms of this intra-globe phenomenon. I admire creating perfect moments for everybody. I try to deliver every aspect of tour programs perfectly. I have catered services for the global client-base; ranging from TC-I to TC-III. One can rely on me for the entire Indian Subcontinent to a greater extent. Nevertheless, I’m still learning and I perhaps will keep doing this in life to come</p>
              </div>
            </div>
            <div className="people-box">
              <img src={p3} alt="" />
              <div className="people-box-detail">
                <a href="">
                  <h3>PRASHANT SINGH (TOUR LEADER)</h3>
                </a>
                <p>Prashant was born in Varanasi and raised in Delhi. Prashant completed his bachelor in Tourism and master in tourism, so far a gold medallist. After his academic education, he has travelled to many destinations in India and neighbouring countries like Nepal, Bhutan and Sri Lanka and explored these destinations culturally and historically. Prashant has been working as tour guide cum escort since 2006 and leading the group tours like Oberoi India Tours. His series were GATE 1, Designer Holidays. He covered mainly US, Canada, UK, Australia, New zeaLand and Swiss clients. His core area is Rajasthan along with Agra and Delhi in north India.  Feel the essence of India culturally and historically with him, as he makes the tour interesting and unforgettable with his experience. His endeavour is always to bring a smile on a traveller’s face and to let them feel at home. </p>
              </div>
            </div>
            <div className="people-box">
              <img src={p4} alt="" />
              <div className="people-box-detail">
                <a href="">
                  <h3>DILIP SINGH (TOUR GUIDE)</h3>
                </a>
                <p>Dilip Singh is an experienced Tour guide and associated with the travel and tourism industry for the last 12 years. Previously he worked in the corporate world with Tata Company as sales manager, but his passion to travel and to explore new places brought him ultimately to the tourism industry.  He works with pleasure to be the host of his guests in india. So far, he studied Indian history, culture and archaeology from Banaras Hindu University I.e. one of the best universities in India. He has deep knowledge of Hinduism and its cultural aspects.</p>
              </div>
            </div>
            <div className="people-box">
              <img src={p5} alt="" />
              <div className="people-box-detail">
                <a href="">
                  <h3>NIKHLESH DUBEY (IT TEAM)</h3>
                </a>
                <p>Nikhlesh Dubey has experience of 15 years as Digital Marketing Consultant. His Company GITS Project has been supporting our travel companies for the last 7 years. Currently, he is leading the whole web development and designing team and oversees the technical teams closely. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
