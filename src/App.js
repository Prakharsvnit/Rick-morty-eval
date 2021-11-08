import React,{useState} from 'react';
import Card from "./Components/Card"
const axios = require('axios');

function App() {

  const [Character,setCharacter] = useState([])

  axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      setCharacter(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });

  return(
    Character.map(item => {
      return <Card {...item} />
    })
  )
}

export default App;
