import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        flexDirection: 'column',
        minHeight: height,
        maxHeight: undefined,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    containerView:{
        width: width,
        alignItems:'center',
        height: 350,
        justifyContent:'center',


    },

    containerView0:{
        width: width,
        alignItems:'center',
        height: 500,
        justifyContent:'center',
    },
    asfeview:{
        width:'98%',
        height: '94%',
        alignItems:'center',

        backgroundColor:'white',
        flexDirection:'column',

    },
    banner:{
        width:'100%',
        height: 230,
    },
    title:{
        color:'#4A0201',
        fontWeight:'400',
        textAlign:'center',
        fontSize: width*0.045,
        padding: 10
    },
    desc:{
        color:'#707070',
        fontWeight:'400',
        fontSize: width*0.045,
        textAlign:'justify',
        width:'90%',
        padding: 4,
        height: '25%'
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
});
export default styles;