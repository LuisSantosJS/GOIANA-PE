import React from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import { Reglisgi, Religi } from '../../../mocks/Religioso'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native';
const Religioso: React.FC = () => {

    const navigation = useNavigation()
    const handleWebView = (url: string) => {
        navigation.navigate('WebViewPage', { url: url })
    }

    const _renderItem = (item: Reglisgi, index: number) => {
        if (String(item.description).length === 0) {
            return (
                <>
                    <View style={styles.containerView}>
                        <View style={styles.asfeview}>
                            <FastImage source={item.image} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => handleWebView(item.url)} activeOpacity={0.7} style={styles.mais}>
                                <Text style={styles.textSub}>Ver Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )
        }
        return (
            <>
                <View style={styles.containerView0}>
                    <View style={styles.asfeview}>
                        <FastImage source={item.image} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text lineBreakMode='tail' style={styles.desc}>{item.description}</Text>
                        <TouchableOpacity onPress={() => handleWebView(item.url)} activeOpacity={0.7} style={styles.mais}>
                            <Text style={styles.textSub}>Ver Mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )

    }
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={Religi}
                    keyExtractor={(item) => String(item.title)}
                    renderItem={({ item, index }: any) => _renderItem(item, index)}
                />
            </View>
    
        </>
    )
}
export default Religioso;