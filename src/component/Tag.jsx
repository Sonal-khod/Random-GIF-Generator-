  import Spinner from './Spinner'
import React, { useState, useEffect } from 'react'
import useGif from '../Hooks/UseGif'

const Tag = () => {
   const { Gif, loading, fetchData } = useGif('')
   const [tag, setTag] = useState('')


return (
    <div className='flex flex-col items-center justify-center  bg-gradient-to-b from-blue-400 to-blue-600 gap-4 w-[50%] mx-auto rounded-xl h-[5%] px-20 py-4 my-10'>
      <h1 className='text-3xl font-bold text-white'>{tag} Gifs</h1>
      {
      loading ? (<Spinner /> ):(<img src={Gif} alt="image" height={100} width={500} />)
      }
      <input type="text"  
      onChange={(e) => setTag(e.target.value)}
      value={tag}
      className='px-4 bg-white rounded-2xl  text-center text-xl py-2   w-full'/>
      <button onClick={() => fetchData(tag)} className='px-4 bg-yellow-400 border-amber-50 rounded-2xl text-2xl py-2 focus:border-b-blue-600 cursor-pointer w-full'>Generate</button>
    </div>
  )
}
export default Tag
