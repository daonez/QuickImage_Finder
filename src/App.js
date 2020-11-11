import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from 'components/NavBar'
import ImageGrid from 'components/ImageGrid'
import Pagination from 'components/Pagination'

export default function App() {
    const [images, setImages] = useState([])
    const [pages, setPages] = useState(1)
    const [totalPages, setTotalPages] = useState('')
    const [totalResults, setTotalResults] = useState('')
    const [search, setSearch] = useState('cat')
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div>
            <PageContainer>
                <NavBar
                    search={search}
                    setSearch={setSearch}
                    setImages={setImages}
                    setTotalResults={setTotalResults}
                    setTotalPages={setTotalPages}
                    setPages={setPages}
                    setIsLoading={setIsLoading}></NavBar>
                <Pagination
                    pages={pages}
                    setTotalResults={setTotalResults}
                    setPages={setPages}
                    totalPages={totalPages}
                    totalResults={totalResults}
                    setImages={setImages}
                    search={search}
                    setIsLoading={setIsLoading}
                />
                <ImageGrid
                    images={images}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    search={search}
                    setImages={setImages}
                    setTotalResults={setTotalResults}
                    setPages={setPages}
                    pages={pages}
                    totalPages={totalPages}
                    totalResults={totalResults}
                />
                <Pagination
                    pages={pages}
                    setTotalResults={setTotalResults}
                    setPages={setPages}
                    totalPages={totalPages}
                    totalResults={totalResults}
                    setImages={setImages}
                    search={search}
                    setIsLoading={setIsLoading}
                />
            </PageContainer>
        </div>
    )
}

const PageContainer = styled.div`
    width: 100%;
`
