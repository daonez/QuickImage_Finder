import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { searchAll } from 'api'
import { MdSearch } from 'react-icons/md'

export default function NavBar({
    setImages,
    setTotalPages,
    setPages,
    setTotalResults,
    search,
    setSearch,
    setIsLoading
}) {
    const [words, setWords] = useState(['dog', 'cat', 'people', 'shoes', 'hats', 'travel'])

    useEffect(() => {
        const landingPage = async () => {
            try {
                setIsLoading(true)
                const num = Math.floor(Math.random() * words.length)
                setSearch(words[num])
                setPages(1)
                const imageResults = await searchAll(words[num])
                const totalPageRoundUp = Math.ceil(imageResults.numOfResults / 25)
                setTotalPages(totalPageRoundUp)
                setTotalResults(imageResults.numOfResults)
                setImages(imageResults.images)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        landingPage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleText = (e) => {
        setSearch(e.target.value)
    }

    const handleImages = async (e) => {
        try {
            if (e.key === 'Enter') {
                setIsLoading(true)
                console.log('enter press here! ')
                const imageResults = await searchAll(e.target.value)
                setSearch(search)
                setPages(1)
                const totalPageRoundUp = Math.ceil(imageResults.numOfResults / 25)
                setTotalPages(totalPageRoundUp)
                setTotalResults(imageResults.numOfResults)
                setImages(imageResults.images)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async (e) => {
        setIsLoading(true)
        setSearch(search)
        setPages(1)
        const imageResults = await searchAll(e.target.value)
        const totalPageRoundUp = Math.ceil(imageResults.numOfResults / 25)
        setTotalPages(totalPageRoundUp)
        setTotalResults(imageResults.numOfResults)
        setImages(imageResults.images)
        setIsLoading(false)
    }

    return (
        <>
            <NavBarContainer>
                <Title>Quick Image</Title>
                <SearchBarContainer>
                    <SearchButton type="button" value={search} onClick={handleClick}>
                        <SearchIcon />
                    </SearchButton>
                    <InputContainer>
                        <Input
                            value={search}
                            placeholder="search"
                            onKeyPress={handleImages}
                            onChange={handleText}
                        />
                    </InputContainer>
                </SearchBarContainer>
            </NavBarContainer>
        </>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    font-size: 30px;
    width: 100%;
`

const Title = styled.h2`
    display: flex;
    font-size: 30px;
    margin: auto;
    padding: 10px 9px;
    text-align: center;
`
const SearchBarContainer = styled.div`
    display: flex;
    width: 100%;
`

const SearchIcon = styled(MdSearch)`
    pointer-events: none;
    background: #eeeeee;
    height: 33px;
    width: 25px;
`

const InputContainer = styled.div`
    display: flex;
    width: 100%;
`
const Input = styled.input`
    display: flex;
    border-radius: 40px;
    width: 72%;
    height: 40px;
    margin: 20px;
    background: #eeeeee;
    text-indent: 50px;
    font-weight: 300;
    font-family: inherit;
    &:focus {
        outline: 0;
    }
    @media only screen and (min-width: 600px) {
        width: 50%;
    }
`
const SearchButton = styled.button`
    border: none;
    position: relative;
    left: 69px;
    background: #eeeeee;
    color: grey;
    height: 0px;
    top: 27px;
    &:focus {
        outline: 0;
    }
    &:hover {
        cursor: pointer;
        color: black;
    }
`
