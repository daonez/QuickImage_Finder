import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <NavBarContainer>
      <Link to="/">
        <div>TITLE</div>
      </Link>
      <Link to="pixabay">
        <div>1</div>
      </Link>
      <div>2</div>
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
