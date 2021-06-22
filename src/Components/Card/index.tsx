import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import Pokemon from "../../interfaces/Pokemon";

export default class Card extends React.Component<{ pokemon: Pokemon }> {
    render() {
        let {pokemon} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                }}>
                    <Image source={{uri: pokemon.sprites.other["official-artwork"].front_default}} style={styles.tinyLogo}/>
                    <Text style={styles.pokemon}>{pokemon.name}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
