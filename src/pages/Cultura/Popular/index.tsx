import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
//@ts-ignore
import Arrow from '../../../assets/arrow.png'

//@ts-ignore
import Fundo from '../../../assets/fundo.png'
//@ts-ignore
import Chapeu from '../../../assets/chapeu.png'
const Popular: React.FC = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#4A0201' }} />
            <View style={styles.container}>
                <FastImage source={Fundo} resizeMode={FastImage.resizeMode.contain} style={styles.header} />
                <View style={styles.rowWellView}>
                    <FastImage source={Chapeu} style={styles.chapeu} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={{ ...styles.wellTRext, textAlign: 'justify' }}>
                        <Text style={{ fontWeight: 'bold' }}>Olá!</Text> Conheça um pouco mais da nossa cultura e nossos atrativos turísticos
                    </Text>
                </View>
                <View style={styles.cilindro}>
                    <Text style={styles.textCilindro}>Nossa cultura popular</Text>
                </View>
            </View>
            <View style={styles.minBorder} />
            <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={styles.backbutton}>
                <FastImage source={Arrow} resizeMode={FastImage.resizeMode.contain} style={styles.arrow} />
            </TouchableOpacity>
        </>
    )
}
export default Popular;
