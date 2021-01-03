interface Arte {
    title: string;
    description: string;
    image: any;
    url: string;
}

const Artesd: Arte[] = [
    {
        title: 'Zé do Carmo (Em Memória)',
        description: 'José do Carmo Sousa, ou Zé do Carmo nasceu em Goiana, em 1933 e é considerado desde 2002 um patrimônio vivo de Pernambuco. Em 1940, aos sete anos aprendeu com sua mãe a fazer brinquedos de barro para vender na feira. Com dez anos foi ser sacristão, mas depois deixou ...',
        image: require('../../assets/carmo/carmo.png'),
        url: 'https://goianape.com.br/ze-do-carmo-em-memoria/'
    },
    {
        title: 'Mestre Lourenço Luna',
        description: 'Espécie nativa das Américas, presente em quase todo território brasileiro, a cana-brava, de folhas cortantes e cujo caule pode atingir até dez metros de altura, encontrou destinação peculiar em Ponta de Pedras, distrito do município de Goiana, Zona da Mata Norte de Pernambuco. Depois de um longo e difícil processo, ...',
        image: require('../../assets/carmo/luna.png'),
        url: 'https://goianape.com.br/mestre-lourenco-luna/'
    },
    {
        title: 'Mestre Luiz Gonzaga',
        description: 'Luiz Gonzaga Vitorino Nunes nasceu no município de Goiana, Zona da Mata Norte pernambucana, no dia 24 de agosto de 1948, e desde muito pequeno teve no barro a sua principal referência de vida. Em casa, recebeu influência do pai, Darciano Vitorino Nunes, que durante anos exerceu a atividade de ...',
        image: require('../../assets/carmo/go.png'),
        url: 'https://goianape.com.br/mestre-luiz-gonzaga/'
    },
    {
        title: 'Mestre Luis Carlos',
        description: 'Não seria diferente para Luiz Carlos Ferreira da Silva, tendo nascido em Goiana, município da Zona da Mata Norte que tem como referencial a rica tradição artesanal figurativa, e vindo de família de artesãos, que o barro fosse a matéria prima com a qual modelou a vida. Sobrinho de Luiz ...',
        image: require('../../assets/carmo/ca.png'),
        url: 'https://goianape.com.br/mestre-luis-carlos/'
    },
    {
        title: 'Mestre TOG',
        description: 'Antônio José da Silva, o mestre Tog, é um dos grandes nomes da cerâmica figurativa do município de Goiana, Zona da Mata Norte pernambucana. Nasceu no dia 14 de maio de 1958 e cresceu tendo o barro como elemento de suas brincadeiras – condição da qual quase todas as crianças ...',
        image: require('../../assets/carmo/tog.png'),
        url: 'https://goianape.com.br/mestre-tog/'
    },
    {
        title: 'Edilson Oliveira',
        description: 'Caçula de uma pequenina e humilde família nordestina, Edilson Oliveira da Silva nasceu em uma tarde tranquila e pálida do mês de novembro. Era o ano de 1981 quando decidiu vir ao mundo de forma frágil e franzina na tradicional e revolucionária cidade de Goiana que esta inserida neste mosaico ...',
        image: require('../../assets/carmo/oli.png'),
        url: 'https://goianape.com.br/edilson-oliveira/'
    },
    {
        title: 'Mario José da Silva (Tempero)',
        description: 'NOME:  Mario Jose da Silva (TEMPERO) TELEFONE: 81-92054974 ENDEREÇO:  Vila Castelo Branco, Q b Lote 9 – 48 TIPOLOGIA DO ARTESANATO: Artesanato com Marisco, Madeira e reciclados',
        image: require('../../assets/carmo/me.png'),
        url: 'https://goianape.com.br/mario-jose-da-silva-tempero/'
    },
]
export { Artesd }

export type { Arte }