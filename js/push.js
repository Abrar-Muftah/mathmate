// ADDITION
document.querySelector("#additionBtn").addEventListener("click", ()=> {
    document.querySelector("#additionAns").innerHTML = MatheMate.addition(
        parseInt(document.querySelector("#addition1").value),
        parseInt(document.querySelector("#addition2").value)
    )
});

// SUBTRACTION
document.querySelector("#subtractBtn").addEventListener("click", ()=> {
    document.querySelector("#subtractAns").innerHTML = MatheMate.subtraction(
        parseInt(document.querySelector("#subtract1").value),
        parseInt(document.querySelector("#subtract2").value)
    )
});

// MULTIPLICATION
document.querySelector("#multiplyBtn").addEventListener("click", ()=> {
    document.querySelector("#multiplyAns").innerHTML = MatheMate.multiplication(
        parseInt(document.querySelector("#multiply1").value),
        parseInt(document.querySelector("#multiply2").value)
    )
});

// DIVISION
document.querySelector("#divisionBtn").addEventListener("click", ()=> {
    document.querySelector("#divisionAns").innerHTML = MatheMate.division(
        parseInt(document.querySelector("#division1").value),
        parseInt(document.querySelector("#division2").value)
    )
});

// PERCENTAGE
document.querySelector("#percentageBtn").addEventListener("click", ()=> {
    document.querySelector("#percentageAns").innerHTML = MatheMate.percantage(
        parseInt(document.querySelector("#percentage1").value),
        parseInt(document.querySelector("#percentage2").value)
    )
});

// REST WARDE
document.querySelector("#restBtn").addEventListener("click", ()=> {
    document.querySelector("#restAns").innerHTML = MatheMate.rest(
        parseInt(document.querySelector("#rest1").value),
        parseInt(document.querySelector("#rest2").value)
    )
});

// POWER
document.querySelector("#powerBtn").addEventListener("click", ()=> {
    document.querySelector("#powerAns").innerHTML = MatheMate.power(
        parseInt(document.querySelector("#power1").value),
        parseInt(document.querySelector("#power2").value)
    )
});

// FIBONACCI
document.querySelector("#fibonacciBtn").addEventListener("click", ()=> {
    arrayfibo = MatheMate.fibo(document.getElementById("fibonacci1").value);
    for (let i = 0; i < arrayfibo.length - 1; i++) {
        document.getElementById("fibonacciAns").innerHTML += arrayfibo[i] + ", ";
    }
   
});

// EVEN ONEVEN
document.querySelector("#evenBtn").addEventListener("click", ()=> {
   document.getElementById("evenAns").innerHTML = MatheMate.evenoneven(
        document.getElementById("evenoneven").value
   )
});


// BREUKEN



// ROMANIZER
document.querySelector("#romanizerBtn").addEventListener("click", ()=> {
    document.getElementById("romanizerAns").innerHTML = MatheMate.romanizer(
         parseInt(document.getElementById("romanizer1").value)
    )
 });