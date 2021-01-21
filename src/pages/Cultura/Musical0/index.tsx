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
import Hero from '../../../assets/musical/musical.png'
const Musical0: React.FC = () => {
    const navigation = useNavigation()

    const handleWebView = () => {
        navigation.navigate('WebViewPage', { url: 'https://pt.wikipedia.org/wiki/Curica_(banda)' })
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={Hero} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Fundada no dia 25 de novembro de 1849, em Goiana, Pernambuco, a banda de música Saboeira era filiada ao Partido Liberal, enquanto a sua rival Curica pertencia ao Partido Conservador.</Text>
                    <View style={styles.separate} />
                    <Text style={styles.text}>Há duas versões para a origem do nome: a primeira diz que, como no início a banda não tinha fardamento próprio, os músicos tinham que lavar sua melhor roupa para se apresentar e por isso os adversários os chamavam de "saboeiros", referindo-se ao sabão com que lavavam as roupas. </Text>
                    <View style={styles.separate} />


                    <View style={styles.separate} />
                    <View style={styles.separate} />

                </View>
                <View style={{ ...styles.separate, height: 300 }} />
            </ScrollView>
        </>
    )
}
export default Musical0;