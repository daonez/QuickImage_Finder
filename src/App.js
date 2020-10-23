import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from 'components/NavBar'

export default function App() {
    return (
        <div>
            <PageContainer>
                <NavBar />
            </PageContainer>
        </div>
    )
}

const PageContainer = styled.div`
    width: 100%;
`
