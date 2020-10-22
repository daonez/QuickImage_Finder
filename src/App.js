import React from 'react'
import Main from 'components/Main'
import styled from 'styled-components'

const App = () => {
    return (
        <PageContainer>
            <Main />
        </PageContainer>
    )
}

export default App

const PageContainer = styled.div`
    width: 100%;
`
