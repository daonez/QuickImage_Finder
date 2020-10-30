import React, { useState } from 'react'
import styled from 'styled-components'
import quickImageLogo from 'images/quickImage.png'
import { searchAll } from 'api'

export default function NavBar({ setImages }) {
    // const ref = useRef()
    const [search, setSearch] = useState('')
    const [pages, setPages] = useState(1)
    const [active, setActive] = useState(true)
    // useEffect(() => {
    //     ref.current.focus()
    //     document.addEventListener('keydown', handleKeypress)

    //     return () => {
    //         document.removeEventListener('keydown', handleKeypress)
    //     }
    // }, [])

    // const handleKeypress = () => {
    //     ref.current.focus()
    // }
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
                return setImages(imageResults)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlePages = async (e) => {
        if (e.target.name === 'next') {
            const nextPage = pages + 1
            const imageResults = await searchAll(search, nextPage)
            setPages(nextPage)
            setImages(imageResults)
        } else if (e.target.name === 'prev') {
            const prevPage = pages - 1
            const imageResults = await searchAll(search, prevPage)
            setPages(prevPage)
            setImages(imageResults)
        } else {
            setPages(1)
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
                        onKeyPress={handleImages}
                        onChange={handleText}
                    />
                </SearchBarContainer>

                {pages > 1 && (
                    <button type="button" name="prev" onClick={handlePages} value={pages}>
                        prev
                    </button>
                )}

                <p value={pages}>pages {pages}</p>

                <button type="button" name="next" onClick={handlePages} value={pages}>
                    next
                </button>
            </NavBarContainer>
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
