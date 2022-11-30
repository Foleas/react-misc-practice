//import cx from 'classnames';
import React, { useState, useEffect } from "react";
import "./styles.css";
const capitalShort = require("./data/capitals-short.json");

const CountryCapitalGame = () => {
  // Use console.log() for debugging
  const [currentItem, setCurrentItem] = useState(null);
  const [wrongPair, setWrongPair] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [matchedItems, setMatchedItems] = useState([]);

  useEffect(() => {
    console.log("useEffect called");

    if (!allItems.length) {
      Object.entries(capitalShort)
        .sort(() => Math.random() - 0.5)
        .forEach(([country, capital], index) => {
          setAllItems((oldState) => [
            ...oldState,
            {
              id: `country-${country}`,
              realIndex: index,
              type: "country",
              value: country,
            },
            {
              id: `capital-${country}`,
              realIndex: index,
              type: "capital",
              value: capital,
            },
          ]);
        });
    }
  }, [allItems.length]);

  const clickHandler = (clickedItem) => {
    console.log("clickHandler");
    if (currentItem === clickedItem) return false;
    if (currentItem === null) {
      setCurrentItem(clickedItem);
      setWrongPair([]);
    } else {
      const findTemp = allItems.find(
        (item) => item.value === clickedItem.value
      );
      console.log("findTemp", findTemp);
      if (currentItem.realIndex === findTemp.realIndex) {
        setMatchedItems([...matchedItems, currentItem, findTemp]);
        setCurrentItem(null);
      } else {
        setWrongPair([...wrongPair, currentItem, clickedItem]);
        setCurrentItem(null);
      }
    }
  };

  const sortHandler = () => {
    // console.log("sort");
    const allItemsTemp = [...allItems];
    allItemsTemp.sort(() => Math.random() - 0.5);
    setAllItems(allItemsTemp);
    setCurrentItem(null);
  };

  return (
    <>
      <div className="game-wrapper">
        {allItems.length !== matchedItems.length ? (
          allItems
            .filter((item) => !matchedItems.includes(item))
            .map((item) => {
              const { id, value } = item;
              return (
                <button
                  key={id}
                  onClick={() => clickHandler(item)}
                  className={`${currentItem?.id === id ? "active" : ""} ${
                    wrongPair.includes(item) ? "wrong" : ""
                  }`}
                >
                  {value}
                </button>
              );
            })
        ) : (
          <p>Congratulations</p>
        )}
      </div>

      <div className="button-actions">
        <button onClick={() => sortHandler()}>Sort</button>
      </div>
    </>
  );
};

export default CountryCapitalGame;
