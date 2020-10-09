import React from "react"
//import UnsplashSearch from "./searchUnsplash"
import PixabaySearch from "./searchPixabay"

// console.log(REACT_APP_PIXABAY_API_KEY)

const landing = () => {
  return (
    <div>
      <h1>QuickPic Search</h1>
      <PixabaySearch />
      {/* <div>My Env: {REACT_APP_PIXABAY_API_KEY}</div> */}
    </div>
  )
}

export default landing
