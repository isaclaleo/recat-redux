import { Col } from 'antd';
import Search from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import './App.css';


function App() {
  const [pokemon, setPokemons] = useState();

  useEffect(() => {
    const fecthPokemon = async () =>  {
      const pokemonsRest = await getPokemon();
      setPokemons(pokemonsRest);
    };
    fecthPokemon();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={ 10 }>
        <img src={logo} alt= 'pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemon}  />
    </div>
  );
}

export default App;
