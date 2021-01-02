import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
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
        width: width,
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
        fontWeight: '700',
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
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor:'#4A0201'
    },
    bolinhasIMages:{
        width: width * 0.14,
        height: width * 0.14
    },
    roWNOmesBolina:{
        width: '90%',
        height: width*0.09,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textBolinas:{
        width: '30%',
        textAlign:'center',
        color:'#707070',
        fontSize: width*0.045
    },
    minBorder: {
        backgroundColor: '#4A0201',
        width: width,
        height: 15
    }
});
export default styles;