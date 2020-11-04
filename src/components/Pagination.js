import React, { useState } from 'react'
import styled from 'styled-components'
import { MdSearch, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { searchPageResults } from 'api'

export default function Pagination({ search, setImages,setSearch }) {
 

    return (
        <div>
            <ResultsContainer>
                <Results value={totalResults}>Results: {totalResults}</Results>
                <ButtonContainer>
                    {pages > 1 && (
                        <PageButton type="button" name="prev" onClick={handlePages} value={pages}>
                            <LeftIcon />
                        </PageButton>
                    )}
                    <Pages value={pages}>
                        Pages {pages}/ {totalPages}
                    </Pages>
                    <PageButton type="button" name="next" onClick={handlePages} value={pages}>
                        <RightIcon />
                    </PageButton>
                </ButtonContainer>
            </ResultsContainer>
        </div>
    )
}

const ResultsContainer = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #f6f6f6;
`
const PageButton = styled.button`
    padding: 2px 5px;
    border-radius: 22px;
    border: none;
    background-color: #f6f6f6;
    &:focus {
        outline: 0;
    }
`

const LeftIcon = styled(MdKeyboardArrowLeft)`
    pointer-events: none;
    background: #ffffff;
    height: 26px;
    width: 22px;
    border-radius: 36px;
`
const RightIcon = styled(MdKeyboardArrowRight)`
    pointer-events: none;
    background: #ffffff;
    height: 26px;
    width: 22px;
    border-radius: 36px;
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
