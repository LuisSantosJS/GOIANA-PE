import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import Municipio from '../pages/Municipio'
import Cultura from '../pages/Cultura'
import Telefones from '../pages/Telefones'
import Hoteis from '../pages/Telefones/Hoteis'
import Restaurantes from '../pages/Telefones/Restaurante'
import Guias from '../pages/Telefones/Guia'
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
                <Stack.Screen name="Hoteis" options={{
                    headerShown: true,
                    title: 'Hotéis',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Hoteis} />
                <Stack.Screen name="Restaurantes" options={{
                    headerShown: true,
                    title: 'Restaurantes',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Restaurantes} />
                <Stack.Screen name="Guias" options={{
                    headerShown: true,
                    title: 'Contatos Úteis',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Guias} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;