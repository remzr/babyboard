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

  const newEntry = (e) => {
    const timeFormat = {
      weekday: "short", hour: "numeric", minute: "numeric"
    }

    if (e.target.id === "timerPoop") {
      setLastPoop(new Date().toLocaleTimeString("en-CH").DateTimeFormat(["hh", "mm"]));
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
