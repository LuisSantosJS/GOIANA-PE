
interface Restaurante {
    title: string;
    image: any;
    description: string;
    url: string,
}
const RestauranteMocks: Restaurante[] = [
    {
        title: 'BURACO DA GIA',
        description: `Restaurante à la carte com destaque ao peixe com molho de camarão e guaiamum com pirão, em atmosfera cordial. Para levar, Reservas, Lugares para sentar, Acesso para cadeirantes, Serviço de mesa, Serve bebida alcoólica`,
        image: require('../../assets/restaurantes/buraco.png'),
        url: 'https://www.facebook.com/buraco.dagia/'
    },
    {
        title: 'CHURRASCARIA ARREIO DE PRATA ',
        description: `Rodízio de carnes assadas na brasa, mais saladas e pratos quentes, em ambiente amplo, climatizado e familiar.`,
        image: require('../../assets/restaurantes/arreio.png'),
        url: 'https://www.facebook.com/churrascaria.arreiodeprata/'
    },
    {
        title: 'CASARÃO GRILL GOIANA',
        description: `Rodízio de carnes na brasa, Saladas e buffet. Ambiente climatizado e familiar.`,
        image: require('../../assets/restaurantes/grill.png'),
        url: 'https://www.facebook.com/casaraogrillgoiana/'
    },
    {
        title: 'CHURRASCARIA O GAUCHINHO',
        description: `Rodízio de carnes na brasa, Saladas e buffet.`,
        image: require('../../assets/restaurantes/gaucho.png'),
        url: 'https://www.facebook.com/Churrascaria-O-Gauchinho-593174200749566/'
    },
    {
        title: 'MATSU RESTAURANTE',
        description: `Pratos executivos com churrasco, fartas pizzas e combinados de sushis e sashimis, em espaço casual e delivery. `,
        image: require('../../assets/restaurantes/natsu.png'),
        url: 'https://www.facebook.com/pages/Restaurante-Matsu/750783308331311'
    },
    {
        title: 'CAMARÃO NA TELHA',
        description: `De frente para o mar, um lugar de gente do bem que gosta de comer, beber, amar e ser feliz. `,
        image: require('../../assets/restaurantes/camarao.png'),
        url: 'https://www.facebook.com/camaraonatelha/'
    },
]
export { RestauranteMocks }
export type { Restaurante }