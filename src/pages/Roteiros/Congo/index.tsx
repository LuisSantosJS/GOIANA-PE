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
import Logo from '../../../assets/congo.png'

const Congo: React.FC = () => {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <FastImage source={Logo} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <Text style={styles.text}>Como no maracatu, as toadas das Pretinhas do Congo louvam o rei e a rainha da nação, bem como a Nossa Senhora do Rosário, e os Pretos Velhos da Jurema, ramificação com traços indígenas da umbanda. De fato, o sincretismo religioso é uma das características mais marcantes das Pretinhas do Congo.</Text>
                    <View style={{padding: 7}}/>
                    <Text style={styles.text}>Os instrumentos de percussão tocam a congada, ritmo de canções que surgiram nas senzalas. A dança parece ser um samba, mas possui aspectos que lhe são característicos; é como se a sambada das Pretinhas do Congo fosse o ancestral do samba que é dançado atualmente.</Text>
                    <View style={{padding: 7}}/>
                    <Text style={styles.text}>O único município de Pernambuco onde essa manifestação cultural está presente é Goiana. </Text>
                </View>
            </ScrollView>
        </>
    )
}
export default Congo;