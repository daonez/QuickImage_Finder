import { UNSPLASH_API } from 'api'
import React, { useState } from 'react'
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({ accessKey: UNSPLASH_API })

export default function UnSplash() {
    const [images, setImages] = useState([])

    const unSplashTest = () => {
        const hello = unsplash.search
            .photos('dogs', 1, 10, { orientation: 'portrait', color: 'green' })
            .then(toJson)
            .then((json) => {
                const results = json.results
                setImages(results)
            })
    }

    const handleImage = (e) => {
        unSplashTest(e.target.value)
    }
    console.log(images)
    return (
        <div>
            Hello
            <input onChange={handleImage}></input>
        </div>
    )
}
