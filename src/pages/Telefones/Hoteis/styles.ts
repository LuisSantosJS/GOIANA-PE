import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemContainer: {
        width: width,
        height: width * 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemView: {
        width: '95%',
        height: '85%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    itemIMG: {
        width: '35%',
        height: '90%'
    },
    columnTextView: {
        width: '50%',
        height: '90%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    endViewItem: {
        width: '7%',
        height: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    arrowDia: {
        width: width * 0.08,
        height: width * 0.08,
        borderRadius: (width * 0.08) / 2,
        backgroundColor: '#4A0201',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemDia: {
        width: width * 0.05,
        height: width * 0.05,
    },
    itemTextTitle: {
        color: '#707070',
        fontSize: width * 0.05,
        fontWeight: '700',
        textAlign: 'left'
    },
    itemText: {
        color: '#707070',
        fontSize: width * 0.030,
        fontWeight: '700',
        width: '100%',
        textAlign: 'justify',
        height: '80%'
    }
});
export default styles;