import { Col } from 'antd';
import Search from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';
import { getPokemon } from './api';

import './App.css';


function App({pokemons, setPokemons}) {
  console.log(pokemons);
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
      <PokemonList pokemons={pokemons}  />
    </div>
  );
};


const mapStateProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateProps, mapDispatchToProps) (App);
