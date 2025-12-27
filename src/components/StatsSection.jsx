import { useState } from "react";

function StatsSection() {

const [dailyQuote, setDailyQuote] = useState(null);
const [dataIsLoaded, setDataIsLoaded] = useState(false);
const [error, setError] = useState(null);

function newQuote() {
  fetch("https://stoic.tekloon.net/stoic-quote", {
    method: "GET",
    headers: {
      "Origin": "http://localhost:5173/",
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then((response) => {
    if (response.status >= 400) {
      throw new Error("Server Error");
    }
    return response.json();
  })
  .then((response) => setDailyQuote(response.quoteText))
  .catch((error) => setError(error));
};

function getQuote(e) {
  setDailyQuote(newQuote);
}

  return (
    <aside id="statsSection">
        <h2>Numerobis</h2>
        <p>12 Weeks</p>
        <p id="dailyQuote">{dailyQuote}</p>
        <button onClick={getQuote}>New Quote</button>
    </aside>
    )
}

export default StatsSection