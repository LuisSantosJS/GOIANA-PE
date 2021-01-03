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
import Hero from '../../../assets/musical/musical.png'
const Musical: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'https://pt.wikipedia.org/wiki/Curica_(banda)' })
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={Hero} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Banda Musical Curica fundada em 08 de setembro de 1848, por José Conrado de Souza Nunes, seu primeiro mestre, filho de portugueses, teve como finalidade principal abrilhantar as festas religiosas da paróquia de Goiana – Pernambuco, primando, também, pelas músicas marciais.</Text>
                    <View style={styles.separate} />
                    <Text style={styles.text}> Na época do Imperador D. PEDRO II (06-12-1859) passou a integrar a GUARDA NACIONAL, fazendo as honras da Corte, fato que consolidou a cultura do município de Goiana – Pernambuco.</Text>
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
export default Musical;