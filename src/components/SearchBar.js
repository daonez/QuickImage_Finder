import React, { useState } from 'react'
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
            const ImageResults = await getPixabayAPI.concat(getUnsplashAPI)

            const getImages = ImageResults.map((img) => {
                return img
            })

            setImages(getImages)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleImages = async (e) => {
        if (e.key === 'Enter') {
            console.log('enter press here! ')
            const printImages = await CombineAPI(e.target.value)
            return printImages
        }
    }
    // const handleImages = (e) => {
    //     setImages(e.target.value)
    // }

    return (
        <>
            <SearchBoxContainer>
                {/* <h1>Search Your Images</h1> */}
                <div>
                    <SearchBar
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={handleSearch}
                        onKeyPress={handleImages}
                    />
                    {/* <button onClick={handleImages}>Click</button> */}
                    <ImageGrid images={images} />
                </div>
            </SearchBoxContainer>
        </>
    )
}

const SearchBoxContainer = styled.div`
    display: flex;
`

const SearchBar = styled.input`
    display: flex;
`
