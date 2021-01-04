import React from 'react';
import styles from './styles'
import {
    View,
    Text
} from 'react-native'
import FastImage from 'react-native-fast-image'
//@ts-ignore
import Cartao from '../../assets/cartao.png'
const Contato: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <FastImage source={Cartao} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                <Text style={styles.text}>Desenvolvido por RoxyTech - soluções em TI</Text>
            </View>
        </>
    )
}
export default Contato;