import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  return (
    <>
    <div className="App">
      <MyNav brand="EpiBooks" claim="Scegli il libro che fa per te!" />
      <Welcome/>
      <AllTheBooks />
      <MyFooter/>
      </div>
    </>
  );
}

export default App;
