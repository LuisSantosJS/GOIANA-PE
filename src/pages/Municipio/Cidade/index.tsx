import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image'
//@ts-ignore
import CidadeLogo from '../../../assets/cidade.png'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
const Cidade: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'https://goianape.com.br/a-cidade/' })
    }
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <FastImage source={CidadeLogo} resizeMode={FastImage.resizeMode.contain} style={styles.logo} />
                    <View style={styles.separate} />
                    <View style={styles.conn}>
                        <Text style={styles.textBold}>Localização do Município:</Text>
                        <Text style={styles.text}>Mesorregião Mata Pernambucana; Microrregião Mata Norte Pernambucana </Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Distância do Recife:</Text> 62 km</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Rodovias de Acesso ao Município:</Text> BR-101 Norte</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Municípios limítrofes: </Text> Norte – Paraíba; Sul – Itaquitinga, Igarassu, Itamaracá, Itapissuma; Leste – Oceano Atlântico; Oeste – Condado e Itambé.</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Área (Km2):</Text> 501,170</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Altitude (m): </Text> 13</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Temperatura Média Anual: </Text> 25º C</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>População (Hab.): </Text>  85.644</Text>
                        <View style={styles.separate} />
                        <Text style={styles.text}> <Text style={styles.textBold}>Meses de Maior Incidência de Chuvas:  </Text>   Junho e julho</Text>
                        <View style={styles.separate} />

                    </View>

                    <TouchableOpacity onPress={handleWebView} activeOpacity={0.7} style={styles.mais}>
                        <Text style={styles.textSub}>Ver Mais</Text>
                    </TouchableOpacity>
                    <View style={styles.separate} />
                    <View style={styles.separate} />
                </View>
            </ScrollView>
        </>
    )
}
export default Cidade;