import React from 'react'
import NavBar from 'components/NavBar'
import SearchBar from 'components/SearchBar'
import UnsplashSearch from 'components/unsplash/UnsplashSearch'
import PixabaySearch from 'components/pixabay/PixabaySearch'

const Main = () => {
    return (
        <div>
            <NavBar />
            <SearchBar />
            <UnsplashSearch />
            <PixabaySearch />
        </div>
    )
}

export default Main
