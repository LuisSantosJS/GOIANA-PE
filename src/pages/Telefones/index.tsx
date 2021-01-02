import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import styles from './styles'
import FastImage from 'react-native-fast-image'
import { getStatusBarHeight } from 'react-native-status-bar-height';
//@ts-ignore
import HoteisLogo from '../../assets/hoteis.png'
//@ts-ignore
import TelefoneLogo from '../../assets/telefone.png'
//@ts-ignore
import Delivery from '../../assets/delivery.png'
//@ts-ignore
import PoliLogo from '../../assets/poli.png'
//@ts-ignore
import LancheLogo from '../../assets/lanche.png'
//@ts-ignore
import EatLogo from '../../assets/eat.png'
//@ts-ignore
import Logo from '../../assets/logo.png'
//@ts-ignore
import Chapeu from '../../assets/chapeu.png'
const Telefones: React.FC = () => {
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
                        Olá, seja bem vindo ao nosso
                        portal de turismo <Text style={{ color: '#191919' }}>Goianense</Text>.
                    </Text>
                </View>
                <View style={styles.cilindro}>
                    <Text style={styles.textCilindro}>Locais e telefones de contato</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={styles.rowBolinhas}>
                            <View style={styles.bolinhas}>
                                <FastImage source={HoteisLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={EatLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={LancheLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </View>
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
                            <View style={[styles.bolinhas]}>
                                <FastImage source={Delivery} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={TelefoneLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={{ ...styles.bolinhas, borderWidth: 0 }} />

                        </View>
                        <View style={{ ...styles.roWNOmesBolina }}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Delivery
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Guia ed Serviço
                            </Text>
                            <Text style={styles.textBolinas} />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.minBorder} />
        </>
    )
}
export default Telefones;
