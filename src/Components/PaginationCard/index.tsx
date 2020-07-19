import React from "react";
import {FlatList, Image, TextInput, TouchableOpacity, View} from "react-native";
import Card from "../Card";
import styles from "./styles";
import DATA from "../../data";

export default function PaginationCard() {
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
                    data={DATA}
                    renderItem={({item}) => <Card uri={item.uri}/>}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    horizontal={false}
                />
            </View>
        </>
    );
}
