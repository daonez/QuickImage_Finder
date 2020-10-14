import React from 'react'
import PixabaySearch from 'components/pixabay/PixabaySearch'
import UnsplashPhoto from 'components/searchUnsplash'

export default function SearchBar() {
    return (
        <div>
            <input type="text" placeholder="search" />
            <button>click me</button>
            <PixabaySearch />
            <UnsplashPhoto />
        </div>
    )
}
