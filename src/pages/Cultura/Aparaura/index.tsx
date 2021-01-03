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
import Hero from '../../../assets/aparaua/aparaua.png'
const Aparaua: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'https://pt.wikipedia.org/wiki/Goiana' })
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={Hero} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>APARAUÁ com 40 hectares de Mata Atlântica (fauna e flora) e 06 (seis) nascentes de águas naturais, faz parte de um seleto grupo de áreas destinadas à PRESERVAÇÃO AMBIENTAL. Uma Reserva Ambiental pode caracterizar-se, entre outros pontos, por possuir certo grau de ocupação humana e guardar áreas que não sofreram influências antrópicas, preservando áreas de grande importância estética e cultural tudo de conformidade com os pré-requisitos desejáveis para a promoção do bem-estar das populações, sejam de homens, animais e flora. Historicamente, as terras destinadas a Aparauá localizam-se no Engenho Massaranduba do Norte (340 hectares), situado na PE-49, Km 20, Ponta de Pedras, Goiana/PE, desmembrado do Engenho Massaranduba (1.980 hectares). Aparauá quer dizer Massaranduba em Tupi-Guarani, tal madeira era abundante na região e ainda hoje compõe a área verde do local. O objetivo principal é a preservação ambiental.</Text>
                    <View style={styles.separate} />

                    <TouchableOpacity onPress={handleWebView} activeOpacity={0.7} style={styles.mais}>
                        <Text style={styles.textSub}>Ver Mais</Text>
                    </TouchableOpacity>
                    <View style={styles.separate} />
                    <View style={styles.separate} />

                </View>
                <View style={{ ...styles.separate, height: 300 }} />
            </ScrollView>
        </>
    )
}
export default Aparaua;