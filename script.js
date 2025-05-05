let pokemonId = 1;

const app = document.getElementById('app');

const title = document.createElement('h1');
title.innerText = 'gotta catch em all';

//body
//.appendChild(title);

app.addEventListener(
  'click',
  (el, e) => {
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
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
      );
    const pokemonCaption = document
      .createElement('figcaption');
    pokemonCaption.innerText = `#${pokemonId}`;

    pokemon
      .appendChild(pokemonImg);
    pokemon
      .appendChild(pokemonCaption);

    app
      .appendChild(pokemon);

    pokemonId++;
  }
);
