import { useState } from "react";

function StatsSection() {

const [dailyQuote, setDailyQuote] = useState(null);
const [error, setError] = useState(null);

function newQuote() {
  
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
  headers: {
    "User-Agent": "babyboard",
    "Accept": "text/plain"
  }
})
  .then((response) => {
    if (response.status >= 400) {
      throw new Error("Server Error");
    }
    return response.text();
  })
  .then(quoteText => {
    setDailyQuote(quoteText)
  })
  .catch((error) => setError(error));
};

  return (
    <aside id="statsSection">
        <h2>Victor</h2>
        <p>12 Weeks</p>
        <p id="dailyQuote">{dailyQuote}</p>
        <button onClick={newQuote}>New Quote</button>
    </aside>
    )
}

export default StatsSection