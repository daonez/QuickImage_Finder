import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { searchPageResults } from 'api/index'

export default function Pagination({
    setImages,
    totalPages,
    totalResults,
    setTotalPages,
    setPages,
    pages,
    setTotalResults,
    search,
    setSearch,
    setIsLoading
}) {
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
    )
}

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
