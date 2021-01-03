interface Rura {
    title: string;
    description: string;
    image: any;
    url: string;
}


const Rurals: Rura[] = [
    {
        title: 'Engenho Ubu',
        description: '',
        image: require('../../assets/ubu/ubu.png'),
        url: 'https://goianape.com.br/engenho-ubu/'
    },
    {
        title: 'Engenho Miranda',
        description: 'Próximo aos limites que separam os municípios de Goiana e Condado está localizado um antigo engenho de fogo morto denominado Miranda, hoje cortado pela rodovia PE 62. De um lado está a antiga moita, ainda firme, porém sem a moenda, os tachos, e a caldeira, embora o piso marcado ainda ...',
        image: require('../../assets/ubu/mira.png'),
        url: 'https://goianape.com.br/engenho-miranda/'
    },
    {
        title: 'Engenho Itapirema do Meio',
        description: 'Este engenho foi construído em 1568. As construções vistas nele são: a casa grande, a capela e a moita do engenho. A casa grande foi construída em cima das ruínas da casa primitiva. A capela é em homenagem à Santa Terezinha. Sua construção é bastante simples, toda em alvenaria de ...',
        image: require('../../assets/ubu/meio.png'),
        url: 'https://goianape.com.br/engenho-itapirema-do-meio/'
    },
    {
        title: 'Engenho Bujari',
        description: 'O engenho foi fundado, antes da invasão holandesa, por Jerônimo Cavalcanti, filho de Jerônimo Albuquerque. Em 1637, foi confiscado pelos holandeses. No século passado, teve grande importância: pertenceu ao Barão de Bujari, Antônio Francisco Pereira, um dos que receberam o Imperador D. Pedro II, por ocasião de sua visita à ...',
        image: require('../../assets/ubu/buja.png'),
        url: 'https://goianape.com.br/engenho-bujari/'
    },
    {
        title: 'Engenho Uruaé',
        description: 'Visitar os Engenhos de Goiana é estar em contato com uma parte importante da história do Brasil. E um dos exemplos, está localizado a apenas alguns quilômetros do centro da cidade de Goiana. Ir ao Engenho Uruaé é como adentrar nos livros que contem histórias do periodo colonial do Brasil ...',
        image: require('../../assets/ubu/ru.png'),
        url: 'https://pt.wikipedia.org/wiki/Engenho_Uruaé'
    },

]
export { Rurals };
export type { Rura }
