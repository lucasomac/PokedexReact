import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View} from "react-native";
import Card from "../Card";
import styles from "./styles";
import {getPokemons} from "../../data";
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
        const response = await getPokemons({offset, limit});
        console.log(response.data.results);
        const {results} = response.data;
        setPokemons([...pokemons, ...results]);
        console.log(results);
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
                    renderItem={({item: {name, url}}) => (<Card
                        uri={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/432.png'}
                        pokemon={name}/>)}
                    keyExtractor={({name}) => name}
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
