import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import booksData from "./data/fantasy.json"
import BookList from './components/BookList';


function App() {
  return (
    <>
    <div className="App">
      <MyNav brand="EpiBooks" claim="Scegli il libro che fa per te!" />
      <Welcome/>
      <BookList books={booksData} />
      <MyFooter/>
      </div>
    </>
  );
}

export default App;
