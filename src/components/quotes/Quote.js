import React, { useState, useEffect } from "react";
import { getQuotes } from "../../QuoteProvider";

export const Quote = () => {
  const [quotesArray, setQuotes] = useState([]);
  const [singleQuote, setSingle] = useState({});

  const holdQuotes = () => {
    return getQuotes().then((quotesArray) => {
      setQuotes(quotesArray);
      setSingle(quotesArray[randomnum()]);
    });
  };

  const randomnum = () => {
    return Math.floor(Math.random() * quotesArray.length);
  };
  const handleButtonClick = () => {
    setSingle(quotesArray[randomnum()]);
  };
  useEffect(() => {
    holdQuotes();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <h3>Quote: {singleQuote.text}</h3>
        <h2>Author: {singleQuote.author}</h2>
        <button className="button" onClick={handleButtonClick}>
          Random Quote
        </button>
      </div>
    </div>
  );
};
