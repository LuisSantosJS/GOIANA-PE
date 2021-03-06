import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import Heroinas from '../pages/Cultura/Heroinas'
import Artesao from '../pages/Cultura/Artesao'
import Municipio from '../pages/Municipio'
import Cultura from '../pages/Cultura'
import Telefones from '../pages/Telefones'
import Hoteis from '../pages/Telefones/Hoteis'
import Restaurantes from '../pages/Telefones/Restaurante'
import Guias from '../pages/Telefones/Guia'
import Caboclo from '../pages/Cultura/Caboclo'
import Cidade from '../pages/Municipio/Cidade'
import Historia from '../pages/Municipio/Historia'
import Geografia from '../pages/Municipio/Geografia'
import Demografia from '../pages/Municipio/Demografia'
import Politica from '../pages/Municipio/Politica'
import WebViewPage from '../pages/WebView'
import ItemDetail from '../pages/ItemDetail'
import Aparaua from '../pages/Cultura/Aparaura';
import Musical from '../pages/Cultura/Musical';
import Religioso from '../pages/Cultura/Religioso';
import Rural from '../pages/Cultura/Rural';
import Praia from '../pages/Cultura/Praia';
import Contato from '../pages/Contato'
import Term from '../pages/Term';
import Musical0 from '../pages/Cultura/Musical0';
import Roteiros from '../pages/Roteiros'
import Popular from '../pages/Cultura/Popular';
import Congo from '../pages/Roteiros/Congo';
import Burras from '../pages/Roteiros/Burrinhas';
import Clube from '../pages/Roteiros/Clube';
import Ursos from '../pages/Roteiros/Ursos';
import Sergio from '../pages/Roteiros/Sergio';
import Morto from '../pages/Roteiros/Morto';
const Stack = createStackNavigator();
const Router: React.FC = () => {

    return (

        <NavigationContainer>
            <StatusBar backgroundColor='#4A0201' barStyle='light-content' />
            <Stack.Navigator screenOptions={{ headerShown: false, headerBackTitleStyle: { color: 'white' }, headerTintColor: 'white' }}>

                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Municipio" component={Municipio} />
                <Stack.Screen name="Popular" component={Popular} />

                <Stack.Screen name="Roteiros" component={Roteiros} />

                <Stack.Screen name="Cidade" options={{
                    headerShown: true,
                    title: 'Sobre a Cidade',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Cidade} />

                <Stack.Screen name="Term" options={{
                    headerShown: true,
                    title: 'Nosso objetivo',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Term} />

                <Stack.Screen name="Contato" options={{
                    headerShown: true,
                    title: 'Contato',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Contato} />

                <Stack.Screen name="Historia" options={{
                    headerShown: true,
                    title: 'História',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Historia} />

                <Stack.Screen name="Praia" options={{
                    headerShown: true,
                    title: 'Praias',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Praia} />

                <Stack.Screen name="Politica" options={{
                    headerShown: true,
                    title: 'Política',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Politica} />

                <Stack.Screen name="Caboclo" options={{
                    headerShown: true,
                    title: 'Caboclinhos e Índios',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Caboclo} />

                <Stack.Screen name="Religioso" options={{
                    headerShown: true,
                    title: 'Turismo Religioso',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Religioso} />


                <Stack.Screen name="Artesao" options={{
                    headerShown: true,
                    title: 'Artesãos Goianenses',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Artesao} />


                <Stack.Screen name="Rural" options={{
                    headerShown: true,
                    title: 'Turismo rural',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Rural} />

                <Stack.Screen name="Musical" options={{
                    headerShown: true,
                    title: 'Sociedade Musical Curica',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Musical} />


                <Stack.Screen name="Musical0" options={{
                    headerShown: true,
                    title: 'Sociedade Musical Saboeira',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Musical0} />

                <Stack.Screen name="Aparaua" options={{
                    headerShown: true,
                    title: 'Aparauá',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Aparaua} />

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

                <Stack.Screen name="Heroinas" options={{
                    headerShown: true,
                    title: 'Heroínas de Tejucupapo',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Heroinas} />

                <Stack.Screen name="Guias" options={{
                    headerShown: true,
                    title: 'Contatos Úteis',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Guias} />

                <Stack.Screen name="Congo" options={{
                    headerShown: true,
                    title: 'Pretinhas do Congo',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Congo} />

                <Stack.Screen name="Burras" options={{
                    headerShown: true,
                    title: 'Burrinhas',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Burras} />

                <Stack.Screen name="Clube" options={{
                    headerShown: true,
                    title: 'Clube carnavalesco MISTO lenhador',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Clube} />

                <Stack.Screen name="Ursos" options={{
                    headerShown: true,
                    title: 'Ursos',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Ursos} />


                <Stack.Screen name="Sergio" options={{
                    headerShown: true,
                    title: 'Serginho da burra',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Sergio} />


                <Stack.Screen name="Morto" options={{
                    headerShown: true,
                    title: 'Morto carregando vivo',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#4A0201' },
                    headerTitleStyle: { color: 'white' }
                }} component={Morto} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;