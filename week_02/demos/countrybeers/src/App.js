import "./App.css";
import Beers from "./components/Beers";
import BasicMenu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <BasicMenu />
      <Beers />
    </div>
  );
}

export default App;
