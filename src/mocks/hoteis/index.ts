
interface Hotels {
    title: string;
    image: any;
    description: string;
}
const HoteisMocks: Hotels[] = [
    {
        title: 'RAINHA HOTEL',
        description: `Um local tranquilo, agradável e aconchegante, próximo de bancos, academias, restaurantes, praças, enfim, de tudo o que você precisa para usufruir de uma ótima estadia em Goiana. Café da manhã incluído, com o melhor da gastronomia regional.`,
        image: require('../../assets/hoteis/rainha.png')
    },
    {
        title: 'GOYANNA HOTEL',
        description: `Seja a negócios ou a lazer, a sua melhor opção de hospedagem em Goiana, projetado para atendê-lo com bastante conforto, bom atendimento e custo-benefício.`,
        image: require('../../assets/hoteis/goyanna.png')
    },
    {
        title: 'POUSADA ATAPUZ',
        description: `A Pousada Atapuz tem suítes temáticas com nomes relacionados ao mar e a rusticidade da  região de mangue e matade restinga, onde está inserida. A decoração, feita pelos donos e artesãos locais, traz certa rusticidade e acolhimento.`,
        image: require('../../assets/hoteis/atapuz.png')
    },
    {
        title: 'HOTEL ABBA GOIANA',
        description: `O Hotel Abba Goiana PE dispõe de restaurante, academia, bar e lounge compartilhado em Goiana. Todos os quartos dispõem de TV de tela plana com canais via satélite e banheiro privativo. A propriedade dispõe de piscina ao ar livre, Wi-Fi gratuito e estacionamento privativo de cortesia.`,
        image: require('../../assets/hoteis/abba.png')
    },
    {
        title: 'GOIANA PALACE HOTEL',
        description: `O Goiana Palace Hotel está situado em Goiana. Entre as comodidades da propriedade estão um restaurante, recepção 24 horas e serviço de quarto, além de Wi-Fi gratuito em toda a propriedade. `,
        image: require('../../assets/hoteis/palace.png')
    },
    {
        title: 'HOTEL PONTA DE PEDRAS',
        description: `Localizado à beira mar, o Hotel Ponta de Pedras oferece uma estrutura ideal para uma temporada em um verdadeiro paraíso. Nossa simpática equipe está capacitada para atender às necessidades dos nossos hóspedes, além de indicar os melhores programas de turismo na cidade de Goiana.`,
        image: require('../../assets/hoteis/ponta.png')
    },
]
export { HoteisMocks }
export type { Hotels }