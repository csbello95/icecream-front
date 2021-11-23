import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { Container } from "react-bootstrap";
//import axios from "axios";
import IcecreamList from "./components/IcecreamList";
import Menu from "./components/Menu";
import FormCreate from "./components/Formcreate";
//import { API_URL } from "./constants";
//import { getIcecreamAxios } from "./api/icecream";
import { getIcecreamFetch } from "./api/icecream";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [icecreams, setIcecreams] = useState([]);

 
  useEffect(() => {
    //getIcecreamFetch();
    //const data = await getIcecreamAxios();

    async function fetch() {
      const data = await getIcecreamFetch();
      setIcecreams(data);
    }
    fetch();
  }, []);

  return (
    <Container>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/icecreams" exact element={<IcecreamList list={icecreams}/>}/>
          <Route path="/icecreams/create" exact element={<FormCreate/>} />
          <Route path="/icecreams/update" exact element={<h1>Actualizar Helado</h1>} />
          <Route path="/icecreams/delete" exact element={<h1>Eliminar Helado</h1>}/>
        </Routes>
      </Router>
      
    </Container>
  );
}

export default App;
