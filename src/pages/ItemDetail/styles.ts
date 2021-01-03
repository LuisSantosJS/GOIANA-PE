import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        minHeight: height,
        maxHeight: undefined,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    banner:{
        width: '100%',
        height: '45.4%'
    },
    text:{
        width:'85%',
        textAlign:'justify',
        color:'#707070',
        fontSize: width*0.045

    },
    textTitle:{
        width:'85%',
        textAlign:'center',
        color:'#707070',
        fontWeight: '700',
        fontSize: width*0.05,
        padding: 10
    },
    mais: {
        width: width * 0.4,
        height: width * 0.1,
        borderRadius: width * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A0201'
    },
    textSub: {
        color: 'white',
        fontSize: width * 0.055,
        fontWeight:'700'
    },
    separate: {
        padding: 10
    },
});
export default styles;