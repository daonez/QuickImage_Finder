import React, { useState } from 'react'
import styled from 'styled-components'

const ImageGrid = ({ images }) => {
    return (
        <Container>
            <div>
                <ImageContainer>
                    {images.map((img, id) => {
                        return (
                            <ImageBox key={id}>
                                <Images src={img} alt="" />
                            </ImageBox>
                        )
                    })}
                </ImageContainer>
            </div>
        </Container>
    )
}

export default ImageGrid

const Container = styled.div`
    width: 100%;
    background: #e9eaec;
`

const ImageContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 37px;
    justify-content: center;
`

const ImageBox = styled.li`
    width: 30%;
    margin: -5px 5px 16px;
    padding: 0;
`
const Images = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 100%;

    height: 100%;
`
