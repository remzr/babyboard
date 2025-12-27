import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import StatsSection from './components/StatsSection'

function App() {
  //Hooks for button timers
  const [lastPoop, setLastPoop] = useState(null)
  const [lastPee, setLastPee] = useState(null)
  const [lastFood, setLastFood] = useState(null)
  const [lastNasivin, setLastNasivin] = useState(null)
  const [lastAlgifor, setLastAlgifor] = useState(null)
  const [lastDafalgan, setLastDafalgan] = useState(null)

  function getTime(mode) {
    //Format time to output

    if (mode === "clock") {
      const formatter = new Intl.DateTimeFormat("en-CH", {
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    })
      return formatter.format(new Date());

    } else if (mode === "timer") {          
      const formatter = new Intl.DateTimeFormat("en-CH", {
        weekday: "short", 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false,
    })
      return formatter.format(new Date());
    }
  }

  const newEntry = (e) => {
    if (e.target.id === "timerPoop") {
      setLastPoop(`Last: ${getTime("timer")}`);
    } else if (e.target.id === "timerPee") {
      setLastPee(`Last: ${getTime("timer")}`);
    } else if (e.target.id === "timerFood") {
      setLastFood(`Last: ${getTime("timer")}`);
    } else if (e.target.id === "timerNasivin") {
      setLastNasivin(`Last: ${getTime("timer")}`);
    } else if (e.target.id === "timerAlgifor") {
      setLastAlgifor(`Last: ${getTime("timer")}`);
    } else if (e.target.id === "timerDafalgan") {
      setLastDafalgan(`Last: ${getTime("timer")}`);
    }
  }

  //Timer to update hook every second
  const [time, setTime] = useState(Date.now());
  
  //UseEffect to ensure cleanup on unmount. Just in case the app might get bigger.
  useEffect(() => {
    const interval = setInterval(() => setTime(getTime("clock")), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div class="pageWrap">
      <Header time = {time} />
      <InputSection 
        newEntry = {newEntry}
        lastPoop = {lastPoop}
        lastPee = {lastPee}
        lastFood = {lastFood}
      />
      <OutputSection 
        newEntry = {newEntry}
        lastNasivin = {lastNasivin}
        lastAlgifor = {lastAlgifor}
        lastDafalgan = {lastDafalgan}  
      />
      <StatsSection />
    </div>
  )
}

export default App
