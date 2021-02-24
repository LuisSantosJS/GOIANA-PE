import React from 'react';
import FastImage from 'react-native-fast-image'
import styles from './styles';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
//@ts-ignore
import Logo from '../../../assets/sergio.png'

const Sergio: React.FC = () => {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>No Carnaval de 1999 em Goiana,Pernambuco, um jovem de dezessete anos é presenteado com uma burrinha e decide desfilar usando-a no Bloco dos Professores (tradicional bloco carnavalesco da cidade). Surge Serginho da Burra. Quando criança, era vizinho de Luiz Gomes e mantinha contato recorrentemente com figuras que traziam a cultura impregnada em seu próprio sangue como Olavo, Seu Dudu, Luis do Buraco da Gia e Zé do Carmo. O gosto por ouvir música regional (coco de roda, maracatu, pastoril, babau, cavalo-marinho) só fez acrescentar o que na infância esteve a todo o momento em seu cotidiano.</Text>
                    <View style={{padding: 7}}/>
                </View>
            </ScrollView>
        </>
    )
}
export default Sergio;