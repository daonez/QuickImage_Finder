import React from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/logo.png'
import { searchAll } from 'api'
import { MdSearch } from 'react-icons/md'
import Pagination from 'components/Pagination'
export default function NavBar({
    setImages,
    totalPages,
    totalResults,
    setTotalPages,
    setPages,
    pages,
    setTotalResults,
    handlePages,
    search,
    setSearch,
    setIsLoading
}) {
    const handleText = (e) => {
        setSearch(e.target.value)
    }

    const handleImages = async (e) => {
        try {
            setIsLoading(false)
            if (e.key === 'Enter') {
                console.log('enter press here! ')
                const imageResults = await searchAll(e.target.value)
                setSearch(search)
                setPages(1)
                const totalPageRoundUp = Math.ceil(imageResults.numOfResults / 25)
                setTotalPages(totalPageRoundUp)
                setTotalResults(imageResults.numOfResults)
                setIsLoading(true)
                return setImages(imageResults.images)
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
        return setImages(imageResults.images)
    }

    return (
        <>
            <NavBarContainer>
                <LogoImage src={quickImageLogo} />

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
            <Pagination
                setPages={setPages}
                pages={pages}
                setImages={setImages}
                setTotalPages={setTotalPages}
                setTotalResults={setTotalResults}
                onClick={handlePages}
                totalPages={totalPages}
                totalResults={totalResults}
                setSearch={setSearch}
                search={search}
            />
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
    width: 100%;
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
