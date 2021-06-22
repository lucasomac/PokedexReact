import apiV2 from '../services/api';

async function getPokemons(params: {}) {
    return await apiV2.get('/pokemon', {
        params
    });
}

async function getPokemon(search: string) {
    return await apiV2.get(`pokemon/${search}`);
}

async function getPokemonId(search: string) {
    return await (await apiV2.get(`pokemon/${search}`)).data.id;
}

function getPokemonImage(id: string, size: string) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/${size}/${id}.png`;
}

export {getPokemons, getPokemon, getPokemonId, getPokemonImage};
