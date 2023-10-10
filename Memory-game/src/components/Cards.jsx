import { useState } from "react";
import { getImages } from "../helpers/getImages";

const Cards = () => {
  
    let size = 3;
    const [images, setImages] = useState(getImages(size));

  return (
    <div className="cards">
      <h2>Score: 100</h2>
      {images.map((item, index) => (
        <li key={index}>
          <div className="content">
            <div className="front">
              <img src={item} alt="" />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Cards;
