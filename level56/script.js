// const colors = () => {
//     const dpt = true;
//     let colered = blue ;

//     if (dpt){
//         let colored = green ;
//         console.log(color)
//     }


// }



// const name = "gaga";

// const named = () =>{
//     return `helo ${name}`
// }

// console.log(name)


// .length - ითვლის სიის სიგრძეს
// .join() - ყოფს ელემენტებს ისე როგორც დავუწერთ
// .toString() - გადაყავს სტრინგად
// .pop() - შლის ელემენტს სიის ბოლოში
// .push() - ამატებს ელემენტს სიის ბოლოში
// .shift() - შლის პირველ ელემნეტ სიიდან
// Array.isArray(); - ამოწმებს არის თუ არა array-ი
// .concat() - აერთებს ორ მასივს
// .slice() - 
// .splice() - ამატებსელემენტს იმ ინდექსზე რომელსაც მივუთითებთ ან ანაცვლებს


// let fruuits = ['apple' , 'orange' , 'watermalon' , 'dragonfruit' , 'kiwi']
// let agag = "gaga"



// console.log(fruuits.length)
// console.log(fruuits.join("  "))
// console.log(fruuits.toString())
// console.log(fruuits.pop())
// console.log(fruuits.push("gaga"))
// console.log(fruuits.shift())
// console.log(Array.isArray(fruuits))
// console.log(fruuits.concat(fruuits , agag))
// console.log(fruuits.slice())
// console.log(fruuits.splice(1,1 ,"randomfrute"))









// let price = 100;

// const changePrice = () => {
//     let newPrice = 50; // აქ არის შეცდომა
//     console.log(`ახალი ფასი ფუნქციაში ${newPrice}`);
// };

// changePrice();
// console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!



let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);
// კითხვა: რატომ არ შეიცვალა გლობალური hero Superman-ით? და რა როლი ითამაშა აქ "Iron Man"-მა?