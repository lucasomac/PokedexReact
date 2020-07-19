import React from 'react'
import {Image, StyleSheet, View} from 'react-native';
// import styles from './styles';

export default class Card extends React.Component<{ uri: any }> {
    render() {
        let {uri} = this.props;
        return (
            <View style={styles.container}>
                <Image source={{uri: uri}} style={styles.tinyLogo}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        width: 200,
        height: 200,
        backgroundColor: '#6800ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderRadius: 30
    },
    tinyLogo: {
        // flex: 1,
        width: 100,
        height: 100,
    },
});
