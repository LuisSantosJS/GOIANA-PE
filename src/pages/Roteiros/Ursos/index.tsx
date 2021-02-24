import React from 'react';
import FastImage from 'react-native-fast-image'
import styles from './styles';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
//@ts-ignore
import Logo from '../../../assets/ursos.png'

const Ursos: React.FC = () => {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Bloco composto de foliões reunidos em torno do domador levando um urso. O domador encarrega-se de recolher as contribuições dos assistentes. Pode ser acompanhado de pequena orquestra e contar ou não com presença do caçador.</Text>
                    <View style={{padding: 7}}/>
                </View>
            </ScrollView>
        </>
    )
}
export default Ursos;