import React, { useState } from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/quickImage.png'
import { searchAll, searchPageResults } from 'api'
// import { BsSearch } from 'react-icons/bs'

export default function NavBar({ setImages }) {
    const [search, setSearch] = useState('')
    const [pages, setPages] = useState(1)
    const [totalPages, setTotalPages] = useState('')
    const [totalResults, setTotalResults] = useState('')

    const handleText = (e) => {
        setSearch(e.target.value)
    }

    const handleImages = async (e) => {
        try {
            if (e.key === 'Enter') {
                console.log('enter press here! ')
                const imageResults = await searchAll(e.target.value)
                setSearch(search)
                setPages(1)
                const totalPageRoundUp = Math.ceil(imageResults.numOfResults / 25)
                setTotalPages(totalPageRoundUp)
                setTotalResults(imageResults.numOfResults)
                return setImages(imageResults.images)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async (e) => {
        setSearch(search)
        setPages(1)
        const imageResults = await searchAll(e.target.value)
        return setImages(imageResults.images)
    }

    const handlePages = async (e) => {
        if (e.target.name === 'next') {
            const nextPage = pages + 1
            const imageResults = await searchPageResults(search, nextPage)
            setPages(nextPage)
            setImages(imageResults.images)
        } else if (e.target.name === 'prev') {
            const prevPage = pages - 1
            const imageResults = await searchPageResults(search, prevPage)
            setPages(prevPage)
            setImages(imageResults.images)
        } else {
            setPages(1)
        }
    }

    return (
        <>
            <NavBarContainer>
                <LogoImage src={quickImageLogo} />

                <SearchBarContainer>
                    {search.length > 1 && (
                        <Button value={search} onClick={handleClick}>
                            Click
                        </Button>
                    )}
                    <Input
                        value={search}
                        placeholder="search"
                        onKeyPress={handleImages}
                        onChange={handleText}
                    />
                </SearchBarContainer>
            </NavBarContainer>
            {pages > 1 && (
                <button type="button" name="prev" onClick={handlePages} value={pages}>
                    prev
                </button>
            )}
            <p value={pages}>
                pages {pages}/ {totalPages}
            </p>
            <h2 value={totalResults}>Results: {totalResults}</h2>

            <button type="button" name="next" onClick={handlePages} value={pages}>
                next
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
const Button = styled.button`
    padding: 2px 5px;
    border-radius: 3px;
`
