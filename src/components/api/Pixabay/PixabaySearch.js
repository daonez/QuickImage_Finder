import React, { useState } from 'react';
import styled from 'styled-components';
import ReactLogo from 'components/svg/pixabaylogo.svg';
import webpPath from 'components/images/mountains_bg.webp';
import axios from 'axios';

// const { REACT_APP_PIXABAY_API_KEY } = process.env;
// const pixabayURL = 'https://pixabay.com/api';
// const pixaAPI_KEY = REACT_APP_PIXABAY_API_KEY;

// const PIXABAY_API =axios.get(`${pixabayURL}/?key=${pixaAPI_KEY}&q=${search}&image_type=photo&per_page=${amount}`)
// //     .then((res) => setImages(res.data.hits))
// //     .catch((err) => console.log(err));

// async function fetchMovies() {
//     const response = await fetch('/movies');
//     // waits until the request completes...
//     console.log(response);
// }

export default function PixaSearch() {
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        // setText(e.target.value);
        //console.log(e.target.value);
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((err) => {
                // Handle Error Here
                console.error(err);
            });
    };

    return (
        <SearchContainer>
            <BackgroundImage>
                <div>
                    <Logo src={ReactLogo} />
                    <div>
                        <input type="text" placeholder="hello" onChange={handleChange} />
                        <button>ddd</button>
                    </div>
                </div>
            </BackgroundImage>
        </SearchContainer>
    );
}

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const BackgroundImage = styled.div`
    border: 1px solid #000;
    background-image: url(${webpPath});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
`;

const Logo = styled.img`
    width: 100%
    height: 100%
    margin: auto;
`;
