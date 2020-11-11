import React from 'react'
import styled, { keyframes } from 'styled-components'
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
            setIsLoading(true)
            const imageResults = await searchPageResults(search, nextPage)
            setTotalResults(imageResults.numOfResults)
            setPages(nextPage)
            setImages(imageResults.images)
            setIsLoading(false)
        }
    }
    return (
        <>
            {isLoading ? (
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            ) : (
                <Container>
                    <ImageContainer>
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
                    </ImageContainer>
                    <ArrowButton type="button" name="next" onClick={handlePages} value={pages}>
                        NEXT <RightIcon />
                    </ArrowButton>
                </Container>
            )}
        </>
    )
}

export default ImageGrid

const Container = styled.div`
    width: 100%;
    background: #ffffff;
`

const LoaderContainer = styled.div`
    display: flex;
`

const spinAnimation = keyframes`
  from  {
          transform: rotate(0deg);
        } to {
          transform: rotate(360deg);
        }
      
`
const Loader = styled(FaCircleNotch)`
    height: 100px;
    width: 50px;
    animation-name: ${spinAnimation};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: none;
    margin: auto;
`

const ImageContainer = styled.div`
    display: flex;
`

const ImageUL = styled.ul`
    padding-left: 0;
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-gap: 1em;
    -moz-column-gap: 1em;
    column-gap: 1em;
    @media only screen and (min-width: 900px) {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
    @media only screen and (min-width: 1200px) {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
`

const ImageList = styled.li`
    width: 100%;
    margin-bottom: 1em;
`

const ImageParent = styled.div`
    /* overflow: hidden;
    width: 100%;
    height: 100%;
    &:hover {
        border: 1px solid black;
    } */
`
const Images = styled.img`
    /* max-width: 100%;
    max-height: 100%; */
    width: 100%;
    /* &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }  */
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
