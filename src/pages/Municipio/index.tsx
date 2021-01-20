import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { getStatusBarHeight } from 'react-native-status-bar-height';
//@ts-ignore
import Arrow from '../../assets/arrow.png'
//@ts-ignore
import CidadeLogo from '../../assets/predio.png'
//@ts-ignore
import TelefoneLogo from '../../assets/telefone.png'
//@ts-ignore
import DemoLogo from '../../assets/demo.png'
//@ts-ignore
import PoliLogo from '../../assets/poli.png'
//@ts-ignore
import GeoLogo from '../../assets/geo.png'
//@ts-ignore
import HistoriaLogo from '../../assets/historia.png'
//@ts-ignore
import Logo from '../../assets/logo.png'
//@ts-ignore
import Chapeu from '../../assets/chapeu.png'
const Municipio: React.FC = () => {
    const navigation = useNavigation();
    const handleBack = () =>{
        navigation.goBack();
    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#4A0201' }} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.logo} />
                </View>
                <View style={styles.rowWellView}>
                    <FastImage source={Chapeu} style={styles.chapeu} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={styles.wellTRext}>
                        Olá, seja bem vindo(a) ao nosso
                        portal de turismo <Text style={{ color: '#191919' }}>Goianense</Text>.
                    </Text>
                </View>
                <View style={styles.cilindro}>
                    <Text style={styles.textCilindro}>Conheça mais sobre nosso município.</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity  onPress={() => navigation.navigate('Cidade')} activeOpacity={0.7} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={CidadeLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Historia')} activeOpacity={0.7} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={HistoriaLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Geografia')} activeOpacity={0.7} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={GeoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                        </View>
                        <View style={{padding: 10}}/>
                        <View style={styles.roWNOmesBolina}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                A cidade
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Historia
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Geografia
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity onPress={() => navigation.navigate('Demografia')} activeOpacity={0.7} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={DemoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Politica')} activeOpacity={0.7} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={PoliLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Guias')} activeOpacity={0.7} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={TelefoneLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                        </View>
                        <View style={{padding: 10}}/>
                        <View style={styles.roWNOmesBolina}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Demografia
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Política
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Telefones Úteis
                            </Text>
                        </View>
                        <View style={{padding: 10}}/>
                        <View style={{padding: 10}}/>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.minBorder} />
            <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={styles.backbutton}>
                <FastImage source={Arrow} resizeMode={FastImage.resizeMode.contain} style={styles.arrow} />
            </TouchableOpacity>
        </>
    )
}
export default Municipio;
