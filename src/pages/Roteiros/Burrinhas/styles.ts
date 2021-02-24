import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        minHeight: height,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text:{
        width:'85%',
        textAlign:'justify',
        color:'#707070',
        fontSize: width*0.045
    },
    banner:{
        width: '90%',
        height: '40%'
    },
});
export default styles;