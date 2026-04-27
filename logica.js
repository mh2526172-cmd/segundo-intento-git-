let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let numero=document.getElementById("numero")
let button=document.getElementById("button")
let suma

button.addEventListener("click",resultado)
function resultado(){
    
     suma=Number(num1.value)+Number(num2.value)
      

    numero.textContent=suma
    }

