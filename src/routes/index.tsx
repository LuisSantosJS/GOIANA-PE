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
import Cidade from '../pages/Municipio/Cidade'
import Historia from '../pages/Municipio/Historia'
import Geografia from '../pages/Municipio/Geografia'
import Demografia from '../pages/Municipio/Demografia'
import Politica from '../pages/Municipio/Politica'
import WebViewPage from '../pages/WebView'
import ItemDetail from '../pages/ItemDetail'
const Stack = createStackNavigator();
const Router: React.FC = () => {

    return (

        <NavigationContainer>
            <StatusBar backgroundColor='#4A0201' barStyle='light-content' />
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Municipio" component={Municipio} />

                <Stack.Screen name="Cidade" options={{
                    headerShown: true,
                    title: 'Sobre a Cidade',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Cidade} />

                <Stack.Screen name="Historia" options={{
                    headerShown: true,
                    title: 'História',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Historia} />

                <Stack.Screen name="Politica" options={{
                    headerShown: true,
                    title: 'Política',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Politica} />

                <Stack.Screen name="Geografia" options={{
                    headerShown: true,
                    title: 'Geografia',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Geografia} />

                <Stack.Screen name="WebViewPage" options={{
                    headerShown: true,
                    title: 'Navegador',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={WebViewPage} />

                <Stack.Screen name="Demografia" options={{
                    headerShown: true,
                    title: 'Demografia',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Demografia} />

                <Stack.Screen name="Cultura" component={Cultura} />

                <Stack.Screen name="Telefones" component={Telefones} />

                <Stack.Screen name="Hoteis" options={{
                    headerShown: true,
                    title: 'Hotéis',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Hoteis} />

                <Stack.Screen name="ItemDetail" options={{
                    headerShown: true,
                    title: '',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={ItemDetail} />

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