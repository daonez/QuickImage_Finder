import React, { useState } from 'react'
import { searchAllAPI } from 'api'
import styled from 'styled-components'
import quickImageLogo from 'images/quickImage.png'
import { BsSearch } from 'react-icons/bs'
import ImageGrid from 'components/ImageGrid'

export default function NavBar() {
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleImages = async (e) => {
        if (e.key === 'Enter') {
            console.log('enter press here! ')
            const imageResults = await searchAllAPI(e.target.value)
            return setImages(imageResults)
        }
    }
    return (
        <>
            <NavBarContainer>
                <LogoImage src={quickImageLogo} />
                <div>
                    <BsSearch />
                    <SearchBar
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={handleSearch}
                        onKeyPress={handleImages}
                    />
                </div>
            </NavBarContainer>
            <ImageGrid images={images} />
        </>
    )
}

const NavBarContainer = styled.div`
    background: orange;
    display: flex;
    font-size: 30px;
    width: 100%;
`

const LogoImage = styled.img`
    width: 98px;
    margin: 0 32px;
    height: 84px;
`

const SearchBar = styled.input`
    display: flex;
    border-radius: 40px;
    width: 574px;
    height: 40px;
    margin: 20px;
`

const SearchIcon =styled(BsSsearch)