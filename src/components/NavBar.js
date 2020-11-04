import React, { useState } from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/logo.png'
import { searchAll, searchPageResults } from 'api'
import { MdSearch, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

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
        const totalPageRoundUp = Math.ceil(imageResults.numOfResults / 25)
        setTotalPages(totalPageRoundUp)
        setTotalResults(imageResults.numOfResults)
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
                        <Button type="button" value={search} onClick={handleClick}>
                            <SearchIcon />
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
            <ResultsContainer>
                <Results value={totalResults}>Results: {totalResults}</Results>
                <ButtonContainer>
                    {pages > 1 && (
                        <button type="button" name="prev" onClick={handlePages} value={pages}>
                            <LeftIcon />
                        </button>
                    )}
                    <Pages value={pages}>
                        Pages {pages}/ {totalPages}
                    </Pages>
                    <button type="button" name="next" onClick={handlePages} value={pages}>
                        <RightIcon />
                    </button>
                </ButtonContainer>
            </ResultsContainer>
        </>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    font-size: 30px;
    width: 100%;
`
const SearchBarContainer = styled.div`
    display: flex;
`

const LogoImage = styled.img`
    height: 84px;
`

const SearchIcon = styled(MdSearch)`
    pointer-events: none;
`

const Input = styled.input`
    display: flex;
    border-radius: 40px;
    width: 574px;
    height: 40px;
    margin: 20px;
    background: #eeeeee;
`
const Button = styled.button`
    padding: 2px 5px;
    border-radius: 3px;
`

const ResultsContainer = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #f6f6f6;
`
const LeftIcon = styled(MdKeyboardArrowLeft)`
    pointer-events: none;
`
const RightIcon = styled(MdKeyboardArrowRight)`
    pointer-events: none;
`
const Results = styled.h2`
    background-color: #f6f6f6;
`

const ButtonContainer = styled.div`
    display: flex;
    background-color: #f6f6f6;
`

const Pages = styled.p`
    padding: 9px;
    background-color: #f6f6f6;
    font-size: 17px;
    font-weight: bold;
`
