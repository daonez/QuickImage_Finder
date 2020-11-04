import React, { useState } from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/logo.png'
import { searchAll, searchPageResults } from 'api'
import { ReactComponent as leftBtn } from 'svg/left_btn.svg'
import { ReactComponent as right_btn } from 'svg/right_btn.svg'
import { ReactComponent as search } from 'svg/search.svg'

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
                        <Button type="button" value={search} onClick={handleClick}>
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
            <ResultsContainer>
                <TotalResults value={totalResults}>Results: {totalResults}</TotalResults>
                <ButtonContainer>
                    {pages > 1 && (
                        <LeftIcon type="button" name="prev" onClick={handlePages} value={pages}>
                            {/* <button type="button" name="prev" onClick={handlePages} value={pages}>
                        </button> */}
                        </LeftIcon>
                    )}
                    <Pages value={pages}>
                        Pages {pages}/ {totalPages}
                    </Pages>
                    <button type="button" name="next" onClick={handlePages} value={pages}>
                        next
                    </button>
                </ButtonContainer>
            </ResultsContainer>
            <div>
                <div>
                    <LeftIcon />
                </div>
                <ButtonImage />
            </div>
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

const ButtonImage = styled.div`
    height: 100px;
    width: 100%;
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

const TotalResults = styled.h2`
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

const LeftIcon = styled(leftBtn)`
    width: 100%;
    height: 100px;
    color: blue;
`
