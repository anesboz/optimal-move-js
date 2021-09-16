import { Provider } from "react-redux" //connect redux with react
import store from "./store"
import Banner from "./components/Banner"
import MainContainer from "./components/MainContainer"
import initialData from "./data"

function App() {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(initialData))
  }
  return (
    <Provider store={store}>
      <Banner />
      <MainContainer />
    </Provider>
  )
}

export default App
