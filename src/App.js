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
    const [search, setSearch] = useState('')
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
                    pages={pages}
                    totalPages={totalPages}
                    totalResults={totalResults}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}></NavBar>
                <ImageGrid
                    images={images}
                    isLoading={isLoading}
                    setIsLoading={isLoading}
                    search={search}
                    setSearch={setSearch}
                    setImages={setImages}
                    setTotalResults={setTotalResults}
                    setTotalPages={setTotalPages}
                    setPages={setPages}
                    pages={pages}
                    totalPages={totalPages}
                    totalResults={totalResults}
                />
                {isLoading && (
                    <Pagination
                        pages={pages}
                        setTotalResults={setTotalResults}
                        setTotalPages={setTotalPages}
                        setPages={setPages}
                        totalPages={totalPages}
                        totalResults={totalResults}
                        setImages={setImages}
                        search={search}
                        setSearch={setSearch}
                    />
                )}
            </PageContainer>
        </div>
    )
}

const PageContainer = styled.div`
    width: 100%;
`
