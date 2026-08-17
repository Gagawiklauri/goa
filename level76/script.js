let input = document.getElementById("colorer");
let button = document.getElementById("btn");

button.addEventListener("click",  function ()  {
    document.body.style.backgroundColor = input.value;
});

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const p = document.querySelector("p")

const dec = () =>{
    p.style.fontSize = "1px"
}

const inc = () =>{
    p.style.fontSize = "large"
}

plus.onclick = inc;
minus.onclick = dec;