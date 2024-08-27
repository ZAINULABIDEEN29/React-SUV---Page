import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
let heroData = [
  { text1: "Dive Into ", text2: "What you Love" },
  { text1: "Indulge", text2: "your Passion" },
  { text1: "Give in to", text2: "your passions" }
]

const App = () => {
  const [heroCount, setHeroCount] = useState(0);
const [playStatus, setPlayStatus] = useState(false);

useEffect(() => {
  setInterval(() => {
    setHeroCount((count) => { return count == 2 ? 0 : count + 1 })
  }, 3000)
},[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
