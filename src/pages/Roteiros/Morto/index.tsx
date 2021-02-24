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
import Logo from '../../../assets/morto.png'

const Morto: React.FC = () => {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Em Goiana, o último Pastoril Profrano em atividade, era o do Velho Consolo. Ele, também conhecido como o “morto-que-carrega-o-vivo” (por causa da fantasia que usa no carnaval), que foi um dos personagens mais conhecidos do carnaval goianense. A fantasia é um boneco confeccionado em duas partes, a parte superior do boneco veste a mesma cor da calça do brincante cuja camisa é igual à calça do boneco. A composição do figurino dá a impressão de que há uma pessoa morta carregando uma pessoa viva.</Text>
                    <View style={{padding: 7}}/>
                </View>
            </ScrollView>
        </>
    )
}
export default Morto;