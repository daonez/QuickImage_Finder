// import React, { useState } from 'react'
// import styled from 'styled-components'

// const ImageGrid = ({ images }) => {
//     const [loadImage, setLoadImage] = useState(false)
//     const [imageSize, setImageSize] = useState('')

//     const handleOpen = (img) => {
//         setLoadImage(true)
//         setImageSize(img)
//     }

//     const handleClose = () => {
//         setLoadImage(false)
//     }

//     return (
//         <Container>
//             <span open={loadImage} onClose={handleClose}>
//                 {images.map((img) => (
//                     <ul key={img.id} onClick={() => handleOpen(img.webformatURL)}>
//                         <li>
//                             <img src={img.webformatURL} alt="" />
//                         </li>
//                     </ul>
//                 ))}
//             </span>
//         </Container>
//     )
// }

// export default ImageGrid

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
// `
