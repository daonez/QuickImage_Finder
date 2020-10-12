import React from "react"
import { Route, Switch } from "react-router"
import { BrowserRouter as Routes } from "react-router-dom"
import Landing from "../components/Landing"
import PixabayAPI from "../components/pixabay/index"

const Router = () => {
  return (
    <Routes>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/pixabay">
          <PixabayAPI />
        </Route>
      </Switch>
    </Routes>
  )
}

export default Router
