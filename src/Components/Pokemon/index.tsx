import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import {getPokemons} from "../../data";

export default function Pokemon() {
    var [pokemons, setPokemons] = useState([]);
    console.info(`O tamanho inicial é: ${pokemons.length}`);
    useEffect(() => {
        getPokemons().then(response => {
            setPokemons(response.data['results']);
        });

        // async function loadPokemons() {
        //     const response = await getPokemons();
        //     setPokemons(response.data['results']);
        // }

        // loadPokemons;
    }, [pokemons]);

    console.info('O tamanho final é: ' + pokemons.length);
    console.log(pokemons[7]);
    return (
        // const [name, url] = pokemons[0];
        <View style={styles.container}>
            <Text>
                {pokemons[7]}
            </Text>
            <Text>
                {pokemons[7]}
            </Text>
        </View>
    );
}
