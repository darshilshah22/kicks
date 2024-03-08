import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewDrops from './components/NewDrops'
import Categories from './components/Categories'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className='w-full bg-[#232321] text-white'>
      <Navbar />
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </div>
  )
}

export default App