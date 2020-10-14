import React, { useState } from 'react'
import { UNSPLASH_API } from 'api'
import Unsplash, { toJson } from 'unsplash-js'
import ImageGrid from 'components/ImageGrid'
import axios from 'axios'
const unsplash = new Unsplash({ accessKey: UNSPLASH_API })

console.log(unsplash)
export default function UnsplashPhoto() {
  
    const [query, setQuery] = useState('')
    console.log(query)
    const [pics, setPics] = useState([])

    const searchPhotos = (e) => {
        e.preventDefault()
        console.log('Submitting')
        unsplash.search
            .photos(query, 1)
            .then(toJson)
            .then((json) => {
                console.log(json)
                setPics(json.results)
            })
    }
    return (
        <>
            <input
                type="text"
                name="query"
                placeholder={'test-app'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" onClick={searchPhotos}>
                Search
            </button>
            <ImageGrid images={pics} />
        </>
    )
}
