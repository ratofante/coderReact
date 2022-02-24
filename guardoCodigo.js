
const pokemonArray = [];
const URL = 'https://pokeapi.co/api/v2/pokemon/';
for (let index = 1; index < 10; index++) {
    fetch(URL + index).then((resp) => resp.json())
        .then((resp) => {
            let pokemon = {
                'id': resp.id,
                'name': resp.name,
                'frontDefault': resp.sprites.front_default,
                'bigImg': resp.sprites.other['official-artwork'].front_default,
                'price': (Math.random() * (249.99 - 19.99).toFixed(2)),
            };
            pokemonArray[index] = pokemon;
        })
        .catch((error) => {
            console.log(error);
        });
}
setPokemons(pokemonArray);
console.log(pokemons);