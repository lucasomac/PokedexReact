import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View} from "react-native";
import Card from "../Card";
import styles from "./styles";
import {getPokemons} from "../../data";

export default function PaginationCard() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [offset, setOffset] = useState(0);
    const limit = 20;


    // carrega mais itens
    async function handleLoadMore() {
        if (loading) {
            return;
        }
        if (totalPokemons > 0 && pokemons.length === totalPokemons) {
            return;
        }
        setLoading(true);
        const response = (await getPokemons({offset, limit}));
        const {results} = response.data;
        setPokemons(pokemons + results);
        console.log(pokemons.length);
        setTotalPokemons(totalPokemons + results.length);
        console.log(totalPokemons)
        setOffset(offset + limit);
        console.log(offset)
        setLoading(false)
    }

    useEffect(() => {
        handleLoadMore();
    }, [handleLoadMore]);

    function renderFooter() {
        if (!loading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator/>
            </View>
        );
    }

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
                        // uri={getPokemon(name).data.sprites.front_default}
                        pokemon={name}/>)}
                    keyExtractor={({name}) => name}
                    numColumns={2}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={handleLoadMore}
                    ListFooterComponent={<ActivityIndicator/>}
                />
            </View>
        </>);
}
