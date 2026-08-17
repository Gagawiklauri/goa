const waitTwoSeconds = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {resolve("ორი წამი გავიდა"),2000})
    })
}

waitTwoSeconds().then((result) =>console.log(result))




const checkNumber = (num) =>{
    return new Promise((resolve,reject) =>{
        if(num >= 5){
            resolve("რიცხვი ნორმალურია")
        }else{
            reject("რიცხვი ძალიან პატარაა!")
        }
    })
}

checkNumber().then((result) =>console.log(result))
checkNumber().catch((error) =>console.log(error));






const doubleAfterDelay = (num) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {num * 2,2000})
    })
}

doubleAfterDelay().then((result) =>console.log(result))