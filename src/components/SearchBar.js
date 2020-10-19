import React, { useState } from 'react'
import { handleAPI } from 'api'
import styled from 'styled-components'
import ImageGrid from 'components/ImageGrid'

export default function SearchImages() {
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])

    const oneSearch = async (e) => {
        // const keyword = await handleAPI(e.target.value)
        // setSearch(keyword)
        setSearch(e.target.value)
    }
    const printImages = async (e) => {
        const searchResults = await handleAPI(e.target.value)
        setImages(searchResults)
    }

    return (
        <>
            <SearchBoxContainer>
                {/* <h1>Search Your Images</h1> */}
                <div>
                    <SearchBar type="text" placeholder="search" onChange={oneSearch} />
                    <button onClick={printImages}>Click</button>
                </div>
            </SearchBoxContainer>
            <ImageGrid images={images} />
        </>
    )
}

const SearchBoxContainer = styled.div`
    display: flex;
`

const SearchBar = styled.input`
    display: flex;
`
