import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Formulario from "./components/Formulario";
import TituloFormulario from "./components/TituloFormulario";



function App() {
  return (
    <>
    <Container className="my-5 mainPage">
       <h1 className="display-4 text-center">Practico ReactJS ejercicio 9</h1>
       <hr/>
      <TituloFormulario/>
       <Formulario/>
       
    </Container>
    <footer className="bg-dark text-light text-center py-5">
      <p> &copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App