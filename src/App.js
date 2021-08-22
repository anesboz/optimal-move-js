import { useEffect } from "react"
import { connect, Provider } from "react-redux" //connect redux with react
import store from "./store"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import initalData from "./data"

import Banner from "./components/Banner"
import Onglets from "./components/Onglets"
import Table from "./components/Table"
import Dots from "./components/Dots"
import Plus from "./components/Plus"
import AddingForm from "./components/AddingForm"
import { Fragment } from "react"

function App() {
  return ( 
    <Provider store={store}>
      <Router>
        <Fragment>
          <Banner />
          <Switch>
            <Route exact path="/add">
              <AddingForm />
            </Route>
            <Route path="/">
              <Table />
              <Dots />
            </Route>
          </Switch>
          <Onglets />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
