import './App.css';
import Banner from "./components/Banner";
import Onglets from "./components/Onglets";
import Table from "./components/Table";
import { Provider } from 'react-redux' //connect redux with react
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Banner />
      <Table />
      <Onglets />
    </Provider>
  );
}

export default App;