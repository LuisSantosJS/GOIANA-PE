import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
interface Props {
    route: { params: { url: string } }
}
const WebViewPage: React.FC<Props> = (props) => {
    const [loading, setLoading] = useState<boolean>(true)
    return (
        <>
            <View style={styles.container} >
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={{ color: '#FFF' }}
                />
                <WebView
                    useWebKit={false}
                    renderLoading={() => <ActivityIndicator size='large' color={'black'} />}
                    style={styles.web}
                    onLoadStart={() => setLoading(true)}
                    onLoad={() => setLoading(false)}
                    onLoadEnd={() => setLoading(false)}
                    source={{ uri: props.route.params.url }}
                />
            </View>
        </>
    )
}
export default WebViewPage;