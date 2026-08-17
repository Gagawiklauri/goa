/*
.forEach-გადაუვლის მასივს და გამოგვიტანს ან ინდექსებს ან აიტემებს ან მაგალითად ასე(return `hello ${...}`)
.filter-გაფილტრავს მასივს და გამოიტან იმას რომელიც იქნება თრუ
.map-აბრუნებს ახალ მასივს მაგ.(return `user: ${item}`)
.some-ი დაიყვანს მასივს ერთ მნიშვნელობამდე

*/


// let names =  ['ანა', 'ნიკა', 'გიორგი']

// names.forEach((item) =>{
//     console.log(`hello: ${item}`)
// })



// let nums =[2, 4, 6, 8]

// const newNums = nums.map((item) =>{
//     console.log(item *2)
// })




// let ages = [12, 25, 17, 30, 15]

// const newArr = ages.filter((item) => {
//     return ages >= 18
// })

// console.log(newArr)



// let antyNegNum = [5, 8, -2, 10]

// antyNegNum.some((item) =>{
//     if(item < 0){
//         console.log(item)
//     }
// })






























// let fruits = ['ვაშლი', 'მსხალი', 'ატამი']

// fruits.forEach((item)=>{
//     console.log(`0:${item} , 1:${item} , 2:${item}`)
// })



// let nums = [1, 2, 3, 4, 5, 6]

// nums.forEach((item) =>{
//     if(item % 2 === 0){
//         return "ლუწია"
//     }else{
//         return "კენტია"
//     }
// })

// console.log(nums)



// let salary = [100, 250, 50, 80]

// const decrement = salary.map((item) =>{
//     return item * 0.9 
// })

// console.log(decrement)



// let words =  ['სახლი', 'გზა', 'ავტომობილი', 'ხე']

// words.some((item)=>{
//     return item.length >= 10
// })

// console.log(words)



// let number = [5, 12, 8, 130, 44]

// number.find((item)=>{
//     if(item >= 10){
//         return "biiig"
//     }else{
//         return "loww"
//     }

// })
// console.log(item)




// let animal = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი']

// const animal2 = animal.findIndex((item) => {
//     return item === 'ფორთოხალი'
// })

// console.log(animal2)



let hobbie = ['მე', 'მიყვარს', 'JavaScript']

const hobbi = hobbie.reduce((item) =>{
    return `მე მიყვარს JavaScipt`
})

console.log(hobbi)