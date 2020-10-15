// import React, { useState } from 'react'
// import styled from 'styled-components'
// import ReactLogo from 'svg/pixabaylogo.svg'
// import Bg_Image from 'images/mountains_bg.webp'
// import axios from 'axios'
// import { PIXABAY_DEFAULT_URL } from 'api/PixabayApi'
// import ImageGrid from 'components/ImageGrid'

// export default function PixabaySearch() {
//     const [search, setSearch] = useState('')
//     const [amount, setAmount] = useState(10)
//     const [images, setImages] = useState([])

//     const imageSearch = async () => {
//         try {
//             const resp = await axios.get(`${PIXABAY_DEFAULT_URL}&q=${search}&image_type=photo`)
//             const result = resp.data.hits
//             setImages(result)
//             console.log(result)
//         } catch (err) {
//             // Handle Error Here
//             console.error(err)
//         }
//     }
//     const handleChange = (e) => {
//         setSearch(e.target.value)
//         imageSearch()
//     }
//     const handleAmount = (e) => {
//         setAmount(e.target.value)
//     }
//     return (
//         <>
//             <SearchContainer>
//                 <BackgroundImage>
//                     <div>
//                         <Logo src={ReactLogo} />
//                         <div>
//                             <input type="text" placeholder="hello" onChange={handleChange} />
//                             <select value={amount} onChange={handleAmount}>
//                                 <option value="1">1</option>
//                             </select>
//                         </div>
//                     </div>
//                 </BackgroundImage>
//             </SearchContainer>

//             <ImageGrid images={images} />
//         </>
//     )
// }

// const SearchContainer = styled.div`
//     display: flex;
//     justify-content: center;
// `

// const BackgroundImage = styled.div`
//     border: 1px solid #000;
//     background-image: url(${Bg_Image});
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 100%;
//     height: 500px;
// `

// const Logo = styled.img`
//     width: 100%;
//     height: 100%;
//     margin: auto;
// `
