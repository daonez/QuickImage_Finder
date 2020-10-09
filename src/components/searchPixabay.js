import React, { useState, useEffect } from "react"
import axios from "axios"

export default function PixaSearch() {
  const API_KEY = "18611692-37b6c14c8603c596103e77a37"
  const API_URL = "https://pixabay.com/api"

  const [search, setSearch] = useState("")
  const [amount, setAmount] = useState("10")
  const [images, setImages] = useState([])

  useEffect(() => {
    if (search === "") {
      setImages([])
    } else {
      axios
        .get(`${API_URL}/?key=${API_KEY}&q=${search}&image_type=photo&per_page=${amount}`)
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err))
    }
  }, [search, amount])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    //test
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder={"test-app"} value={search} onChange={handleSearch} />
      <select value={amount} onChange={handleAmount}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  )
}
