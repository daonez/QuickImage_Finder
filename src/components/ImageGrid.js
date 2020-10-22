import React, { useState } from 'react'
import styled from 'styled-components'

const ImageGrid = ({ images }) => {
    return (
        <div>
            <div>
                <ul>
                    {images.map((img, id) => {
                        return (
                            <li key={id}>
                                <img src={img} alt="" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ImageGrid

const Container = styled.div``
const ImageContainer = styled.div``
