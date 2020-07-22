import {apiV2} from '../services/api';

async function getPokemons(params: {}) {
    return await apiV2.get('/pokemon', {
        params
    });
}

async function getPokemon(search: string) {
    return await apiV2.get(`pokemon/${search}`);
}

async function getPokemonImage(search: string) {
    let retorno = await apiV2.get(`pokemon/${search}`);
    return retorno.data.sprites;
}

const DATA = [
    {
        "name": "zeraora",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/807.png"
    },
    {
        "name": "blacephalon",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/806.png"
    },
    {
        "name": "stakataka",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/805.png"
    },
    {
        "name": "naganadel",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/804.png"
    },
    {
        "name": "poipole",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/803.png"
    },
    {
        "name": "marshadow",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/802.png"
    },
    {
        "name": "magearna",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/801.png"
    },
    {
        "name": "necrozma",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/800.png"
    },
    {
        "name": "guzzlord",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/799.png"
    },
    {
        "name": "kartana",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/798.png"
    },
    {
        "name": "celesteela",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/797.png"
    },
    {
        "name": "xurkitree",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/796.png"
    },
    {
        "name": "pheromosa",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/795.png"
    },
    {
        "name": "buzzwole",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/794.png"
    },
    {
        "name": "nihilego",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/793.png"
    },
    {"name": "lunala", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/792.png"},
    {
        "name": "solgaleo",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/791.png"
    },
    {
        "name": "cosmoem",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/790.png"
    },
    {"name": "cosmog", "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/789.png"},
    {
        "name": "tapu-fini",
        "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/788.png"
    }];

export {DATA, getPokemons, getPokemon};
