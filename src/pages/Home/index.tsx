import React from 'react';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
//@ts-ignore
import IconInfo from '../../assets/reclamar.png'
import FastImage from 'react-native-fast-image'
//@ts-ignore
import Term from '../../assets/term.png'

//@ts-ignore
import Fundo from '../../assets/fundo.png'
const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>

            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#4A0201' }} />
            <View style={styles.minBorder} />
            <View style={styles.container}>
            <FastImage source={Fundo} resizeMode={FastImage.resizeMode.contain} style={styles.header} />
                <View style={styles.bannerCenter}>
                    <Text style={styles.textBanner}>
                        O SEU PORTAL DO TURISMO
                        E CULTURA GOIANENSE
                    </Text>
                </View>
                <View style={styles.viewrest}>
                    <Text style={styles.textWellcome}>
                        Olá, seja bem vindo(a), o que
                        você deseja explorar em Goiana?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Municipio')} activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Município</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cultura')} activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Cultura e Turismo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Roteiros')} activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Roteiros Turísticos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Telefones')} activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Guia de Serviços</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.minBorder} />
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Contato')} style={styles.floats}>
                <FastImage source={IconInfo} resizeMode={FastImage.resizeMode.contain} style={styles.info} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Term')} style={styles.floats0}>
                <FastImage source={Term} resizeMode={FastImage.resizeMode.contain} style={styles.info} />
            </TouchableOpacity>
        </>
    )
}
export default Home;