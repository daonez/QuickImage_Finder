import React, { useState } from 'react'
import axios from 'axios'
import ImageGrid from 'components/ImageGrid'
const { REACT_APP_PIXABAY_API_KEY, REACT_APP_UNSPLASH_API_KEY } = process.env
const PIXABAY_API_KEY = REACT_APP_PIXABAY_API_KEY
const UNSPLASH_API = REACT_APP_UNSPLASH_API_KEY

export default function SearchImages() {
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])


    //break function into two? function 1 axios.all, function2 set the images to state??
    
    const UNSPLASH_DEFAULT_URL = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API}&query=${search}&per_page=1&page=2&orientation=portrait`
    const PIXABAY_DEFAULT_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${search}&image_type=photo`

    const requestOne = axios.get(UNSPLASH_DEFAULT_URL)
    const requestTwo = axios.get(PIXABAY_DEFAULT_URL)

    const ImagesAPI = async () => {
        try {
            const res = await axios.all([requestOne, requestTwo])
            const result = res.map((responses) => {
                return responses.data
            })
            const responseOne = result[0]
            const responseTwo = result[1]

            const unSplasResults = responseOne.results
            const pixabayResults = responseTwo.hits
            // console.log(responseOne.results)
            // console.log(responseTwo.hits)

            const getUnSplashImages = unSplasResults.map((pics) => {
                return pics.urls.regular
            })
            const getPixabayImages = pixabayResults.map((pics) => {
                return pics.webformatURL
            })
            const getImages = [...getUnSplashImages, ...getPixabayImages]
            console.log(getImages)
            setImages(getImages)
        } catch (e) {
            // react on errors.
            console.error(e)
        }
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
        //     imageSearch()
    }

    const handleImages = (e) => {
        ImagesAPI(e.target.value)
    }
    console.log(images)

    return (
        <div>
            <input type="text" placeholder="search" onChange={handleSearch} />
            <button onClick={handleImages}>Click me </button>
            <ImageGrid images={images} />
        </div>
    )
}
