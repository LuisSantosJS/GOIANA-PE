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
import Fundo from '../../assets/fundo.png'
//@ts-ignore
import Chapeu from '../../assets/chapeu.png'
//@ts-ignore
import Arrow from '../../assets/arrow.png'
import { RectButton } from 'react-native-gesture-handler';

const Roteiros: React.FC = () => {
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
                    <Text style={styles.wellTRext}>
                        Olá, seja bem vindo(a) ao nosso
                        portal de turismo e cultura<Text style={{ color: '#191919' }}> Goianense</Text>.
                    </Text>
                </View>
                <View style={styles.cilindro}>
                    <Text style={styles.textCilindro}>Nossa cultura popular</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={{ padding: 10 }} />
                        <RectButton onPress={() => navigation.navigate('Congo')} style={styles.buttons}>
                            <Text style={styles.textButtons}>PRETINHAS DO CONGO</Text>
                        </RectButton>

                        <View style={{ padding: 10 }} />
                        <RectButton onPress={() => navigation.navigate('Burras')} style={styles.buttons}>
                            <Text style={styles.textButtons}>BURRINHAS</Text>
                        </RectButton>

                        <View style={{ padding: 10 }} />
                        <RectButton onPress={() => navigation.navigate('Clube')} style={styles.buttons}>
                            <Text style={styles.textButtons}>CLUBE CARNAVALESCO LENHADORES</Text>
                        </RectButton>

                        <View style={{ padding: 10 }} />
                        <RectButton onPress={() => navigation.navigate('Ursos')} style={styles.buttons}>
                            <Text style={styles.textButtons}>URSOS</Text>
                        </RectButton>

                        <View style={{ padding: 10 }} />
                        <RectButton onPress={() => navigation.navigate('Sergio')} style={styles.buttons}>
                            <Text style={styles.textButtons}>SERGINHO DA BURRA</Text>
                        </RectButton>

                        <View style={{ padding: 10 }} />
                        <RectButton onPress={() => navigation.navigate('Morto')} style={styles.buttons}>
                            <Text style={styles.textButtons}>MORTO CARREGANDO O VIVO</Text>
                        </RectButton>
                    </View>
                </ScrollView>

            </View>

            <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={styles.backbutton}>
                <FastImage source={Arrow} resizeMode={FastImage.resizeMode.contain} style={styles.arrow} />
            </TouchableOpacity>
        </>
    )
}

export default Roteiros;