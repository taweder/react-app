import React from "react";
import "./CandyList.css";

import aeroImage from "../assets/aero.jpg";
import reeseImage from "../assets/reese.jpg";
import wunderImage from "../assets/wunderbar.jpg";
import CandyCard from "./CandyCard";

const CandyList = () => {
  const candyList = [
    {
      name: "Aero",
      image: aeroImage,
      descrip:
        "A popular brand of milk chocolate bar made by Nestlé that is filled with tiny air bubbles.",
    },
    {
      name: "Reese's",
      image: reeseImage,
      descrip:
        "Reese's Peanut Butter Cups are an American candy by the Hershey Company consisting of a peanut butter filling encased in chocolate.",
    },
    {
      name: "Wonderbar",
      image: wunderImage,
      descrip:
        "The Cadbury Wunderbar is a Canadian chocolate bar with a filling of creamy peanut butter and chewy caramel, which is then coated in rich Cadbury milk chocolate. Some versions also include light rice crisps for added crunch. It is known for its rich, sweet flavor with a combination of smooth and chewy textures. ",
    },
    {
      name: "Aero",
      image: aeroImage,
      descrip:
        "A popular brand of milk chocolate bar made by Nestlé that is filled with tiny air bubbles.",
    },
    {
      name: "Reese's",
      image: reeseImage,
      descrip:
        "Reese's Peanut Butter Cups are an American candy by the Hershey Company consisting of a peanut butter filling encased in chocolate.",
    },
    {
      name: "Wonderbar",
      image: wunderImage,
      descrip:
        "The Cadbury Wunderbar is a Canadian chocolate bar with a filling of creamy peanut butter and chewy caramel, which is then coated in rich Cadbury milk chocolate. Some versions also include light rice crisps for added crunch. It is known for its rich, sweet flavor with a combination of smooth and chewy textures. ",
    },
    {
      name: "Aero",
      image: aeroImage,
      descrip:
        "A popular brand of milk chocolate bar made by Nestlé that is filled with tiny air bubbles.",
    },
    {
      name: "Reese's",
      image: reeseImage,
      descrip:
        "Reese's Peanut Butter Cups are an American candy by the Hershey Company consisting of a peanut butter filling encased in chocolate.",
    },
    {
      name: "Wonderbar",
      image: wunderImage,
      descrip:
        "The Cadbury Wunderbar is a Canadian chocolate bar with a filling of creamy peanut butter and chewy caramel, which is then coated in rich Cadbury milk chocolate. Some versions also include light rice crisps for added crunch. It is known for its rich, sweet flavor with a combination of smooth and chewy textures. ",
    },
  ];

  return (
    <div className="candy_cards">
      {candyList.map((candy) => (
        <CandyCard candy={candy} />
      ))}
    </div>
  );
};

export default CandyList;
