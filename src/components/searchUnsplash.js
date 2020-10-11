// import React, { useState } from "react"
// import Unsplash, { toJson } from "unsplash-js"

// const unsplash = new Unsplash({})

// export default function UnsplashPhoto() {
//   const [query, setQuery] = useState("")
//   console.log(query)
//   const [pics, setPics] = useState([])

//   const searchPhotos = async (e) => {
//     e.preventDefault()
//     console.log("Submitting")
//     unsplash.search
//       .photos(query, 1, 20)
//       .then(toJson)
//       .then((json) => {
//         console.log(json)
//         setPics(json.results)
//       })
//   }
//   return (
//     <>
//       <input
//         type="text"
//         name="query"
//         placeholder={"test-app"}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit" onClick={searchPhotos}>
//         Search
//       </button>
//     </>
//   )
// }
