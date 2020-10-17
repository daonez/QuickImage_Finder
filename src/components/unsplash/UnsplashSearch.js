// import React, { useState } from 'react'
// // import { UNSPLASH_DEFAULT_URL } from 'api'
// import axios from 'axios'
// import ImageGrid from 'components/ImageGrid'

// export default function UnsplashSearch() {
//     const [search, setSearch] = useState('')
//     const [images, setImages] = useState([])

//     // const SearchUnSplash = async () => {
//     //     try {
//     //         const res = await axios.get(
//     //             `${UNSPLASH_DEFAULT_URL}&query=${search}&per_page=30&page=2&orientation=portrait`
//     //         )
//     //         const { data } = res
//     //         console.log(data)
//     //         const { results } = data
//     //         const getImages = results.map((pics) => {
//     //             return pics.urls.regular
//     //         })
//     //         console.log(getImages)
//     //         setImages(getImages)
//     //     } catch (error) {}
//     // }

//     const handleSearch = (e) => {
//         setSearch(e.target.value)
//         console.log(e.target.value)
//     }

//     // const printImage = (e) => {
//     //     SearchUnSplash(e.target.value)
//     // }

//     console.log(images)
//     return (
//         <div>
//             <input type="text" onChange={handleSearch} />
//             {/* <button onClick={printImage}>test</button> */}
//             <ImageGrid images={images} />
//         </div>
//     )
// }
