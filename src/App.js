import "./App.scss";
import Header from "./components/header/header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App-container">
      <Header />
      <div>phan than</div>
      <button>
        <Link to="./users"> den trang user</Link>
      </button>
      <button>
        <Link to="./admin"> ve trang Admin</Link>
      </button>
    </div>
  );
};
export default App;
