import axios from "axios";
import qs from "qs";


const apiV2 = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    responseType: 'json',
    paramsSerializer: function (params) {
        return qs.stringify(params, {arrayFormat: 'brackets'});
    }
});

/* V1
* Maximo CP => pokemon_max_cp.json
* Names => pokemon_names.json
* Mamixo ATQ, DEF, STA => pokemon_stats.json
* Types => pokemon_types.json
*/

export default apiV2;
