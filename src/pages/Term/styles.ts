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
        padding:20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text: {
        textAlign: 'justify',
        width: '90%',
        fontFamily: 'Poppins-Regular',
        color: '#707070',
        fontSize: width*0.045
    }
});
export default styles;