// function book(სათაური,ავტორი,ფასი){
//     this.სათაური = სათაური,
//     this.ავტორი = ავტორი,
//     this.ფასი =ფასი,
//     this.getInfo = () =>{
//         console.log(`წიგნის სათაურია ${სათაური} ავტორი ${ავტორი}, და ფასი ${ფასი}`)
//     }
// }

// const buyBook =new book("ტომ სოიერის თავ გადასავალი","მარკ ტვენი" , 40)
// console.log(buyBook)


// function PiggyBank(){
//     this.money = 0,
//     this.setMoney = (newMoni) =>{
//         this.money = newMoni
//     }
//     this.getMoney = () =>{
//         return this.money
//     }
// }

// const newCase = new PiggyBank()
// newCase.setMoney(101212)
// console.log(newCase.getMoney())


// const h1 = document.querySelector("h1")

// h1.style.color = "blue"

// h1.textContent = "hello gaga"






//  შექმენი ფუნქცია-კონსტრუქტორი სახელით .Profile(name)

// მას პარამეტრად გადაეცი მხოლოდ ერთი რამ —  (სახელი).name

// ფუნქციის შიგნით შექმენი ორი მეთოდი:this

// this.setName(newName) — რომელიც ძველ სახელს შეცვლის ახალი სახელით.

// this.getName() — რომელიც უბრალოდ დააბრუნებს მიმდინარე სახელს.

// new Profile("Giorgi")-ით შექმენი ახალი მომხმარებელი (სახელით გიორგი).

// ეკრანზე გამოიტანე სახელი  მეთოდით (უნდა დაწეროს "Giorgi").getName()

// ახლა  მეთოდით შეცვალე სახელი.setName("Anano")

// ხელახლა გამოიტანე სახელი ეკრანზე  მეთოდით (ახლა უნდა დაწეროს "Anano").getName()


function profile(name){
    this.setName = (newName) =>{
        this.name = newName
    }
    this.getName = () =>{
        return this.name
    }
}

const user = new profile("giorgi")
user.setName("Anano")
console.log(user.getName)