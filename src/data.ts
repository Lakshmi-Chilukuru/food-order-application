import { Food } from "./app/shared/model/food";
import { Tags } from "./app/shared/model/tag";

export const sampleFoods:Food[]=[
    {
        id:'1',
        name:'Panipuri',
        price:59,
        tags:['Fastfood','Panipuri'],
        favourite:false,
        stars:4.3,
        imageUrl:'assets/images/img1.jpeg',
        origins:['Indian'],
        cookTime:'10-15',     
    },
    {
        id:'2',
        name:'vadapav',
        price:29,
        tags:['Fastfood','street food'],
        favourite:false,
        stars:4,
        imageUrl:'assets/images/img2.jpeg',
        origins:['italy'],
        cookTime:'10-30',     
    },
    {
        id:'3',
        name:'Bhelpuri',
        price:49,
        tags:['Fastfood','Pizza'],
        favourite:false,
        stars:4,
        imageUrl:'assets/images/img3.jpeg',
        origins:['indian','italian'],
        cookTime:'10-30',     
    },
    {
        id:'4',
        name:'Batura',
        price:119,
        tags:['Fastfood','Batura'],
        favourite:false,
        stars:4.3,
        imageUrl:'assets/images/img4.jpeg',
        origins:['Mexican','france'],
        cookTime:'10-20',     
    },
    {
        id:'5',
        name:'Idli',
        price:119,
        tags:['healthyfood','homefood'],
        favourite:true,
        stars:4.8,
        imageUrl:'assets/images/img5.jpeg',
        origins:['Indian'],
        cookTime:'10-35',     
    },
    {
        id:'6',
        name:'Bajji',
        price:119,
        tags:['Bajji','Snacks'],
        favourite:true,
        stars:4.5,
        imageUrl:'assets/images/img6.jpeg',
        origins:['India','indonesian'],
        cookTime:'10-25',     
    },
    {
        id:'7',
        name:'Samosa',
        price:19,
        tags:['Sancks','Teatime'],
        favourite:false,
        stars:4,
        imageUrl:'assets/images/img7.jpeg',
        origins:['Italy'],
        cookTime:'10-40',     
    },
    {
        id:'8',
        name:'Pizza',
        price:119,
        tags:['Fastfood','Pizza'],
        favourite:false,
        stars:4.3,
        imageUrl:'assets/images/img8.jpeg',
        origins:['italy','american'],
        cookTime:'10-30',     
    }
]

export const sample_tags:Tags[]=[
    {name:'All',count:8},
    {name:'Fastfood',count:4},
    {name:'Snacks',count:3},
    {name:'Pizza',count:1},
    {name:'Panipuri',count:2},
    {name:'healthyfood',count:1}
]