import axios from 'axios'

const { REACT_APP_PIXABAY_API_KEY, REACT_APP_UNSPLASH_API_KEY } = process.env

const PIXABAY_URL = `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}`
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${REACT_APP_UNSPLASH_API_KEY}`

export const searchAll = async (query, page = 1) => {
    try {
        const unsplashResults = await searchUnsplash(query, page)
        const pixabayResults = await searchPixabay(query, page)
        const imageResults = [...pixabayResults, ...unsplashResults]
        console.log(imageResults)
        return imageResults
    } catch (error) {
        console.log(error)
        return []
    }
}

export const searchUnsplash = async (query, pages = 1) => {
    try {
        const res = await axios.get(`${UNSPLASH_URL}&query=${query}&per_page=5&page=${pages}`)
        const { data } = res
        // console.log(data)

        const { results } = data

        const unsplashResults = results.map((pics) => {
            const showImages = {
                imageLinks: pics.links.html,
                imageUrls: pics.urls.regular
            }

            return showImages
        })
        console.log(unsplashResults)
        return unsplashResults

        // console.log(results)

        // console.log(unsplashResults)
    } catch (error) {
        console.log(error)
        return []
    }
}

export const searchPixabay = async (query, pages = 1) => {
    try {
        const res = await axios.get(`${PIXABAY_URL}&q=${query}&image_type=photo&page=${pages}`)
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
        console.log(pixabayResults)
        return pixabayResults
    } catch (err) {
        // Handle Error Here
        console.error(err)
        return []
    }
}
