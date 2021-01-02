import React from 'react';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import FastImage from 'react-native-fast-image'
//@ts-ignore
import Logo from '../../assets/logo.png'
const Home: React.FC = () => {
    return (
        <>

            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#4A0201' }} />
            <View style={styles.minBorder} />
            <View style={styles.container}>
                <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.logo} />
                <View style={styles.bannerCenter}>
                    <Text style={styles.textBanner}>
                        O SEU PORTAL DO TURISMO
                        E CULTURA GOIANENSE
                    </Text>
                </View>
                <View style={styles.viewrest}>
                    <Text style={styles.textWellcome}>
                        Olá, seja bem vindo, o que
                        você deseja explorar em goiana?
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Município</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Cultura</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttons}>
                        <Text style={styles.textButtons}>Telefones</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.minBorder} />
        </>
    )
}
export default Home;