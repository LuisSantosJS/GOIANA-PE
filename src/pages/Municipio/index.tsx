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
                    <Text style={styles.textCilindro}>Conheça mais sobre nosso município.</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <View style={styles.rowBolinhas}>
                            <View style={styles.bolinhas}>
                                <FastImage source={CidadeLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={HistoriaLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={GeoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </View>
                        <View style={styles.roWNOmesBolina}>
                            <Text style={styles.textBolinas}>
                                A cidade
                            </Text>
                            <Text style={styles.textBolinas}>
                                Historia
                            </Text>
                            <Text style={styles.textBolinas}>
                                Geografia
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <View style={styles.bolinhas}>
                                <FastImage source={DemoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={PoliLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={TelefoneLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </View>
                        <View style={styles.roWNOmesBolina}>
                            <Text style={styles.textBolinas}>
                                Demografia
                            </Text>
                            <Text style={styles.textBolinas}>
                                Política
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Telefones Úteis
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.minBorder} />
        </>
    )
}
export default Municipio;
