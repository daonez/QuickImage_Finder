import React, { useState } from 'react'
import styled from 'styled-components'

const ImageGrid = ({ images }) => {
    return (
        <Container>
            <ImageContainer>
                {images.map((img, id) => {
                    return (
                        <div key={id}>
                            <ul key={id}>
                                <li>
                                    <img src={img} alt="" />
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </ImageContainer>
        </Container>
    )
}

export default ImageGrid

const Container = styled.div`
    display: flex;
`
const ImageContainer = styled.div``
