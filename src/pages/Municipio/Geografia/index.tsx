import React from 'react';
import styles from './styles';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
//@ts-ignore
import Geos from '../../../assets/geos.png'
import { RectButton } from 'react-native-gesture-handler'
const Geografia: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'http://goianape.com.br' })
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={Geos} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>O município de Goiana está localizado na Bacia hidrográfica do Rio Goiana, possui poucas montanhas, possui diversas praias e seu clima é tropical. De acordo com a divisão regional vigente desde 2017, instituída pelo IBGE, o município pertence às Regiões Geográficas Intermediária do Recife e Imediata de Goiana-Timbaúba. Até então, com a vigência das divisões em microrregiões e mesorregiões, fazia parte da microrregião da Mata Setentrional Pernambucana, que por sua vez estava incluída na mesorregião da Mata Pernambucana.</Text>
                    <View style={styles.separate} />
                    {/* <RectButton onPress={handleWebView} activeOpacity={0.7} style={styles.mais}>
                        <Text style={styles.textSub}>Ver Mais</Text>
                    </RectButton> */}
                    <View style={styles.separate} />
                    <View style={styles.separate} />

                </View>
                <View style={{ ...styles.separate, height: 200 }} />
            </ScrollView>
        </>
    )
}
export default Geografia;