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
import Logo from '../../../assets/clube.png'

const Clube: React.FC = () => {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>O clube carnavalesco misto lenhadores foi fundado no dia 27 de setembro de 1935 pelo saudoso carnavalesco Sr. Francelino José da Silva onde o mesmo trouxe o Clube Lenhador para Goiana.</Text>
                    <View style={{padding: 7}}/>
                    <Text style={styles.text}>O clube lenhadores mostra a sua originalidade através dos seus componentes homens com machados, chapéus, camisas vermelhas e calças brancas, e as mulheres com suas fantasias brilhosas e com um buque na mão. Lenhadores traz também um estandarte de grande porte, tem como distintivo no centro um leão, em cima do mastro um buque de flores.</Text>
                </View>
            </ScrollView>
        </>
    )
}
export default Clube;