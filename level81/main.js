



























const produc = Array.from(document.getElementsByClassName("poducts"))
console.log(produc)
let carts = []


produc.forEach(products => {
    const button = products.querySelector("button");
    button.addEventListener("click", () => {
        let aboutProduc = {
            name: products.querySelector("h2"),
            price: products.querySelector("p"),
            quanty: 1
        }

        const exit = carts.find(item => item.name === aboutProduc.name)
        if (exit) {
            exit.quanty += 1;

        } else {
            carts.push(aboutProduc)
        }

        console.log(carts)


        const renderer = () => {
            carts.forEach(products => {
                const productDiver = document.createElement("div")
                productDiver.innerHTML = `
        <h3>${products.name}</h3>
        <p>${products.price}</p>
        <p>${products.quanty}</p>
        

        `
            })
        }
    })
})
