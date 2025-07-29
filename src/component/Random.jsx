import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import useGif from '../Hooks/useGif'

const Random = () => {
   const { Gif, loading, fetchData } = useGif('')

return (
    <div className='flex flex-col items-center justify-center  bg-green-400 gap-4 w-[50%] mx-auto rounded-xl h-[5%] px-20 py-4'>
      <h1 className='text-3xl font-bold text-white'>Random Gifs</h1>
      {
      loading ? (<Spinner /> ):(<img src={Gif} alt="image" height={100} width={500} />)
      }
      <button onClick={() => fetchData()} className='px-4 bg-yellow-400 border-amber-50 rounded-2xl text-2xl py-2 focus:border-b-blue-600 cursor-pointer w-full'>Generate</button>
    </div>
  )
}

export default Random
