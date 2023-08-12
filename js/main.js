let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
];

let from = prompt("Введите минимальную цену:");
let up = prompt("Введите максимальную цену:");

console.log("Список машин:");

for (let i = 0; i < cars.length; i++) 
    if (cars[i].price >= from && cars[i].price <= up) 
        console.log(cars[i].name + " - Цена: $" + cars[i].price);
