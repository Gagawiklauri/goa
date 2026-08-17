
const main = Array.from(document.getElementsByClassName("produc"))
let cart = []


const cont = document.getElementById("cont")


const render = () =>{
    cont.innerHtml = ""

    cart.forEach((item,index) =>{
        let producDiv = document.createElement("div")
        producDiv.className = "produc"




        producDiv.innerHTML = `
        <h2>${item.productName}</h3>
        <p>${item.price}</p>
        <button onclick ="deleteProducs(${index})">delete</button>
        `

        cont.appendChild(producDiv)
    })
}





const adder = (produc) =>{
    const ObjOfproduct = {
        productName: produc.querySelector("h3").textContent,
        price: produc.querySelector("p").textContent,
    }

    cart.push(ObjOfproduct)
    console.log(cart)
}



producDiv.forEach((item) =>{
    const button = item.querySelector("button");

    button.addEventListener("click",() =>{
        adder(item)
        render()
        
    })
})


const deleteProducs = (index) => {
    cart = cart.filter((_,i) => i !== index)
    render()
}