import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import {getPokemons} from "../../data";

export default function Pokemon() {
    var [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        async function loadPokemons() {
            const response = await getPokemons();
            console.log(response.data);
            setPokemons(response.data);
        }

        loadPokemons;
    }, [pokemons]);

    return (
        <View style={styles.container}>
            <Text>
                {pokemons.length}
            </Text>
        </View>
    );
}
