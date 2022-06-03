import './App.css';
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-2 bg-secondary">
            <Categories />
          </div>
          <div className="col-1"></div>
          <div className="col-9 bg-info">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
