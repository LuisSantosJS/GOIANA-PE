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
import Hero from '../../../assets/heroinas/heroinas.png'
const Heroinas: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'https://pt.wikipedia.org/wiki/Batalha_de_Tejucupapo' })
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={Hero} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Tejucupapo é um pequeno vilarejo situado no litoral norte do estado de Pernambuco, a cerca de 60 km da cidade de Recife. Em 1646, os holandeses já haviam perdido quase todo domínio sobre o território pernambucano, e como se encontravam cercados e necessitando desesperadamente de alimentos, cerca de 600 deles, vindos da ilha de Itamaracá, tentaram ocupar Tejucupapo.</Text>
                    <View style={styles.separate} />
                    <Text style={styles.text}>Eles escolheram o domingo para realizar a investida, acreditando que a localidade estaria menos protegida, já que era nesse dia que os homens do vilarejo costumavam ir ao Recife, a cavalo, para vender nas feiras da capital os produtos da pesca. Mas foram frustrados em sua intenção porque a informação de que se aproximavam iniciou a reação da pequena e valente população local. Enquanto alguns poucos homens foram receber os invasores, a balas, as mulheres, escondidas em trincheiras, os atacaram com tachos e panelas de barro cheios de água quente e pimenta. Ao final, mais de 300 cadáveres ficaram espalhados pelo vilarejo.</Text>
                    <View style={styles.separate} />
                    <Text style={styles.text}>Até hoje o dia 24 de abril de 1646 é lembrado como o dia que em as mulheres travaram a batalha que expulsou os holandeses de suas terras. O combate ficou registrado como o primeiro em que mulheres foram à luta no Brasil. A batalha durou horas, mas as guerreiras do Tejucupapo saíram vitoriosas naquele dia.</Text>
                    <View style={styles.separate} />
                    <Text style={styles.text}>Para saber esse acontecimento direitinho, elas vão a Tejucupapo e lá descobrem muito mais do que os feitos das heroínas do passado. Conhecem outras heroínas, mulheres atuais que vivem entre o duro trabalho cotidiano de pesca de caranguejos e ostras. Mas Tejucupapo é um lugar mágico. Pois ali vivem, no braço de rio, nos mangues que cercam o povoado, seres encantados como a Mãe d’Agua, a Gigante Jiboia Branca, a Mãe Vermelha, a Aranha Misteriosa, que detêm segredos, possuem poderes sobrenaturais, transformam a maré em um espelho vermelho, vivem ao sabor das luas e das águas. E assim, meninas guerreiras contaram heroínas.</Text>
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
export default Heroinas;