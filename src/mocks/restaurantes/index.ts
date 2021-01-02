
interface Restaurante {
    title: string;
    image: any;
    description: string;
}
const RestauranteMocks: Restaurante[] = [
    {
        title: 'BURACO DA GIA',
        description: `Restaurante à la carte com destaque ao peixe com molho de camarão e guaiamum com pirão, em atmosfera cordial. Para levar, Reservas, Lugares para sentar, Acesso para cadeirantes, Serviço de mesa, Serve bebida alcoólica`,
        image: require('../../assets/restaurantes/buraco.png')
    },
    {
        title: 'CHURRASCARIA ARREIO DE PRATA ',
        description: `Rodízio de carnes assadas na brasa, mais saladas e pratos quentes, em ambiente amplo, climatizado e familiar.`,
        image: require('../../assets/restaurantes/arreio.png')
    },
    {
        title: 'CASARÃO GRILL GOIANA',
        description: `Rodízio de carnes na brasa, Saladas e buffet. Ambiente climatizado e familiar.`,
        image: require('../../assets/restaurantes/grill.png')
    },
    {
        title: 'CHURRASCARIA O GAUCHINHO',
        description: `Rodízio de carnes na brasa, Saladas e buffet.`,
        image: require('../../assets/restaurantes/gaucho.png')
    },
    {
        title: 'MATSU RESTAURANTE',
        description: `Pratos executivos com churrasco, fartas pizzas e combinados de sushis e sashimis, em espaço casual e delivery. `,
        image: require('../../assets/restaurantes/natsu.png')
    },
    {
        title: 'CAMARÃO NA TELHA',
        description: `De frente para o mar, um lugar de gente do bem que gosta de comer, beber, amar e ser feliz. `,
        image: require('../../assets/restaurantes/camarao.png')
    },
]
export { RestauranteMocks }
export type { Restaurante }