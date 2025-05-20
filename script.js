const app = document.getElementById('app');
const MAX_POKEMONS = 151;

async function fetchPokemons() {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${MAX_POKEMONS}`);
    let data = await response.json();

    return data['results'];
  } catch (error) {
    console.log(error);
  }
}

async function getDataForEachPokemon(pokemonID) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    let pokemon = await response.json();

    return pokemon;
  } catch (error) {
    console.log(error);
  }
}

fetchPokemons().then((pokemons) => {
  pokemons.map((_, id) => getDataForEachPokemon(id + 1).then((pokemonData) => {
    const pokemon = document
      .createElement('figure');
    pokemon
      .classList
      .add('pokemon');
    const pokemonImg = document
      .createElement('img');
    pokemonImg
      .setAttribute(
        'src',
        pokemonData.sprites.front_default
      );
    const pokemonCaption = document
      .createElement('figcaption');
    pokemonCaption.innerText = pokemonData.name;

    pokemon
      .appendChild(pokemonImg);
    pokemon
      .appendChild(pokemonCaption);

    app
      .appendChild(pokemon);
  }));
});


