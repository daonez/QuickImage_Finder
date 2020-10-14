import React, { useState } from 'react'
import styled from 'styled-components'

const ImageGrid = ({ images, pics }) => {
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
        <Container>
            <span open={loadImage} onClose={handleClose}>
                {images.map((img) => (
                    <p key={img.id} onClick={() => handleOpen(img.webformatURL)}>
                        <ul>
                            <li>
                                <img src={img.webformatURL} alt="" />
                            </li>
                        </ul>
                    </p>
                ))}
            </span>
        </Container>
    )
}

export default ImageGrid

const Container = styled.div`
    display: flex;
    justify-content: center;
`
