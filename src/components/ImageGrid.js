import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { searchPageResults } from 'api'
import { FaCircleNotch } from 'react-icons/fa'

const ImageGrid = ({
    images,
    setIsLoading,
    isLoading,
    pages,
    setTotalResults,
    setPages,
    setImages,
    search
}) => {
    const handlePages = async (e) => {
        if (e.target.name === 'next') {
            const nextPage = pages + 1
            const imageResults = await searchPageResults(search, nextPage)
            setTotalResults(imageResults.numOfResults)
            setPages(nextPage)
            setImages(imageResults.images)
        }
    }
    return (
        setIsLoading && (
            <Container>
                <ImageUL>
                    {images.map((img, id) => {
                        return (
                            <ImageList key={id}>
                                <ImageParent>
                                    <a
                                        href={img.imageLinks}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Images src={img.imageUrls} alt="" />
                                    </a>
                                </ImageParent>
                            </ImageList>
                        )
                    })}
                </ImageUL>
                <ArrowButton type="button" name="next" onClick={handlePages} value={pages}>
                    NEXT <RightIcon />
                </ArrowButton>
            </Container>
        )
    )
}

export default ImageGrid

const Container = styled.div`
    width: 100%;
    background: #ffffff;
`

const ImageUL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    margin: auto;
    justify-content: center;
    width: 100%;
`

const ImageList = styled.li`
    width: 100%;
    margin: -5px 5px 16px;
    padding: 0;
    @media only screen and (min-width: 600px) {
        width: 35%;
    }
`

const ImageParent = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    &:hover {
        border: 1px solid black;
    }
`
const Images = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;

        transform: scale(1.2);
    }
`

const ArrowButton = styled.button`
    color: black;
    border-radius: 22px;
    border: none;
    padding: 0px 32px;
    background: #f6f6f6;
    display: flex;
    align-items: center;
    margin: auto;
    height: 50px;
    letter-spacing: 2px;
    font-weight: 700;
    &:focus {
        outline: 0;
    }
    &:hover {
        cursor: pointer;
        background: #d4d4d4;
        border: 1px solid;
    }
`

const RightIcon = styled(MdKeyboardArrowRight)`
    pointer-events: none;
    font-size: 29px;
    height: 30px;
    border: none;
    border-radius: 29px;
    background: #f6f6f6;
`

const LoadingIcon = styled(FaCircleNotch)`
    color: green;
`
