import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  return (
    <>
      <MyNav brand="Books" claim="Best books in town!" />
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>
    </>
  );
}

export default App;
