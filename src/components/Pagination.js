import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { searchPageResults } from 'api/index'

export default function Pagination({
    setImages,
    totalPages,
    totalResults,
    setPages,
    pages,
    setTotalResults,
    search,
    setIsLoading
}) {
    const handlePages = async (e) => {
        if (e.target.name === 'next') {
            setIsLoading(true)
            const nextPage = pages + 1
            const imageResults = await searchPageResults(search, nextPage)
            setTotalResults(imageResults.numOfResults)
            setPages(nextPage)
            setIsLoading(false)
            setImages(imageResults.images)
        } else if (e.target.name === 'prev') {
            setIsLoading(true)
            const prevPage = pages - 1
            const imageResults = await searchPageResults(search, prevPage)
            setTotalResults(imageResults.numOfResults)
            setPages(prevPage)
            setImages(imageResults.images)
            setIsLoading(false)
        } else {
            setPages(1)
        }
    }
    return (
        <ResultsContainer>
            <Results>
                Found <ResultsText>{totalResults} </ResultsText> Results of
                <ResultsText>'{search}'</ResultsText>
            </Results>
            <ButtonContainer>
                {pages > 1 && (
                    <ArrowButton type="button" name="prev" onClick={handlePages} value={pages}>
                        <LeftIcon />
                    </ArrowButton>
                )}
                <Pages>
                    Pages:
                    <PageText>
                        {pages}/ {totalPages}
                    </PageText>
                </Pages>
                <ArrowButton type="button" name="next" onClick={handlePages} value={pages}>
                    <RightIcon />
                </ArrowButton>
            </ButtonContainer>
        </ResultsContainer>
    )
}

const ResultsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f6f6f6;
    margin: 15px auto;
`

const Results = styled.h3`
    background-color: #f6f6f6;
    padding: 10px 6px;
    margin: 0 none;
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    @media only screen and (max-width: 500px) {
        background-color: #f6f6f6;
        padding: 35px 9px;
        margin: 0;
        font-weight: 400;
        font-size: 14px;
    }
`

const ResultsText = styled.span`
    background-color: #f6f6f6;
    padding: 0px 6px;
    font-weight: 700;
`

const ButtonContainer = styled.div`
    display: flex;
    background-color: #f6f6f6;
    @media only screen and (max-width: 500px) {
        background-color: #f6f6f6;
        text-align: center;
        font-weight: 400;
        font-size: 12px;
    }
`
const Pages = styled.p`
    padding: 35px 9px;
    background-color: #f6f6f6;
    font-size: 17px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 500px) {
        background-color: #f6f6f6;
        text-align: center;
        font-weight: 400;
        font-size: 11px;
        margin: auto;
    }
`

const PageText = styled.span`
    background-color: #f6f6f6;
    font-weight: 700;
`

const ArrowButton = styled.button`
    color: black;
    border-radius: 47px;
    width: 41px;
    height: 32px;
    border: none;
    padding: 0;
    background: #f6f6f6;
    margin: auto;
    &:focus {
        outline: 0;
    }
    &:hover {
        cursor: pointer;
        background: white;
        border: 1px solid;
        transform: scale(1.08);
        transition: ease;
    }
    @media only screen and (max-width: 500px) {
        background-color: #f6f6f6;
        text-align: center;
        font-weight: 400;
        font-size: 12px;
    }
`
const LeftIcon = styled(MdKeyboardArrowLeft)`
    pointer-events: none;
    font-size: 29px;
    height: 30px;
    border: none;
    border-radius: 29px;
    background: white;
    @media only screen and (max-width: 500px) {
        background: white;
        text-align: center;
        font-weight: 400;
        font-size: 22px;
    }
`
const RightIcon = styled(MdKeyboardArrowRight)`
    pointer-events: none;
    font-size: 29px;
    height: 30px;
    border: none;
    border-radius: 29px;
    background: white;
    @media only screen and (max-width: 500px) {
        background: white;
        text-align: center;
        font-weight: 400;
        font-size: 22px;
    }
`
