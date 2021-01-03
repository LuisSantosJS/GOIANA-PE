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
import Bras from '../../../assets/brasa.png'
const Demografia: React.FC = () => {
    const navigation = useNavigation()
    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'http://goianape.com.br' })
    }
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <FastImage source={Bras} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                <Text style={styles.text}>Segundo o Censo do IBGE Sua população estimada era de 79 758 habitantes e a sede municipal se situa a treze metros de altitude. Seu centro histórico foi declarado Patrimônio Histórico Nacional no ano de 1938.</Text>
                <View style={styles.separate} />
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
export default Demografia;