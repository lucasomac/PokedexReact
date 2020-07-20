import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import PaginationCard from "../Components/PaginationCard";
import Details from "../Components/Details";

const Stack = createStackNavigator();
const ScreenStyles = {
    // headerTintColor: "#000",
    // headerStyle: {backgroundColor: "#71718181"},

};

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenStyles}>
                <Stack.Screen name="Home" component={PaginationCard}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
