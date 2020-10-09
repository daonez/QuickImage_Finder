import React from "react"
//import UnsplashSearch from "./searchUnsplash"
import PixabaySearch from "./searchPixabay"
import Nav from "./Nav1"

// console.log(REACT_APP_PIXABAY_API_KEY)

const landing = () => {
  return (
    <div>
      <Nav />
      <PixabaySearch />
      {/* <div>My Env: {REACT_APP_PIXABAY_API_KEY}</div> */}
    </div>
  )
}

export default landing
