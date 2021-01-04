import { Platform, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    banner:{
        width:'100%',
        height:'40%'

    },
    text:{
        textAlign:'center',
        color:'#707070',
        padding:5,
        fontSize: 12
    }
});
export default styles;