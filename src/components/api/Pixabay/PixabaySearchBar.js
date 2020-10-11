import React from 'react';
import styled from 'styled-components';
import ReactLogo from 'components/svg/pixabaylogo.svg';
import webpPath from 'components/images/mountains_bg.webp';

export default function PixaSearch() {
    return (
        <SearchContainer>
            <BackgroundImage>
                <div>
                    <Logo src={ReactLogo} />
                    <div>
                        <input type="text" placeholder="hello" />
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
