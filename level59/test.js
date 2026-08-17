const numbers = [15, 2, 8, 33, 20, 7, 44, 11];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i].length >=10){
        console.log(numbers[i]); 
    }
}

let password = "gaga12345678910111121314151617181920"

let userpassword = 0;


while (userpassword !== password) {
    userpassword = prompt("გთხოვთ, შეიყვანოთ პაროლი:");
    

    if (userpassword === null) {
        alert("პროცესი გაუქმდა.");
        break; 
    }else if (userpassword !== password) {
        alert("არასწორი პაროლია! სცადეთ თავიდან.");
    }else if (userpassword === password) {
    alert(" პაროლი სწორია!!!.");
}

}





let number = prompt("შეიყვანეთ რიცხვი!:")

for()



























let sam = 0;
let rn ;

alert("შეიყვანეთ რიცხვები. პროგრამის დასასრულებლად შეიყვანეთ 0.");

do {
    rn = Number(prompt("შეიყვანეთ რიცხვი:"));
    
   
    if (!isNaN(rn)) {
        sam += rn;
    } else {
        alert("გთხოვთ შეიყვანოთ მხოლოდ რიცხვი!");
    }

} while (rn !== 0); 


alert(`შეყვანილი რიცხვების საბოლოო ჯამია: ${sam}`);
console.log(`საბოლოო ჯამი: ${sam}`);









for(let i =0; i <= 50; i++){
    if(i % 3 === 0){
        console.log("Fizz")
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else{
        console.log(i)
    }
}