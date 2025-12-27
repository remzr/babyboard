import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import StatsSection from './components/StatsSection'

function App() {
  const [lastPoop, setLastPoop] = useState(0)
  const [lastPee, setLastPee] = useState(0)
  const [lastFood, setLastFood] = useState(0)
  const [lastNasivin, setLastNasivin] = useState(0)
  const [lastAlgifor, setLastAlgifor] = useState(0)
  const [lastDafalgan, setLastDafalgan] = useState(0)

  function getTime() {
    //Format time to output
    const formatter = new Intl.DateTimeFormat("en-CH", {
      weekday: "short", 
      hour: "2-digit", 
      minute: "2-digit",
      hour12: false,
    })

    return formatter.format(new Date());
  }

  const newEntry = (e) => {
    if (e.target.id === "timerPoop") {
      setLastPoop(`Last: ${getTime()}`);
    }
  };

  return (
    <div class="pageWrap">
      <Header />
      <InputSection 
        newEntry = {newEntry}
        lastPoop = {lastPoop}
        lastPee = {lastPee}
        lastFood = {lastFood}
        lastNasivin = {lastNasivin}
        lastAlgifor = {lastAlgifor}
        lastDafalgan = {lastDafalgan} 
      />
      <OutputSection 
        newEntry = {newEntry}
        lastPoop = {lastPoop}
        lastPee = {lastPee}
        lastFood = {lastFood}
        lastNasivin = {lastNasivin}
        lastAlgifor = {lastAlgifor}
        lastDafalgan = {lastDafalgan}  
      />
      <StatsSection />
    </div>
  )
}

export default App
