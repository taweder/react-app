import React from "react";
import "./Candies.css";
import aeroImage from "./assets/aero.jpg";
import reeseImage from "./assets/reese.jpg";

const Candies = () => {
  const ages = [8, 23, 12, 50, 3, 62];

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
  ];
  // function sayHello() {
  //   console.log("Say hello");
  // }

  const sayHello = () => {
    console.log("Say hello");
  };
  sayHello();
  //removed message
  //map steps through the array and maps the content for each list item
  // const displayAges = ages.map(function (myAge) {
  //   //this return returns each result into the variable 'displayAges'
  //   return <p>My age is: {myAge} </p>;
  // });

  const rRated = ages.filter((age) => {
    return age > 18;
  });

  console.log(rRated);

  const displayR = rRated.map((adult) => {
    //return <p>You can rent R movies if you are: {adult}</p>;
    return <li>{adult}</li>;
  });

  const displayCandy = candyList.map((candy) => {
    //return <p>You can rent R movies if you are: {adult}</p>;
    return (
      <div className="card">
        <img src={candy.image} alt="Logo" />
        <div className="card-body"></div>
        <h4>{candy.name} </h4>
        <p>
          <b>Description: </b>
          {candy.descrip}
        </p>
      </div>
    );
  });

  //this returns prints stuff out to the page
  //prints display ages, which holds all the re-mapped paragraphs
  //return <div>{displayAges}</div>;
  return (
    <div>
      <ul>{displayR}</ul>
      {/* <img src={aeroImage} alt="Logo" /> */}
      {displayCandy}
    </div>
  );
};

export default Candies;
