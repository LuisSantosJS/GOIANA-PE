import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
//@ts-ignore
import Arrow from '../../assets/arrow.png'
//@ts-ignore
import CablocoLogo from '../../assets/cabloco.png'
//@ts-ignore
import HeroiLogo from '../../assets/heroi.png'
//@ts-ignore
import CuricaLogo from '../../assets/aa.png'
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
import Curica from '../../assets/curica.png'
//@ts-ignore
import Fundo from '../../assets/fundo.png'
//@ts-ignore
import Chapeu from '../../assets/chapeu.png'
//@ts-ignore
import PopularLogo from '../../assets/popular.png'
const Cultura: React.FC = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#4A0201' }} />
            <View style={styles.container}>
                <FastImage source={Fundo} resizeMode={FastImage.resizeMode.contain} style={styles.header} />
                <View style={styles.rowWellView}>
                    <FastImage source={Chapeu} style={styles.chapeu} resizeMode={FastImage.resizeMode.contain} />
                    <Text style={{ ...styles.wellTRext }}>
                        <Text style={{ fontWeight: 'bold' }}>Olá!</Text> Conheça um pouco mais da nossa cultura e nossos atrativos turísticos
                    </Text>
                </View>
                <View style={styles.cilindro}>
                    <Text style={styles.textCilindro}>Conheça Goiana!</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Caboclo')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={CablocoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Heroinas')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={HeroiLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Aparaua')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={AparaLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 10 }} />
                        <View style={styles.roWNOmesBolina}>
                            <Text numberOfLines={1} style={[styles.textBolinas]}>
                                Caboclinhos
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Heroínas de
                                tejucupapo

                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Aparauá
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Musical')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={CuricaLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Religioso')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={TurismoLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Rural')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={TurismoRuralLogo} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 10 }} />
                        <View style={styles.roWNOmesBolina}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Banda Musical
                                Curica
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Turismo
                                religioso

                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Turismo
                                Rural
                            </Text>
                        </View>

                        <View style={styles.rowBolinhas}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Musical0')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={Curica} style={styles.bolinhasIMages0} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Artesao')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={ArteLogo} style={styles.bolinhasIMages} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Popular')} style={[styles.bolinhas, styles.sombra]}>
                                <FastImage source={PopularLogo} style={[styles.bolinhasIMages0]} resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ padding: 10 }} />
                        <View style={styles.roWNOmesBolina}>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Banda Musical
                                Saboeira
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Artesãos
                                goianenses
                            </Text>
                            <Text numberOfLines={2} style={styles.textBolinas}>
                                Cultura
                                Popular
                            </Text>
                        </View>
                    </View>
                    <View style={{ padding: 10 }} />
                    <View style={{ padding: 10 }} />
                </ScrollView>
            </View>
            <View style={styles.minBorder} />
            <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={styles.backbutton}>
                <FastImage source={Arrow} resizeMode={FastImage.resizeMode.contain} style={styles.arrow} />
            </TouchableOpacity>
        </>
    )
}
export default Cultura;
