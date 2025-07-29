import { useState } from 'react'
import './App.css'
import Random from './component/Random'
import Tag from './component/Tag'



function App() {
  

  return (
    <div className='bg-gradient-to-b from-slate-900 to-slate-600 min-h-screen w-full'>
      <h1 className='bg-slate-900 rounded-xl text-3xl font-bold text-center text-red-300 py-5 w-full mx-auto'>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
