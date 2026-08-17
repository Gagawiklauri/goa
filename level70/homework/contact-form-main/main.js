const form = document.querySelector("form")


const users = []

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const FirstName = e.target.FirstName.value
    const LastName = e.target.LastName.value
    const email = e.target.email.value

    const user={
        FirstName,
        LastName,
        email
    }

    const exiters = users.some(single => single.email === email)
    if(exiters){
        alert("this email is alredy used")
        return;
        
    }
     users.push(user)
    console.log(users)
})