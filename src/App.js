import { Provider } from "react-redux" //connect redux with react
import store from "./store"

import Banner from "./components/Banner"
import Onglets from "./components/Onglets"
import Table from "./components/Table"
import Dots from "./components/Dots"
import Plus from "./components/Plus"

function App() {
  return (
    <Provider store={store}>
      <Banner />
      <Table />
      <Dots />
      <Onglets />
    </Provider>
  )
}

export default App
