import React from "react"
import UnsplashSearch from "./searchUnsplash"
import PixabaySearch from "./searchPixabay"
const landing = () => {
  return (
    <div>
      <h1>Instafinder</h1>
      <UnsplashSearch />
      <PixabaySearch />
    </div>
  )
}

export default landing
