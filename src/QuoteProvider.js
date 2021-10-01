import React from "react";

export const getQuotes = () => {
  return fetch(`https://type.fit/api/quotes`).then((response) =>
    response.json()
  );
};
