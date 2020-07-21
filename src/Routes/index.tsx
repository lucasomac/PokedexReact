import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import PaginationCard from "../Components/PaginationCard";
import Pokemon from "../Components/Pokemon";

const Stack = createStackNavigator();
const ScreenStyles = {
    // headerTintColor: "#000",
    // headerStyle: {backgroundColor: "#71718181"},

};

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenStyles}>
                <Stack.Screen name="Pokemon" component={Pokemon}/>
                <Stack.Screen name="Pokédex" component={PaginationCard}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
