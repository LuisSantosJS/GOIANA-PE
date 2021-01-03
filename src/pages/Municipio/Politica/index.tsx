import React from 'react';
import styles from './styles';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'

//@ts-ignore
import Poli from '../../../assets/polis.png'
const Politica: React.FC = () => {
    const navigation = useNavigation()
    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'http://goianape.com.br' })
    }
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <FastImage source={Poli} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                <Text style={styles.text}>Em Goiana, o Poder Executivo é representado pelo prefeito e gabinete de secretários, em conformidade ao modelo proposto pela Constituição Federal. O Poder Legislativo é constituído à câmara, composta por 10 vereadores eleitos para mandatos de quatro anos (em observância ao disposto no artigo 29 da Constituição[2]). Cabe à casa elaborar e votar leis fundamentais à administração e ao Executivo, especialmente o orçamento participativo (Lei de Diretrizes Orçamentárias).</Text>
                <View style={styles.separate} />
                <TouchableOpacity onPress={handleWebView} activeOpacity={0.7} style={styles.mais}>
                    <Text style={styles.textSub}>Ver Mais</Text>
                </TouchableOpacity>
                <View style={styles.separate} />
                <View style={styles.separate} />

            </View>
            <View style={{ ...styles.separate, height: 200 }} />
        </ScrollView>
    )
}
export default Politica;