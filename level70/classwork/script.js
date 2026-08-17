const form = document.querySelector("form")


const users = []

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const Name = e.target.name.value
    const password = e.target.password.value
    const email = e.target.email.value

    const user={
        name,
        password,
        email
    }

    const exiters = users.some(single => single.email === email)
    if(exiters){
        alert("this email is alredy used")
        return;
        
    }
     
    if(password.length < 8){
        alert("daamate")
    }else{
        alert("warmatebit morcha")
        users.push(user)
    }
    console.log(users)
})