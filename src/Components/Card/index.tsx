import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";

export default class Card extends React.Component<{ uri: any, pokemon: string }> {
    render() {
        let {uri, pokemon} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                }}>
                    <Image source={{uri: uri}} style={styles.tinyLogo}/>
                    <Text style={styles.pokemon}>{pokemon}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
