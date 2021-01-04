import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'
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
    minBorder: {
        backgroundColor: '#4A0201',
        width: width,
        height: 15
    },
    logo: {
        width: width * 0.5,
        height: width * 0.5,
    },
    bannerCenter: {
        width: width,
        height: width * 0.3,
        backgroundColor: '#4A0201',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBanner: {
        color: 'white',
        width: '70%',
        textAlign: 'center',
    
        fontWeight: 'bold',
        fontSize: width * 0.05

    },
    viewrest: {
        width: width,
        height: '47%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textWellcome: {
        color: '#707070',
        fontSize: width * 0.045,
        padding: 10,
        textAlign: 'center',
        width: '70%'
    },
    buttons: {
        width: width * 0.7,
        height: width * 0.12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#4A0201',
        borderRadius: width * 0.06,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtons: {
        color: '#4A0201',
        fontSize: width * 0.045,
        padding: 10,
        textAlign: 'center',
        fontWeight: '600'
    },
    floats: {
        position: 'absolute',
        top: width * 0.07+ getStatusBarHeight(true),
        backgroundColor:'#4A0201',
        width: width*0.1,
        height: width*0.1,
        borderRadius: width*0.05,
        left: width - width*0.13,
        alignItems:'center',
        justifyContent:'center'
        
    },
    info:{
        width:'50%',
        height: '50%'
    }
});
export default styles;