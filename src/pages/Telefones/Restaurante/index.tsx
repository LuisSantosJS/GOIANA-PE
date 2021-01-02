import React from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import { Restaurante, RestauranteMocks } from '../../../mocks/restaurantes'
import styles from './styles'
import FastImage from 'react-native-fast-image';
//@ts-ignore
import DiaLogo from '../../../assets/dia.png'
const Restaurantes: React.FC = () => {

    const _renderItem = (item: Restaurante, index: number) => {
        return (
            <View key={index} style={styles.itemContainer}>
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
            </View>
        )
    }
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={RestauranteMocks}
                    keyExtractor={(item) => String(item.title)}
                    renderItem={({ item, index }: any) => _renderItem(item, index)}
                />
            </View>
        </>
    )
}
export default Restaurantes;