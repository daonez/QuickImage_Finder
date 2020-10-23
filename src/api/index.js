import axios from 'axios'

const { REACT_APP_PIXABAY_API_KEY, REACT_APP_UNSPLASH_API_KEY } = process.env

const PIXABAY_URL = `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}`
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${REACT_APP_UNSPLASH_API_KEY}`

export const searchAll = async (query) => {
    try {
        const unsplashResults = await searchUnsplash(query)
        const pixabayResults = await searchPixabay(query)
        return [...pixabayResults, ...unsplashResults]
    } catch (error) {
        console.log(error)
    }
}
export const searchUnsplash = async (query) => {
    try {
        const res = await axios.get(`${UNSPLASH_URL}&query=${query}&per_page=5&page=1`)
        const { data } = res
        console.log(data)

        const { results } = data

        // console.log(results)
        const unsplashResults = results.map((pics) => {
            return pics.urls.regular
        })

        // console.log(getImages)
        return unsplashResults
    } catch (error) {
        console.log(error)
    }
}

export const searchPixabay = async (query) => {
    try {
        const res = await axios.get(`${PIXABAY_URL}&q=${query}&image_type=photo`)
        const { data } = res
        console.log(data)

        const { hits } = data

        // console.log(images)

        const pixabayResults = hits.map((pics) => {
            return pics.webformatURL
        })
        // console.log(getImages)
        return pixabayResults
    } catch (err) {
        // Handle Error Here
        console.error(err)
    }
}
