import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import Municipio from '../pages/Municipio'
import Cultura from '../pages/Cultura'
import Telefones from '../pages/Telefones'
const Stack = createStackNavigator();
const Router: React.FC = () => {

    return (

        <NavigationContainer>
            <StatusBar backgroundColor='#4A0201' barStyle='light-content' />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Municipio" component={Municipio} />
                <Stack.Screen name="Cultura" component={Cultura} />
                <Stack.Screen name="Telefones" component={Telefones} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;