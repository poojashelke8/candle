import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import img1 from "../assets/img1.jpeg"

const Home = () => {
//   const instagramUsername = "the_fame_candles"; // replace with your ID, e.g. "instagramUser"
//   const whatsappNumber = "917249571525"; // international format, no + and no spaces
//   const prefilledMessage = "Hello, I found you via your site.";

//   const openWhatsApp = () => {
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       prefilledMessage
//     )}`;
//     window.open(url, "_blank");
//   };

//   const openInstagram = () => {
//     window.open(`https://www.instagram.com/${instagramUsername}/`, "_blank");
//   };
  return (
    <div className="home_main">
      <div className="home_2">

        <div className="candle_img">
          <img
            src={img1}
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
      
     
    </div>
  );
};

export default Home;
