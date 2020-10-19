import axios from 'axios'

const { REACT_APP_PIXABAY_API_KEY, REACT_APP_UNSPLASH_API_KEY } = process.env
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${REACT_APP_UNSPLASH_API_KEY}`
const PIXABAY_URL = `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}`

export const handleAPI = async () => {
    try {
        const unSplashSearch = await UnsplashSearchAPI()
        const pixabaySearch = await PixabaySearchAPI()
        const getImages = [...unSplashSearch, ...pixabaySearch]
        console.log(getImages)
        return getImages
    } catch (e) {
        console.log(e)
    }
}

export const UnsplashSearchAPI = async (query) => {
    try {
        const res = await axios.get(
            `${UNSPLASH_URL}&query=${query}&per_page=1&page=2&orientation=portrait`
        )
        const { data } = res
        console.log(data)

        const images = data.results
        // console.log(images)

        const getImages = images.map((pics) => {
            return pics.urls.regular
        })
        console.log(getImages)
        return getImages
    } catch (error) {
        console.log(error)
    }
}

export const PixabaySearchAPI = async (query) => {
    try {
        const res = await axios.get(`${PIXABAY_URL}&q=${query}&image_type=photo`)
        const { data } = res
        console.log(data)

        const images = data.hits
        console.log(images)

        const getImages = images.map((pics) => {
            return pics.webformatURL
        })
        // console.log(getImages)
        return getImages
    } catch (err) {
        // Handle Error Here
        console.error(err)
    }
}
