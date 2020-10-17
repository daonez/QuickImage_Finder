import axios from 'axios'
const { REACT_APP_PIXABAY_API_KEY } = process.env
const PIXABAY_API_KEY = REACT_APP_PIXABAY_API_KEY
const PIXABAY_DEFAULT_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`
