import React from 'react';
import styles from './styles';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'
import {useNavigation} from '@react-navigation/native'
//@ts-ignore
import Geos from '../../../assets/geos.png'
const Geografia: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', {url: 'http://goianape.com.br'})
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={Geos} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Goiânia é capital do estado de Goiás. Possui uma área aproximada de 728 km² e em 2018 apresentava uma população de 1.516.113 milhões de pessoas, segundo informações do Instituto Mauro Borges (IMB). A 210 km de distância de Brasília, capital federal, a cidade é o centro da Região Metropolitana de Goiânia (RMG), composta por 20 municípios e com 2,2 milhões de habitantes, tornando a RMG a décima região metropolitana mais populosa do país. O habitante que ali nasceu é denominado goianiense.</Text>
                    <View style={styles.separate} />
                    <TouchableOpacity onPress={handleWebView} activeOpacity={0.7} style={styles.mais}>
                        <Text style={styles.textSub}>Ver Mais</Text>
                    </TouchableOpacity>
                    <View style={styles.separate} />
                    <View style={styles.separate} />

                </View>
                <View style={{ ...styles.separate, height: 200 }} />
            </ScrollView>
        </>
    )
}
export default Geografia;