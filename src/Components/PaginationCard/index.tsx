import React from "react";
import {FlatList, Image, TextInput, TouchableOpacity, View} from "react-native";
import Card from "../Card";
import styles from "./styles";
import {DATA} from "../../data";

export default class PaginationCard extends React.Component {
    // pokes = await pokemons();

    render() {
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
                {/*<View style={styles.container}>*/}
                {/*    <FlatList*/}
                {/*        style={styles.lista}*/}
                {/*        data={[this.pokes]}*/}
                {/*        renderItem={({item}) => (<Card uri={item.url} pokemon={item.name}/>)}*/}
                {/*        keyExtractor={item => item.name}*/}
                {/*        numColumns={2}*/}
                {/*        horizontal={false}/>*/}
                {/*</View>*/}
                <View style={styles.container}>
                    <FlatList
                        style={styles.lista}
                        data={DATA}
                        renderItem={({item}) => (<Card uri={item.uri} pokemon={item.name}/>)}
                        keyExtractor={item => item.name}
                        numColumns={2}
                        horizontal={false}/>
                </View>
            </>);
    }
}
