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
            setTotalResults(imageResults.numOfResults)
            setPages(nextPage)
            setImages(imageResults.images)
        } else if (e.target.name === 'prev') {
            const prevPage = pages - 1
            const imageResults = await searchPageResults(search, prevPage)
            setTotalResults(imageResults.numOfResults)
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
                    <SearchButton type="button" value={search} onClick={handleClick}>
                        <SearchIcon />
                    </SearchButton>

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
                        <ArrowButton type="button" name="prev" onClick={handlePages} value={pages}>
                            <LeftIcon />
                        </ArrowButton>
                    )}
                    <Pages value={pages}>
                        Pages {pages}/ {totalPages}
                    </Pages>
                    <ArrowButton type="button" name="next" onClick={handlePages} value={pages}>
                        <RightIcon />
                    </ArrowButton>
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
    background: #eeeeee;
    height: 33px;
    width: 25px;
`

const Input = styled.input`
    display: flex;
    border-radius: 40px;
    width: 574px;
    height: 40px;
    margin: 20px;
    background: #eeeeee;
    text-indent: 50px;
    &:focus {
        outline: 0;
    }
`
const SearchButton = styled.button`
    border: none;
    position: relative;
    left: 69px;
    background: #eeeeee;
    height: 0px;
    top: 27px;
    &:focus {
        outline: 0;
    }
`

const ResultsContainer = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #f6f6f6;
`

const Results = styled.h2`
    background-color: #f6f6f6;
`

const ButtonContainer = styled.div`
    display: flex;
    background-color: #f6f6f6;
`

const ArrowButton = styled.button`
    color: black;
    border-radius: 22px;
    width: 51px;
    border: none;
    padding: 0;
    background: #f6f6f6;
    &:focus {
        outline: 0;
    }
`
const LeftIcon = styled(MdKeyboardArrowLeft)`
    pointer-events: none;
    font-size: 29px;
    height: 33px;
    border: none;
    border-radius: 29px;
`
const RightIcon = styled(MdKeyboardArrowRight)`
    pointer-events: none;
    font-size: 29px;
    height: 33px;
    border: none;
    border-radius: 29px;
`
const Pages = styled.p`
    padding: 9px;
    background-color: #f6f6f6;
    font-size: 17px;
    font-weight: bold;
`
