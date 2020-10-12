const { REACT_APP_PIXABAY_API_KEY } = process.env;
const PIXABAY_API_KEY = REACT_APP_PIXABAY_API_KEY;
export const PIXABAY_DEFAULT_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`;

// const PIXABAY_API =axios.get(`${PIXABAY_DEFAULT_URL}&q=${search}&image_type=photo&per_page=${amount}`)

// export const imageSearch = async () => {
//     try {
//         const resp = await axios.get(`${PIXABAY_DEFAULT_URL}&q=yellow+flowers&image_type=photo`);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
