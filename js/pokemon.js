const PokemonContenedor = document.querySelector('.pokedex')

const creandoPokemon = poke => {
    const pokemonCard = document.createElement('div')
    pokemonCard.classList.add('cartaPoke')
    pokemonCard.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
        <img src="${poke.sprites.front_default}" class="card-img-top bg-dark" alt="pokemon">
        <div class="card-body">
            <h5 class="card-title">${poke.name}</h5>
            <p class="card-title">Numero en la Pokedex: ${poke.id}</p>
        </div>
  </div>
    `


    PokemonContenedor.appendChild(pokemonCard);
}

const obteniendoDatos = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then((data) => {
        creandoPokemon(data);
    });
}


const mostrarPokemon = number => {
    for(let i = 250; i <= number + 8; i++){
        obteniendoDatos(i)
    }
}





mostrarPokemon(259)