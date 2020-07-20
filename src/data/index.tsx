import {apiV2} from '../services/api';

async function pokemons(resource: string) {
    return await (await apiV2.get(resource)).data;
}

const DATA = [
    {
        "name": "zeraora",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/807.png"
    },
    {
        "name": "blacephalon",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/806.png"
    },
    {
        "name": "stakataka",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/805.png"
    },
    {
        "name": "naganadel",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/804.png"
    },
    {
        "name": "poipole",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/803.png"
    },
    {
        "name": "marshadow",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/802.png"
    },
    {
        "name": "magearna",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/801.png"
    },
    {
        "name": "necrozma",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/800.png"
    },
    {
        "name": "guzzlord",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/799.png"
    },
    {
        "name": "kartana",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/798.png"
    },
    {
        "name": "celesteela",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/797.png"
    },
    {
        "name": "xurkitree",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/796.png"
    },
    {
        "name": "pheromosa",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/795.png"
    },
    {
        "name": "buzzwole",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/794.png"
    },
    {
        "name": "nihilego",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/793.png"
    },
    {"name": "lunala", "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/792.png"},
    {
        "name": "solgaleo",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/791.png"
    },
    {
        "name": "cosmoem",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/790.png"
    },
    {"name": "cosmog", "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/789.png"},
    {
        "name": "tapu-fini",
        "uri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/788.png"
    }];

export {DATA, pokemons};
