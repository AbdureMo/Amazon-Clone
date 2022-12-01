// import React from "react";
// import { Zoom } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"];

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Zoom scale={0.4}>
//         {images.map((each, index) => (
//           <img key={index} style={{ width: "100%" }} src={each} alt="" />
//         ))}
//       </Zoom>
//     </div>
//   );
// };



import React from "react";
import { Fade, Slide  } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

const slideImages = [
  {
    url: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    // caption: "First Slide",
  },
  {
    url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    // caption: "Second Slide",
  },
  {
    url: "	https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    // caption: "Third Slide",
  },
  {
    url: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    // caption: "Fourth Slide",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img className="home__image" src={slideImage.url} alt="" />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};


export default Slideshow;
