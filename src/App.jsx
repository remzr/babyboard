import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'
import StatsSection from './components/StatsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <InputSection />
      <OutputSection />
      <StatsSection />
    </>
  )
}

export default App
