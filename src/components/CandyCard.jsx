import React from "react";
import "./CandyCard.css";

const CandyCard = ({ candy }) => {
  return (
    <div className="candy-card">
      <img className="candy-pic" src={candy.image} alt="Candy Image" />
      <div className="candy_details">
        <h3 className="candy_details_heading">{candy.name}</h3>
        <div className="candy_descrip">
          <p>{candy.descrip.slice(0, 100) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default CandyCard;
