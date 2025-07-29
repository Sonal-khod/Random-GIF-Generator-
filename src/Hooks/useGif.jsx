import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useGif = (tag) => {
    const [Gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
    
    const apiKey = import.meta.env.VITE_API_KEY;
    async function fetchData(tag) {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=g`
        const { data } = await axios.get(url)
        const image = data.data.images.downsized_large.url
        setGif(image)
        setLoading(false)
    }
    useEffect(() => {
        fetchData(tag)
    }, [tag])
    return { Gif, loading, fetchData }
}

export default useGif
