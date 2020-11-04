import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { searchPageResults } from 'api'
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
                <div>
                    <ImageContainer>
                        {images.map((img, id) => {
                            return (
                                <ImageBox key={id}>
                                    <a href={img.imageLinks} target="_blank">
                                        <Images src={img.imageUrls} alt="" />
                                    </a>
                                </ImageBox>
                            )
                        })}
                    </ImageContainer>
                    <Text>
                        <ArrowButton type="button" name="next" onClick={handlePages} value={pages}>
                            NEXT
                            <RightIcon />
                        </ArrowButton>
                    </Text>
                </div>
            </Container>
        )
    )
}

export default ImageGrid

const Container = styled.div`
    width: 100%;
    background: #e9eaec;
`

const ImageContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 37px;
    justify-content: center;
`

const ImageBox = styled.li`
    width: 30%;
    margin: -5px 5px 16px;
    padding: 0;
`
const Images = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
`

const ArrowButton = styled.button`
    color: black;
    border-radius: 22px;
    border: none;
    padding: 0;
    background: #f6f6f6;
    display: flex;
    align-items: center;
    margin: auto;
    height: 50px;
    &:focus {
        outline: 0;
    }
`

const RightIcon = styled(MdKeyboardArrowRight)`
    pointer-events: none;
    font-size: 29px;
    height: 51px;
    border: none;
    border-radius: 29px;
    background: #f6f6f6;
`

const Text = styled.p`
    font-size: 17px;
    background: #f6f6f6;
    margin: auto;
    width: 103px;
    border-radius: 43px;
`
