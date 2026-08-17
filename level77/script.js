// class Book{
//     constructor(title,author){
//         this.title = title,
//         this.author = author,
//         this.isRead = false
//     }

//     read(){
//         this.isRead = true
//         console.log(`თქვენ წაიკითხეთ წიგნი სახელად:${this.title}`);

//     }

//     getDetails(){
//         console.log(`წიგნი:${this.title} დაწერილია${this.author}-ის მიერ და წაკითხულია?:${this.isRead}`)
//     }
// }
// const booker = new Book("tom soier" , "mark tven")
// booker.read()
// booker.getDetails()






// class Movie {
//     constructor(price, title, availableSeats) {
//         this.price = price,
//             this.title = title,
//             this.availableSeats = availableSeats
//     }

//     buyTicket(quantity) {
//         quantity = 5
//         if (this.availableSeats >= quantity) {
//             this.availableSeats -= quantity
//             console.log(`თქვენ წარმატებით იყიდეთ ${quantity} გადასახდელია: ${this.price * quantity}$ `)
//         } else if (this.availableSeats < quantity) {
//             console.log(`სამწუხაროდ მხოლოდ ${this.availableSeats} არის დარჩენილი`)
//         }
//     }
// }

// const n = new Movie(5,"anakonda",100)


// n.buyTicket()


// class Car{
//     constructor(brand,speed){
//         this.brand = brand,
//         this.speed = 0
//     }

//     accelerate(){
//         this.speed += 20
//     }

//     showSpeed(){
//         console.log(`${this.brand}-ის სიჩქარეა ${this.speed} კმ/სთ`)
//     }
// }

// const car = new Car("BMW")
// car.accelerate() * 2
// car.showSpeed()
  