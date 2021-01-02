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
import CablocoLogo from '../../assets/cabloco.png'
//@ts-ignore
import HeroiLogo from '../../assets/heroi.png'
//@ts-ignore
import CuricaLogo from '../../assets/curica.png'
//@ts-ignore
import PoliLogo from '../../assets/poli.png'
//@ts-ignore
import AparaLogo from '../../assets/apara.png'
//@ts-ignore
import ArteLogo from '../../assets/arte.png'
//@ts-ignore
import TurismoLogo from '../../assets/turismo.png'
//@ts-ignore
import TurismoRuralLogo from '../../assets/Trural.png'
//@ts-ignore
import PraiaLogo from '../../assets/praia.png'
//@ts-ignore
import Logo from '../../assets/logo.png'
//@ts-ignore
import Chapeu from '../../assets/chapeu.png'
const Cultura: React.FC = () => {
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
                    <Text style={styles.textCilindro}>Conheça Goiana</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}  style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={styles.rowBolinhas}>
                            <View style={styles.bolinhas}>
                                <FastImage source={CablocoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={HeroiLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={AparaLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </View>
                        <View style={styles.roWNOmesBolina}>
                            <Text style={styles.textBolinas}>
                                Caboclinhos
                            </Text>
                            <Text style={styles.textBolinas}>
                                Heroínas de
                                tejucupapo
                            </Text>
                            <Text style={styles.textBolinas}>
                                Aparauá
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <View style={styles.bolinhas}>
                                <FastImage source={CuricaLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={TurismoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={TurismoRuralLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                        </View>
                        <View style={styles.roWNOmesBolina}>
                            <Text style={styles.textBolinas}>
                                Curica
                                saboeira
                            </Text>
                            <Text style={styles.textBolinas}>
                                Turismo
                                religioso

                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Turismo
                                Rural
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <View style={styles.bolinhas}>
                                <FastImage source={PraiaLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={styles.bolinhas}>
                                <FastImage source={ArteLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </View>
                            <View style={{ ...styles.bolinhas, borderWidth: 0 }} />

                        </View>
                        <View style={styles.roWNOmesBolina}>
                            <Text style={styles.textBolinas}>
                                Praias
                            </Text>
                            <Text style={styles.textBolinas}>
                                Artesãos
                                goianenses
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
export default Cultura;
