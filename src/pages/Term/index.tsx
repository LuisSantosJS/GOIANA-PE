import React from 'react';
import styles from './styles'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
const Term: React.FC = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Com base no crescimento econômico da cidade decorrente das instalações de grandes empresa nacionais e multinacionais tais como FIAT , Companhia Brasileira de Vidros Planos - CBVP  , Empresa Brasileira de Hemoderivados e Biotecnologia - Hemobrás ( Primeira empresa da America Latina ) e também grandes empreendimentos imobiliários Nortville ( Primeiro bairro planejado da Mata Norte ) em nossa cidade como também como a democratização do acesso internet em lugares públicos de uso coletivo e a carência de informação da por parte dos nativos quanto os visitantes  foi visto a necessidade da criação de um veiculo de divulgação no que se refere a união de informação em um mesmo local disponível em um veiculo de comunicação de fácil acesso que é a internet onde pode serem  encontrados:
                </Text>
                    <Text style={[styles.text, { textAlign: 'left' }]}>
                        •	Entretenimento;
                    </Text>
                    <Text style={[styles.text, { textAlign: 'left' }]}>
                        •	Gastronômico;
                    </Text>
                    <Text style={[styles.text, { textAlign: 'left' }]}>
                        •	Negócio;
                    </Text>
                    <Text style={[styles.text, { textAlign: 'left' }]}>
                        •	Religioso;
                    </Text>
                    <Text style={[styles.text, { textAlign: 'left' }]}>
                        •	Turístico;
                    </Text>
                    <Text style={[styles.text, { textAlign: 'left' }]}>
                        •	Cultural.
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}
export default Term;