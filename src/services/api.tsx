import axios from 'axios'

const apiV1 = axios.create({
    baseURL: 'https://pogoapi.net/api/v1/'
});

const apiV2 = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    responseType: 'json',
});

/* V1
* Maximo CP => pokemon_max_cp.json
* Names => pokemon_names.json
* Mamixo ATQ, DEF, STA => pokemon_stats.json
* Types => pokemon_types.json
*/

export {apiV1, apiV2}
