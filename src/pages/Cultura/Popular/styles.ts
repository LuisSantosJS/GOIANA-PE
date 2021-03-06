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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        minWidth: width * (width*0.1),
        height: width * 0.35,
        backgroundColor: '#4A0201',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: width * 0.44,
        height: width * 0.44
    },
    rowWellView: {
        width: '100%',
        height: width * 0.24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chapeu: {
        width: width * 0.14,
        height: width * 0.14
    },
    wellTRext: {
        width: '70%',
        padding: 10,
        textAlign: 'center',
        fontWeight: '400',
        fontSize: width * 0.045,
        color: '#707070'

    },
    cilindro: {
        width: '90%',
        height: width * 0.09,
        borderRadius: width * 0.08,
        backgroundColor: '#4A0201',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCilindro: {
        color: 'white',
        textAlign:'center',
        fontSize: width * 0.045
    },
    rowBolinhas: {
        width: '90%',
        height: width * 0.30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    bolinhas: {
        width: width * 0.23,
        height: width * 0.23,
        borderRadius: (width * 0.23) / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4A0201',

    },
    sombra: {
        // shadowOffset: Platform.OS === 'android' ? { width: 0, height: 0 } : { width: 4, height: 4 },
        // shadowColor: 'rgba(0,0,0,0.4)',
        // shadowOpacity: Platform.OS === 'android' ? 0 : 1.0,
        // elevation: Platform.OS === 'android' ? 0 : 1
    },
    bolinhasIMages: {
        width: width * 0.2,
        height: width * 0.2
    },
    bolinhasIMages0: {
        width: width * 0.14,
        height: width * 0.14
    },
    roWNOmesBolina: {
        width: '90%',
        height: width * 0.06,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textBolinas: {
        width: '30%',
        textAlign: 'center',
        textAlignVertical:'top',
        

        color: '#707070',
        fontFamily: 'Poppins-Regular',
        fontSize: width * 0.045
    },
    minBorder: {
        backgroundColor: '#4A0201',
        width: width,
        height: 15
    },
    backbutton: {
        position: 'absolute',
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: (width * 0.12) / 2,
        backgroundColor: 'white',
        top: Number(width * 0.04 + getStatusBarHeight(true)),
        left: width * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow: {
        width: width * 0.06,
        height: width * 0.06
    }
});
export default styles;