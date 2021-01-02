import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
const Stack = createStackNavigator();
const Router: React.FC = () => {

    return (

        <NavigationContainer>
            <StatusBar backgroundColor='#4A0201' barStyle='light-content' />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;