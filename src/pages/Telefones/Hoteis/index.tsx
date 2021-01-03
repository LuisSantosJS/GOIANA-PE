import React from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { HoteisMocks, Hotels } from '../../../mocks/hoteis'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import FastImage from 'react-native-fast-image';
//@ts-ignore
import DiaLogo from '../../../assets/dia.png'
const Hoteis: React.FC = () => {
    const navigation = useNavigation()

    const handleDetail = (item: Hotels) =>{
        //ItemDetail
        navigation.navigate('ItemDetail', item)
    }

    const _renderItem = (item: Hotels, index: number) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={()=> handleDetail(item)} key={index} style={styles.itemContainer}>
                <View style={styles.itemView}>
                    <FastImage source={item.image} resizeMode={FastImage.resizeMode.contain} style={styles.itemIMG} />
                    <View style={styles.columnTextView}>
                        <Text numberOfLines={1} style={styles.itemTextTitle}>{item.title}</Text>
                        <Text lineBreakMode='tail' style={styles.itemText}>{item.description}</Text>
                    </View>
                    <View style={styles.endViewItem}>
                        <View style={styles.arrowDia}>
                            <FastImage source={DiaLogo} resizeMode={FastImage.resizeMode.contain} style={styles.itemDia} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={HoteisMocks}
                    keyExtractor={(item) => String(item.title)}
                    renderItem={({ item, index }: any) => _renderItem(item, index)}
                />
            </View>
        </>
    )
}
export default Hoteis;