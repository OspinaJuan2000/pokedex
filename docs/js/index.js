const containerPokemons = document.querySelector(".footer");

const renderPokemon = async (name) => {
  const pokemons = await getPokemons();
  const pokemon = pokemons.find((pokemon) => pokemon.name === name);

  document.querySelector(".no").innerHTML = pokemon.no;
  document.querySelector(".level").innerHTML = pokemon.level;
  document.querySelector(".type").innerHTML = pokemon.type;
  document.querySelector(".hability").innerHTML = pokemon.hability;
  document.querySelector(".height").innerHTML = pokemon.height;
  document.querySelector(".weight").innerHTML = pokemon.weight;
  document.querySelector(".pokemon__icon").src = `./img/${pokemon.icon}.svg`;
  document.querySelector(".pokemon__image").src = pokemon.image;
  document.querySelector(".pokemon__name").innerHTML = pokemon.name;
};

const getPokemons = async () => {
  const response = await fetch("pokemons.json");
  const pokemons = await response.json();
  return pokemons;
};

const changePokemon = (event) => {
  if (event.target.classList.contains("footer__image")) {
    const pokemonName = event.target.dataset.pokemon;
    renderPokemon(pokemonName);
  }
};

containerPokemons.addEventListener("click", changePokemon);