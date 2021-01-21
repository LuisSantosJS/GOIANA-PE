
interface Prsi {
    title: string;
    description: any;
    image: any;
    url: string;
    address?:string;
}
const Praise: Prsi[] = [
    {
        title: 'Praia Carne de Vaca',
        description: '',
        url: '',
        image: require('../../assets/praias/p1.png'),
        address:'R. da Praia, 01, Goiana, Pernambuco 55900-000 Brasil'
    },
    {
        title: 'Praia da Barra de Catuama',
        description: '',
        url: '',
        image: require('../../assets/praias/p2.png'),
        address:'PE-001, 190, Goiana - PE, 55900-000'
    },
    {
        title: 'Aparauá Ecoaventura',
        description: '',
        url: '',
        image: require('../../assets/praias/p3.png'),
        address:'Goiana - PE '
    },
    {
        title: 'Praia de Catuama',
        description: '',
        url: '',
        image: require('../../assets/praias/p3.png'),
        address:'Goiana - PE '
    },
    {
        title: 'Praia Atapuz',
        description: '',
        url: '',
        image: require('../../assets/praias/p5.png'),
        address:'Goiana - PE '
    },
]

export { Praise }
export type { Prsi }