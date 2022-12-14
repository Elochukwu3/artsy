export const storedItems =[
    {
        img:"/sales-img/img.png",
        price:100,
        count:1,
        id:"8",
        artist:"Jhon Elo",
        name:"Ellipsia",

    },
    {
        img:"/sales-img/img-ii.png",
        price:100,
        count:1,
        id:"9",
        artist:"Jhon Elo",
        name:"Lawmakers",

    },
    {
        img:"/sales-img/img-6.png",
        price:100,
        count:1,
        id:"10",
        artist:"Jhon Elo",
        name:"Veil",

    },
    {
        img:"/sales-img/img-one.png",
        price:100,
        count:1,
        id:"11",
        artist:"Jhon Elo",
        name:"Alternating",
    },
    {
        img:"/sales-img/img-two.png",
        price:100,
        count:1,
        id:"1",
        artist:"Jhon Elo",
        name:"Rosemary'22",
    },
    {
        img:"/sales-img/img-three.png",
        price:100,
        count:1,
        id:"2",
        artist:"Jhon Elo",
        name:"Beverly",
    },
    {
        img:"/sales-img/img-four.png",
        price:100,
        count:1,
        id:"3",
        artist:"Jhon Elo",
        name:"Luois",
    },
    {
        img:"/sales-img/img-five.png",
        price:100,
        count:1,
        id:"4",
        artist:"Jhon Elo",
        name:"Vuit",
    },
    {
        img:"/sales-img/img-six.png",
        price:100,
        count:1,
        id:"5",
        artist:"Jhon Elo",
        name:"Robin",
    },
    {
        img:"/sales-img/img-8.png",
        price:100,
        count:1,
        id:"6",
        artist:"Jhon Elo",
        name:"Kalaval",
    },
    {
        img:"/sales-img/img-10.png",
        price:100,
        count:1,
        id:"7",
        artist:"Jhon Elo",
        name:"Swift",
    }
]
const jsonObject = JSON.parse(JSON.stringify(storedItems))

export default function api(req, res) {
  res.status(200).json(jsonObject)
}
