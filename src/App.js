import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from 'components/NavBar'
import ImageGrid from 'components/ImageGrid'

export default function App() {
    const [images, setImages] = useState([])

    return (
        <div>
            <PageContainer>
                <NavBar setImages={setImages}></NavBar>
            </PageContainer>
            <ImageGrid images={images} />
        </div>
    )
}

const PageContainer = styled.div`
    width: 100%;
`
