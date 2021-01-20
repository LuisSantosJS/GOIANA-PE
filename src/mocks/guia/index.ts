
interface Guia {
    title: string;
    image: any;
    description: string;
}
const GuiaMocks: Guia[] = [
    {
        title: 'BANCO DO BRASIL',
        description: 'Av. Nunes Machado, 103 - CENTRO, Goiana - PE, 55900-000',
        image: require('../../assets/guia/bb.png')
    },
    {
        title: 'BANCO BRADESCO',
        description: 'Praça João Pessoa, 30 - centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/bra.png')
    },
    {
        title: 'CAIXA ECONÔMICA ',
        description: 'Praça João Pessoa, 126, Goiana - PE, 55900-000',
        image: require('../../assets/guia/caixa.png')
    },
    {
        title: 'BANCO DO NORDESTE',
        description: 'Rua Dr. Manoel Borba, 45 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/nor.png')
    },
    {
        title: 'BANCO ITAÚ',
        description: 'Rua Dr. Manoel Borba, 38 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/itau.png')
    },
    {
        title: 'TERMINAL RODOTUR',
        description: 'Rua Duque de Caxias, 620 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/rodo.png')
    },
    {
        title: 'AGÊNCIA DOS CORREIOS ',
        description: 'Tv. Duque de Caxias, 584 - Centro, Goiana - PE, 55900-900',
        image: require('../../assets/guia/corre.png')
    },
    {
        title: 'GOIANA PREVI',
        description: 'R. Luiz Gomes, 102 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/previ.png')
    },
    {
        title: 'PREVIDENCIA SOCIAL  ',
        description: 'Rua da Matriz, 64 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/inss.png')
    },
    {
        title: 'CELPE',
        description: 'Rua Marechal Deodoro da Fonseca (Rua Direita), 93 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/celpe.png')
    },
    {
        title: 'HOSPITAL BELARMINO  ',
        description: 'Praça Correia Picanço, s/n - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/belar.png')
    },
    {
        title: 'COMPESA        ',
        description: 'Avenida Nunes Machado - s/n, Goiana - PE, 55900-000',
        image: require('../../assets/guia/com.png')
    },
    {
        title: 'TAXI      ',
        description: 'R. Duque de Caxias, 833 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/taxi.png')
    },
    {
        title: 'FACULDADE DE PROFESSORES',
        description: 'Rua Poço do Rei, s/n, Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/prof.png')
    },
    {
        title: 'AGÊNCIA DO TRABALHO  ',
        description: 'Rua Luiz Gomes, Centro, Goiana-PE, 55900-000',
        image: require('../../assets/guia/age.png')
    },
    {
        title: 'PROMOTORIA DE JUSTIÇA  ',
        description: 'Av. Nunes Machado, 9 - Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/pro.png')
    },
    {
        title: 'POLICIA CIVIL',
        description: 'R. do Jiló - Vila Jardim Pompeia, Goiana - PE, 55900-000',
        image: require('../../assets/guia/pl.png')
    },
    {
        title: 'BOMBEIROS'        ,
        description: 'Rua Poço do Rei, s/n, Centro, Goiana - PE, 55900-000',
        image: require('../../assets/guia/bom.png')
    },
    {
        title: 'DISK DENUNCIA        ',
        description: '181',
        image: require('../../assets/guia/181.png')
    },


]
export { GuiaMocks }
export type { Guia }