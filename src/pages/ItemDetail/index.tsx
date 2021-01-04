import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image'
import {
    View,
    ScrollView,
    TouchableOpacity,
    Linking,
    Text,
} from 'react-native';
interface Props {
    route: {
        params: {
            title: string;
            description: string;
            image: any;
            url: string;
        }
    }
}
const ItemDetail: React.FC<Props> = ({ route }) => {
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <FastImage source={route.params.image} resizeMode={FastImage.resizeMode.contain} style={styles.banner} />
                    <View style={styles.separate} />
                    <Text style={styles.textTitle}>{route.params.title}</Text>
                    <Text style={styles.text}>{route.params.description}</Text>
                    <View style={styles.separate} />
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>  Linking.openURL(route.params.url)} style={styles.vermais}>
                        <Text style={styles.textVermais}>Ver Mais</Text>
                    </TouchableOpacity>
                </View>
           
                <View style={{ ...styles.separate, height: 200 }} />
            </ScrollView>
        </>
    )
}
export default ItemDetail;