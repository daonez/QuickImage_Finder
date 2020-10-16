const { REACT_APP_UNSPLASH_API_KEY } = process.env

export const UNSPLASH_API = REACT_APP_UNSPLASH_API_KEY
export const UNSPLASH_DEFAULT_URL = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API}`
