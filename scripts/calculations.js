// button clicks when the page loads
window.onload = function () {
    let analyze = document.getElementById("analyze");
    let generate = document.getElementById("generate");
    analyze.onclick = analyzeNumberOnClick;
    generate.onclick = generatePrimesOnClick;
};

function analyzeNumberOnClick(event) {
    event.preventDefault();
    let inputNumber = document.getElementById("number");
    let analyzeError = document.getElementById("analyze-error");
    let primeStatus = document.getElementById("prime-status");
    let factorsElement = document.getElementById("factors");
    let inputInteger = parseInt(inputNumber.value);

    if (isNaN(inputInteger)){
        analyzeError.innerHTML = "("+ inputNumber.value +") is not a number";
        primeStatus.innerHTML = "";
        factorsElement.innerHTML = "";
    }else {
        analyzeError.innerHTML = "";
        if (isPrime(inputInteger)){
            primeStatus.innerHTML = inputInteger + " is prime";
        } else {
            primeStatus.innerHTML = inputInteger + " is not prime";
        }
        let factorsArr = factors(inputInteger);
        factorsElement.innerHTML = "";
        for (let i= 0; i < factorsArr.length; i++){
            factorsElement.innerHTML += "<li>" + factorsArr[i] + "</li>";
        }
    }
    event.preventDefault();
}

function generatePrimesOnClick(event) {
    event.preventDefault();
    let lowInput = document.getElementById("low");
    let highInput = document.getElementById("high");
    let lowNumber = parseInt(lowInput.value);
    let highNumber = parseInt(highInput.value);

    let generateError = document.getElementById("generate-error");
    let primesListElement = document.getElementById("primes-list");
    primesListElement.innerHTML = "";

    if (isNaN(lowNumber) || isNaN(highNumber)) {
        generateError.innerHTML = "Low or high are not a number";
    } else {
        generateError.innerHTML = "";
        let primesArr = primesIn(lowNumber, highNumber);
        for (let i = 0; i < primesArr.length; i++) {
            primesListElement.innerHTML += "<li>" + primesArr[i] + "</li>";
        }
    }
}
