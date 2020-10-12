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
        <div>
            <ul>
                {images.map((img) => (
                    <ul key={img.id}>
                        <li>
                            <img src={img.webwebformatURL} alt="" />
                        </li>
                    </ul>
                ))}
            </ul>

            <form open={loadImage} onClose={handleClose}>
                <button onClick={handleOpen}>
                    <img src={imageSize} alt="" style={{ width: '100%' }} />
                </button>
            </form>
        </div>
    )
}

export default ImageGrid
