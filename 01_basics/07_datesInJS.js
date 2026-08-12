// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

let Datetoday= new Date()
console.log(Datetoday.toString());
console.log(Datetoday.toTimeString());
console.log(Datetoday.toLocaleString());
console.log(Datetoday.toLocaleDateString());
console.log(Datetoday.toLocaleTimeString());
console.log(Datetoday.getDate());
console.log(Datetoday.getDay());
console.log(Datetoday.getMonth()+1);
console.log(Datetoday.getHours());
console.log(Datetoday.getMinutes());


let TimeStamp = Date.now()
console.log(TimeStamp);


let CreatedDate = new Date("08-12-2026")
console.log(CreatedDate.toLocaleString());
console.log(CreatedDate.toDateString());
console.log(CreatedDate.toLocaleTimeString());
console.log(CreatedDate.toTimeString());
console.log(CreatedDate.getTime());
console.log(CreatedDate.getMinutes());


