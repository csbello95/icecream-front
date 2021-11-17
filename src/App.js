import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
//import axios from "axios";
import IcecreamList from "./components/IcecreamList";
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
      <IcecreamList list={icecreams} />
    </Container>
  );
}

export default App;
