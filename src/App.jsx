import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import StatsSection from './components/StatsSection'

function App() {
  const [count, setCount] = useState(0)

  const newEntry = (e) => {
    console.log(e.target.id+" has been clicked.")
  };

  return (
    <div class="pageWrap">
      <Header />
      <InputSection newEntry = {newEntry} />
      <OutputSection newEntry = {newEntry} />
      <StatsSection />
    </div>
  )
}

export default App
