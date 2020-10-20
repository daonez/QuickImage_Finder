import React, { useState, useEffect } from 'react'
import { PixabaySearchAPI, UnsplashSearchAPI } from 'api'
import styled from 'styled-components'
// import ImageGrid from 'components/ImageGrid'

export default function SearchImages() {
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])

    // useEffect(
    //     (search) => {
    //         const handleImages = async (e) => {
    //             const Images = await PixabaySearchAPI(e)
    //             setImages(Images)
    //         }
    //         handleImages()
    //     },
    //     [search]
    // )

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
        // console.log(PixabaySearchAPI(e.target.value))
        console.log(UnsplashSearchAPI(e.target.value))
    }

    const handleImage = (e) => {
        setImages(e.target.value)
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
            {/* <ImageGrid images={images} /> */}
        </>
    )
}

const SearchBoxContainer = styled.div`
    display: flex;
`

const SearchBar = styled.input`
    display: flex;
`
