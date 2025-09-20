// import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"



import candle from "../assets/candle.jpg"
import scented_img from "../assets/scented.png"


const Home = () => {
//   const instagramUsername = "the_fame_candles"; // replace with your ID, e.g. "instagramUser"
  const whatsappNumber = "917249571525"; // international format, no + and no spaces
  const prefilledMessage = "Hello, I found you via your site.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      prefilledMessage
    )}`;
    window.open(url, "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/the_fame_candle?igsh=a3lkdWJkeWtyem1l");
  };
  return (
    <div className="home_main">
      <div className="home_2">

        <div className="candle_img">
          <img
            src={candle}
            className="candle1"
            alt="candle"
          />
        </div>
        <div className="home_title">
          <p className="heading_1">“Ignite Serenity. Elevate Every Moment.” </p>
          <p className="heading_2">
            Glow softly, breathe deeply—transforming spaces into soothing
            retreats.
          </p>
        </div>
        </div>
        <div className="home_3">
            <img src={scented_img} className="nature_img" alt="candle" />
        <p className="nature_text">
          Be Like a Candle,give your warmth and light to others
        </p>
      </div>
      <div className="products">
        <p className="heading_1">Our Products</p>
        <div className="cards">
         
          <div className="candle_card">
            <img src={img3} className="card_img" alt="candle"  />
           
          </div>
           <div className="candle_card">
            <img src={img4} className="card_img" alt="candle"  />
           
          </div>
           
           <div className="candle_card">
            <img src={img6} className="card_img" alt="candle"  />
           
          </div>
           <div className="candle_card">
            <img src={img7} className="card_img"  alt="candle" />
           
          </div>
        
        </div>
      </div>
        <div className="features">
        <div className="features_1">
          <p className="heading_1"style={{textAlign:"start"}}>Best Service Features</p>
          <p className="heading_2">
            We offer a variety of services designed to enhance your candle
            experience
          </p>
          <button className="shop_btn">Dm for Shop</button>
        </div>
        <div className="features_2">
          <div className="service" style={{textAlign:"start"}}>
            <p className="heading_3" >Natural and Sustainable</p>
            <p className="heading_2">
              We believe in quality and environmental sustainability.Our candles
              are made from non-toxic material.
            </p>
          </div>
          <div className="service" style={{textAlign:"start"}}>
            <p className="heading_3">Fast Shipping</p>
            <p className="heading_2">
              We understand how important it is to receive products quickly.With
              our fats delivery service
            </p>
          </div>
          <div className="service"style={{textAlign:"start"}}>
            <p className="heading_3">Personal Assistance</p>
            <p className="heading_2">
              We are always ready to assist you with friendliness and care.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_head"style={{textAlign:"start"}}>
          <p className="heading_1">Fame Candles</p>
          <p className="heading_2">
            We are committed to provide to providing an exceptional scented
            candle shopping experience with fast and friendly service.
          </p>
        </div>
        <div className="connect" style={{textAlign:"start"}}>
          <p className="heading_3">Connect with us</p>
          <div className="socials">
            <span onClick={openInstagram} style={{ cursor: "pointer" }}>
              <FaInstagram size={18} />
            </span>
          
            <span
              onClick={openWhatsApp}
              style={{ cursor: "pointer", marginLeft: 10 }}
            >
              <FaWhatsapp size={18} />
            </span>
        
          </div>
          <p className="heading_3">Contact</p>
          <p className="heading_2"> 7249571525</p>
          <p className="heading_2">famecandle@gmail.com</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default Home;
