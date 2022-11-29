//import cx from 'classnames';
import React, { useState, useEffect } from "react";
const capitalShort = require("./data/capitals-short.json");

const CountryCapitalGame = () => {
  // Use console.log() for debugging
  const [currentButton, setCurrentButton] = useState(null);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    console.log("capitalShort", capitalShort);
    const countries = Object.keys(capitalShort).map((item) => item);
    const capitals = Object.values(capitalShort).map((item) => item);
    setAllItems(countries.concat(capitals).sort((a, b) => Math.random() - 0.5));
  }, []);
  console.log(allItems);

  const clickHandler = (item, index) => {
    console.log(index);
    const value = Object.values(capitalShort).findIndex(item);
    console.log(value);
    setCurrentButton(index);
  };

  return (
    <>
      <div>
        {allItems.map((item, index) => (
          <button
            key={`${item}-${index}`}
            onClick={() => clickHandler(item, index)}
            className={`${currentButton === index && "active"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <style>{`
            .active {
                background-color: blue;
                padding: 5px 10px;
                color:   #585858;
            }
    `}</style>
    </>
  );
};

export default CountryCapitalGame;
