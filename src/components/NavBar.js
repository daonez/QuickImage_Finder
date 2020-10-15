import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <NavBarContainer>
            <Link to="/">
                <div>TITLE</div>
            </Link>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    background: orange;
    color: yellow;
    display: flex;
    justify-content: space-evenly;
    font-size: 30px;
`
