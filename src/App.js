import './App.css';
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Main} from "./components/Main"
//JSX => JS/XML (todo lo que esta en el return)
//Functional components (ahora se usa esto) - class components (antes)
// En el return solo puedo tener una sola etiqueta padre. No puedo poner otro div

function App() {
  //codigo JS comun
  
  
  return (
    <>
      <Navbar />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
