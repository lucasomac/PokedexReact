import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import PaginationCard from "../Components/PaginationCard";
import PokemonPage from "../Components/PokemonPage";

const Stack = createStackNavigator();
const ScreenStyles = {
    // headerTintColor: "#000",
    // headerStyle: {backgroundColor: "#71718181"},

};

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenStyles}>
                <Stack.Screen name="Pokédex" component={PaginationCard}/>
                <Stack.Screen name="Pokemon" component={PokemonPage}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
