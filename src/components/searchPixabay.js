import React, { useState, useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import InputAdorment from "@material-ui/core/InputAdornment"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"

import SearchIcon from "@material-ui/icons/Search"

import axios from "axios"

import ImageResults from "./ImageResult"
const { REACT_APP_PIXABAY_API_KEY } = process.env

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "75ch",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function PixabaySearchBar() {
  const classes = useStyles()
  const pixabayURL = "https://pixabay.com/api"
  const pixaAPI_KEY = REACT_APP_PIXABAY_API_KEY

  const [search, setSearch] = useState("")
  const [amount, setAmount] = useState("10")
  const [images, setImages] = useState([])

  useEffect(() => {
    if (search === "") {
      setImages([])
    } else {
      axios
        .get(
          `${pixabayURL}/?key=${pixaAPI_KEY}&q=${search}&image_type=photo&per_page=${amount}`
        )
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err))
    }
  }, [amount, pixaAPI_KEY, search])

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleTextChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div className={classes.root}>
        <TextField
          name="search"
          value={search}
          onChange={handleTextChange}
          className={classes.textField}
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdorment position="start">
                <SearchIcon />
              </InputAdorment>
            ),
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel>Amount</InputLabel>
          <Select value={amount} onChange={handleChange}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ImageResults images={images} />
    </div>
  )
}
