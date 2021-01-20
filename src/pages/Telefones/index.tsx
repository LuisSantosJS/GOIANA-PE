import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Toast from 'react-native-simple-toast';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { getStatusBarHeight } from 'react-native-status-bar-height';
//@ts-ignore
import Arrow from '../../assets/arrow.png'
//@ts-ignore
import HoteisLogo from '../../assets/hoteis.png'
//@ts-ignore
import TelefoneLogo from '../../assets/telefone.png'
//@ts-ignore
import Delivery from '../../assets/delivery.png'

//@ts-ignore
import LancheLogo from '../../assets/lanche.png'
//@ts-ignore
import EatLogo from '../../assets/eat.png'
//@ts-ignore
import Fundo from '../../assets/fundo.png'
//@ts-ignore
import Chapeu from '../../assets/chapeu.png'
const Telefones: React.FC = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    }

    const notAction = () => {
        Toast.showWithGravity('Funcionalidade indisponível', Toast.LONG, Toast.TOP);
    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#4A0201' }} />
            <View style={styles.container}>
                <FastImage source={Fundo} resizeMode={FastImage.resizeMode.contain} style={styles.header} />
                <View style={styles.rowWellView}>
                    <FastImage source={Chapeu} style={styles.chapeu} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={styles.wellTRext}>
                        Olá! Aqui você encontra os melhores locais e serviços de nossa cidade.
                    </Text>
                </View>
                <View style={styles.cilindro}>
                    <Text style={styles.textCilindro}>Locais e telefones de contato</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Hoteis')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={HoteisLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Restaurantes')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={EatLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={notAction} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={LancheLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 10 }} />
                        <View style={styles.roWNOmesBolina}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Hotéis
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Restaurantes
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Lanchonetes
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity activeOpacity={0.7} onPress={notAction} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={Delivery} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={notAction} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={TelefoneLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <View style={{ ...styles.bolinhas, borderWidth: 0 }} />

                        </View>
                        <View style={{ padding: 10 }} />
                        <View style={{ ...styles.roWNOmesBolina }}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Delivery
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Guia de Serviço
                            </Text>
                            <Text style={styles.textBolinas} />
                        </View>
                        <View style={{ padding: 10 }} />
                        <View style={{ padding: 10 }} />
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
export default Telefones;
