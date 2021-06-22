import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View} from "react-native";
import Card from "../Card";
import styles from "./styles";
import {getPokemon, getPokemonId, getPokemons} from "../../data";
import Pokemon from "../../interfaces/Pokemon";

export default function PaginationCard() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [offset, setOffset] = useState(0);
    const limit = 20;


    // carrega mais itens
    async function handleLoadMore() {
        if (loading) {
            return;
        }
        // if (totalPokemons > 0 && pokemons.length === totalPokemons) {
        //     return;
        // }
        setLoading(true);
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const response = await getPokemons({offset, limit});
        const {results} = response.data;
        let pokes = [];
        for (const value of list) {
            const resp = await getPokemon(value.toString());
            pokes.push(resp.data)
        }
        setPokemons([...pokemons, ...pokes]);
        console.log(pokemons);
        setTotalPokemons(totalPokemons + results.length);
        setOffset(offset + limit);
        setLoading(false)
    }

    useEffect(() => {
        handleLoadMore()
    }, []);

    function renderFooter() {
        // if (!loading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator size={'large'}/>
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
                    renderItem={({item}) => (<Card pokemon={item}/>)}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={handleLoadMore}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </>
    );
}
