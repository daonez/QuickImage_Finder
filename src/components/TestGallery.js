// import React, { useState } from 'react'
// import styled from 'styled-components'

// const GalleryExample = ({ images }) => {
//     const [isOpen, setIsOpen] = useState(false)
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
//         <>
//             <Gallery photos={photos} />;
//             <Container>
//                 <span open={loadImage} onClose={handleClose}>
//                     {images.map((img) => (
//                         <p key={img.id} onClick={() => handleOpen(img.webformatURL)}>
//                             <ul>
//                                 <li>
//                                     <img src={img.webformatURL} alt="" />
//                                 </li>
//                             </ul>
//                         </p>
//                     ))}
//                 </span>
//             </Container>
//             <button onClick={() => handleOpen}>Open gallery</button>
//             <ReactBnbGallery
//                 show={loadImage}
//                 photos={images}
//                 onClose={() => handleClose}></ReactBnbGallery>
//         </>
//     )
// }

// export default GalleryExample
