import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";
export const sampleFood: Food[] = [
    {
        id:"1",
        name:"Chocolate Cake",
        price:400,
        tags:['Chocolate','cake'],
        favorite:false,
        stars:4,
        imageUrl:'https://i.postimg.cc/yYJFmxcT/cc1.jpg',
        origins:['italy'],
        cookTime:'40-50'
    },
    {
        id:"2",
        name:"Masala Cake",
        price:400,
        tags:['Masala'],
        favorite:false,
        stars:2,
        imageUrl:'https://i.postimg.cc/yYJFmxcT/cc1.jpg',
        origins:['italy'],
        cookTime:'40-50'
    },
    {
        id:"3",
        name:"Watermelon Cake",
        price:400,
        tags:['Watermelon'],
        favorite:false,
        stars:4,
        imageUrl:'https://i.postimg.cc/yYJFmxcT/cc1.jpg',
        origins:['italy'],
        cookTime:'40-50'
    },
    {
        id:"5",
        name:"Red Velvet",
        price:400,
        tags:['Red','Velvet'],
        favorite:false,
        stars:4,
        imageUrl:'https://i.postimg.cc/yYJFmxcT/cc1.jpg',
        origins:['italy'],
        cookTime:'40-50'
    },
    {
        id:"6",
        name:"Black Forest",
        price:400,
        tags:['Black','Forest'],
        favorite:false,
        stars:4,
        imageUrl:'https://i.postimg.cc/yYJFmxcT/cc1.jpg',
        origins:['italy'],
        cookTime:'40-50'
    },
    {
        id:"3",
        name:"White Forest",
        price:400,
        tags:['White','Forest'],
        favorite:false,
        stars:4,
        imageUrl:'https://i.postimg.cc/yYJFmxcT/cc1.jpg',
        origins:['italy'],
        cookTime:'40-50'
    }
    
]

export const sampleTags:Tag[] = [
    {name:'All', count:6},
    {name:'Chocolate', count:1},
    {name:'Masala', count:1},
    {name:'Watermelon', count:1},
    {name:'Velvet', count:1},
    {name:'White', count:1},
    {name:'Cake', count:4}
]