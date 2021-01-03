import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image'
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
//@ts-ignore
import GoiaLogo from '../../../assets/Goia.png'
const Historia: React.FC = () => {

    const handleWebView = () =>{

    }
    return (
        <>
            <ScrollView style={{backgroundColor:'#FFFFFF'}} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={GoiaLogo} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Goiana é um município brasileiro do estado de Pernambuco, Região Nordeste do país. Encontra-se localizado no extremo norte da Região Metropolitana do Recife, fazendo divisa com a Região Metropolitana de João Pessoa. Está situado no litoral, a 62 km do Recife, 51 km da capital paraibana e 2 187 km de Brasília. Sua população estimada em 2019 era de 79 758 habitantes e a sede municipal se situa a treze metros de altitude.</Text>
                    <View style={styles.separate} />
                    <TouchableOpacity onPress={handleWebView} activeOpacity={0.7} style={styles.mais}>
                        <Text style={styles.textSub}>Ver Mais</Text>
                    </TouchableOpacity>
                    <View style={styles.separate} />
  
                </View>
                <View style={{...styles.separate, height: 70}} />
            </ScrollView>
        </>
    )
}
export default Historia;