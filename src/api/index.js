import axios from 'axios'

const { REACT_APP_PIXABAY_API_KEY, REACT_APP_UNSPLASH_API_KEY } = process.env

const PIXABAY_URL = `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}`
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${REACT_APP_UNSPLASH_API_KEY}`

export const searchAll = async (query) => {
    try {
        const unsplashResults = await searchUnsplash(query)
        const pixabayResults = await searchPixabay(query)
        const imageResults = [...pixabayResults, ...unsplashResults]
        // console.log(imageResults)
        return imageResults
    } catch (error) {
        console.log(error)
    }
}
export const searchUnsplash = async (query) => {
    try {
        const res = await axios.get(`${UNSPLASH_URL}&query=${query}&per_page=5&page=1`)
        const { data } = res
        // console.log(data)

        const { results } = data

        // console.log(results)
        const unsplashResults = results.map((pics) => {
            const showImages = {
                imageLinks: pics.links.html,
                imageUrls: pics.urls.regular
            }

            return showImages
        })

        // console.log(unsplashResults)
        return unsplashResults
    } catch (error) {
        console.log(error)
    }
}

export const searchPixabay = async (query) => {
    try {
        const res = await axios.get(`${PIXABAY_URL}&q=${query}&image_type=photo`)
        const { data } = res
        // console.log(data)

        const { hits } = data

        // console.log(hits)

        const pixabayResults = hits.map((pics) => {
            const showImages = {
                imageLinks: pics.pageURL,
                imageUrls: pics.webformatURL
            }

            return showImages
        })

        // console.log(pixabayResults)
        return pixabayResults
    } catch (err) {
        // Handle Error Here
        console.error(err)
    }
}
