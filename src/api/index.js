const { REACT_APP_PIXABAY_API_KEY, REACT_APP_UNSPLASH_API_KEY } = process.env
const PIXABAY_API_KEY = REACT_APP_PIXABAY_API_KEY

export const UNSPLASH_API = REACT_APP_UNSPLASH_API_KEY

export const PIXABAY_DEFAULT_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`
export const UNSPLASH_DEFAULT_URL = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API}`
