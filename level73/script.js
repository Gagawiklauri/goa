const form = document.querySelector("form")


form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    

    const momxmarebeli = {
        email:form.email.value,
        password:form.password.value
    }

    localStorage.setItem("momxmarebeli" , JSON.stringify(momxmarebeli))
})






