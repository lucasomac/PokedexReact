import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:5001/',
});

const apiV2 = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    responseType: 'json'
});
const apiV3 = axios.create({
    baseURL: 'https://pogoapi.net/api/v1/'
})
/* V3
* Maximo CP => pokemon_max_cp.json
* Names => pokemon_names.json
* Mamixo ATQ, DEF, STA => pokemon_stats.json
* Types => pokemon_types.json
*/

export {api, apiV2}
