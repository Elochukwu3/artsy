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
        price:430,
        count:1,
        id:"9",
        artist:"Messie",
        name:"Lawmakers",

    },
    {
        img:"/sales-img/img-6.png",
        price:150,
        count:1,
        id:"10",
        artist:"Jhon John",
        name:"Veil",

    },
    {
        img:"/sales-img/img-one.png",
        price:150,
        count:1,
        id:"11",
        artist:"swift dare",
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
        price:640,
        count:1,
        id:"2",
        artist:"Mannie Sall",
        name:"Beverly",
    },
    {
        img:"/sales-img/img-four.png",
        price:180,
        count:1,
        id:"3",
        artist:"Chargie 22",
        name:"Luois",
    },
    {
        img:"/sales-img/img-five.png",
        price:630,
        count:1,
        id:"4",
        artist:"Bally M.m",
        name:"Vuit",
    },
    {
        img:"/sales-img/img-six.png",
        price:170,
        count:1,
        id:"5",
        artist:"Marquis",
        name:"Robin",
    },
    {
        img:"/sales-img/img-10.png",
        price:880,
        count:1,
        id:"7",
        artist:"Gilea Dwift",
        name:"Artin",
    },
    {
        img:"/sales-img/feat-two.png",
        price:990,
        count:1,
        id:"18",
        artist:"Jeru Sally",
        name:"Yet There",
    },
    {
        img:"/sales-img/feat-three.png",
        price:550,
        count:1,
        id:"20",
        artist:"Ali DaaW",
        name:"Oloibiri",
    }
]
const jsonObject = JSON.parse(JSON.stringify(storedItems))

export default function api(req, res) {
  res.status(200).json(jsonObject)
}
