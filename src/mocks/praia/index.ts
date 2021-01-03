
interface Prsi {
    title: string;
    description: any;
    image: any;
    url: string;
}
const Praise: Prsi[] = [
    {
        title: 'Praia Carne de Vaca',
        description: '',
        url: '',
        image: require('../../assets/praias/p1.png')
    },
    {
        title: 'Praia da Barra de Catuama',
        description: '',
        url: '',
        image: require('../../assets/praias/p2.png')
    },
    {
        title: 'Aparauá Ecoaventura',
        description: '',
        url: '',
        image: require('../../assets/praias/p3.png')
    },
    {
        title: 'Praia de Catuama',
        description: '',
        url: '',
        image: require('../../assets/praias/p3.png')
    },
    {
        title: 'Praia Atapuz',
        description: '',
        url: '',
        image: require('../../assets/praias/p5.png')
    },
]

export { Praise }
export type { Prsi }