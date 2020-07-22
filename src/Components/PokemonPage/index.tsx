import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import {getPokemons} from "../../data";
import Pokemon from "../../interfaces/Pokemon";


export default function PokemonPage(pokemon: Pokemon) {
    var [pokemons, setPokemons] = useState([]);
    console.info(`O tamanho inicial é: ${pokemons.length}`);
    useEffect(() => {
        getPokemons().then(response => {
            setPokemons(response.data.results);
        });
        // async function loadPokemons() {
        //     const response = await getPokemons();
        //     setPokemons(response.data['results']);
        // }

        // loadPokemons;
    }, []);
    console.info(`O tamanho final é: ${pokemons.length}`);
    pokemons.forEach((element: Pokemon) => {
            console.log('O nome do pokemon é--> ' + element.name);
            console.log('A url do pokemon é--> ' + element.url);
        }
    )
    ;

    // console.log(pokemons[2]);
    const {url, name} = pokemons[2];
    return (
        <View style={styles.container}>
            <Text style={styles.pokeName}>
                {name}
            </Text>
            <Text style={styles.pokeName}>
                {url}
            </Text>
        </View>
    );
}
