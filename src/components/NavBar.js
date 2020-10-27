import React, { useState } from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/quickImage.png'
import { searchAll } from 'api'

export default function NavBar({ setImages }) {
    const [search, setSearch] = useState('')
    const [pages, setPages] = useState(1)

    const handleText = (e) => {
        if (e.target.name === 'search') {
            setSearch(e.target.value)
        }
    }

    const handleImages = async (e) => {
        if (e.key === 'Enter') {
            console.log('enter press here! ')
            const imageResults = await searchAll(e.target.value)
            return setImages(imageResults)
        }
    }

    const handlePages = async (e) => {
        if (e.target.name === 'next') {
            return setPages(pages + 1)
        } else if (e.target.name === 'prev' && pages > 1) {
            return setPages(pages - 1)
        } else {
            return setPages(pages)
        }
    }

    return (
        <>
            <NavBarContainer>
                <LogoImage src={quickImageLogo} />

                <SearchBarContainer>
                    <button onChange={handleText} onClick={handleImages}>
                        click
                    </button>
                    <Input
                        value={search}
                        placeholder="search"
                        onChange={handleText}
                        onKeyPress={handleImages}
                    />
                </SearchBarContainer>
            </NavBarContainer>
            <p value={pages}>pages {pages}</p>
            <button type="button" name="next" onClick={handlePages}>
                next
            </button>
            <button type="button" name="prev" onClick={handlePages}>
                prev
            </button>
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

const Input = styled.input`
    display: flex;
    border-radius: 40px;
    width: 574px;
    height: 40px;
    margin: 20px;
`
