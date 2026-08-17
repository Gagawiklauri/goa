// function max(a, b, c) {
//     if (typeof a !== "number" && typeof b !== "number" && typeof c !== "number") {
//         console.log("სამივე  უნდა იყოს რიცხვი");

//     }

//     return Math.max(a, b, c);
// }

// export default max;





// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const NegativeAndEven = () => {
//     let count = []


//         if (nums < 0) {
//             console.log("sheiyvane 0ze meti")
//         } else if (nums % 2 === 0) {
//             count++
//         }


//     return
// }

// export default NegativeAndEven


let numbers = [-111212,121,11212,325547,-5498046]

const sum = () =>{
    let possitive = 0;
    let negative = 0

    if(numbers < 0){
        negative++
    }else{
        possitive++
    }
}

export default sum