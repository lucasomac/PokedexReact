import React, {useEffect, useState} from "react";
import {FlatList, Image, TextInput, TouchableOpacity, View} from "react-native";
import Card from "../Card";
import styles from "./styles";
import {getPokemons} from "../../data";

export default function PaginationCard() {
    var [pokemons, setPokemons] = useState([]);
    var offset = 100, limit = 20;
    useEffect(() => {
        getPokemons({offset, limit}).then(response => {
            setPokemons(response.data.results);
        });
    }, []);
    return (
        <>
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar pokemons por Nome..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.loadButton}>
                    <Image source={require('../../images/pokebola_button.png')} style={styles.poekbola}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <FlatList
                    style={styles.lista}
                    data={pokemons}
                    renderItem={({item: {name, url}}) => (<Card
                        uri={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png'}
                        pokemon={name}/>)}
                    keyExtractor={({name}) => name}
                    numColumns={2}
                    horizontal={false}/>
            </View>
        </>);
}
