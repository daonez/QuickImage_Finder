import React, { useState } from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/quickImage.png'
import { BsSearch } from 'react-icons/bs'
import { searchAll } from 'api'
import ImageGrid from 'components/ImageGrid'

export default function NavBar() {
    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])

    const handleText = (e) => {
        setSearch(e.target.value)
    }

    const handleImages = async (e) => {
        if (e.key === 'Enter') {
            console.log('enter press here! ')
            const imageResults = await searchAll(e.target.value)
            return setImages(imageResults)
        }
    }

    return (
        <>
            <NavBarContainer>
                <LogoImage src={quickImageLogo} />
                <div>
                    <SearchBarContainer>
                        <SearchIcon />
                        <Input
                            value={search}
                            placeholder="search"
                            onChange={handleText}
                            onKeyPress={handleImages}
                        />
                    </SearchBarContainer>
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
const SearchBarContainer = styled.div`
    display: flex;
`

const LogoImage = styled.img`
    width: 98px;
    margin: 0 32px;
    height: 84px;
`

const SearchIcon = styled(BsSearch)``

const Input = styled.input`
    display: flex;
    border-radius: 40px;
    width: 574px;
    height: 40px;
    margin: 20px;
`
