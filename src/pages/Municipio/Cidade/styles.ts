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
    logo: {
        width: width * 0.3,
        height: width * 0.3,
    },
    separate: {
        padding: 10
    },
    textBold: {
        color: '#141414',
        fontSize: width * 0.040,
        padding: 4
    },
    text: {
        color: '#707070',
        fontSize: width * 0.040,
        padding: 4
    },
    conn: {
        width: '95%'
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
    }
});
export default styles;