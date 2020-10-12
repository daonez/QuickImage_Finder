import React, { useState } from 'react'

const ImageGrid = ({ images }) => {
    const [loadImage, setLoadImage] = useState(false)
    const [imageSize, setImageSize] = useState('')

    const handleOpen = (img) => {
        setLoadImage(true)
        setImageSize(img)
    }

    const handleClose = () => {
        setLoadImage(false)
    }

    return (
        <button open={loadImage} onClose={handleClose}>
            {images.map((img) => (
                <p key={img.id} onClick={() => handleOpen(img.webformatURL)}>
                    <ul>
                        <li>
                            <img src={img.webformatURL} alt="" />
                        </li>
                    </ul>
                </p>
            ))}

            <button onClick={handleOpen}>
                <img src={imageSize} alt="" style={{ width: '100%' }} />
            </button>
        </button>
    )
}

export default ImageGrid
