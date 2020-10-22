// // import React, { useState } from 'react'

// // import styled from 'styled-components'
// // import ImageGrid from 'components/ImageGrid'

// // export default function SearchImages() {
//     const [search, setSearch] = useState('')
//      const [images, setImages] = useState([])

//     const handleSearch = (e) => {
//       setSearch(e.target.value)
//      }
//     const handleImages = async (e) => {
//      if (e.key === 'Enter') {
//        console.log('enter press here! ')
//      const imageResults = await searchAllAPI(e.target.value)
//      return setImages(imageResults)
//     //     }
//     // }
// //     // const handleImages = (e) => {
// //     //     setImages(e.target.value)
// //     // }
// //     console.log(images)
//     return (
//         <>
//             <>
//                 <SearchBar
//                     type="text"
//                     placeholder="search"
//                     value={search}
//                     onChange={handleSearch}
//                     onKeyPress={handleImages}
//                 />
//                 <h1>Search Your Images</h1>
//                 {/* <button onClick={handleImages}>Click</button> */}

//             </>
//         </>
//     )
// }

// const SearchBoxContainer = styled.div`
//      display: flex;
// `

// const SearchBar = styled.input`
//  display: flex;
//  border-radius: 40px;
//  width: 388px;
// height: 33px;
//  `
