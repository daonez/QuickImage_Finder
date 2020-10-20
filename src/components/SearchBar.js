import React, { useState, useEffect } from 'react'
import { UnsplashSearchAPI, PixabaySearchAPI } from 'api'
import styled from 'styled-components'
import ImageGrid from 'components/ImageGrid'

export default function SearchImages() {
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])

    const CombineAPI = async (query) => {
        try {
            const getUnsplashAPI = await UnsplashSearchAPI(query)
            const getPixabayAPI = await PixabaySearchAPI(query)
            const CombineResults = getUnsplashAPI.concat(getPixabayAPI)
            // const CombineAPIS = [...getPixabayAPI]
            // console.log(CombineAPIS)
            setImages(CombineResults)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
        // console.log(PixabaySearchAPI(e.target.value))
        // console.log(UnsplashSearchAPI(e.target.value))
        console.log(CombineAPI(e.target.value))
    }

    const handleImage = (e) => {
        CombineAPI(e.target.value)
    }

    console.log(images)
    return (
        <>
            <SearchBoxContainer>
                {/* <h1>Search Your Images</h1> */}
                <div>
                    <SearchBar type="text" placeholder="search" onChange={handleSearch} />
                    <button onClick={handleImage}>Click</button>
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
