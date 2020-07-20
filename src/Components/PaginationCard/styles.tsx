import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
        backgroundColor: "#26273A",
        width: '100%',
        padding: 5,
        borderRadius: 10,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    title: {
        fontSize: 32,
    },
    searchForm: {
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: "row"
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: "#FFF",
        color: "#333",
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4, height: 4,
        },
        elevation: 7
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: "#00FF00",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
    },
    poekbola: {
        width: 60, height: 60,
    },
    lista: {
        flex: 1,
    }

});

export default styles;
