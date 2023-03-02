//-@ts-check

export function alertTest() {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "none";
    alert('Alert button pressed!');
}

export function confirmTest() {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "block";

    let answer = confirm("Would you like to confirm?");
    let outputTemplate = `The value returned by the confirm method is ${answer}`;
    document.getElementById("response").innerText = outputTemplate;
}

export function promptTest() {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "block";
    let answer = prompt("What is your name?", "Mickey Mouse");
    let outputTemplate = `Hello ${answer}`;
    outputContainer.innerHTML = outputTemplate;
}

export function saferTest() {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "block";
    let answer = prompt("What is your name?", "Safe");
    let clean = DOMPurify.sanitize(answer);
    outputContainer.innerHTML = `Hello ${clean}`;
}



async function init() {


    


    let alertButton = document.getElementById("alert-button");
    alertButton?.addEventListener('click', () => {
        alertTest();
    },
    true);


    let confirmButton = document.getElementById('confirm-button');
    confirmButton?.addEventListener('click', function() {
        confirmTest();
        
    },
    true);


    //<b onmouseover="alert('pwned')">Roll me</b>
    let promptButton = document.getElementById('prompt-button');
    promptButton?.addEventListener('click', () => {
        promptTest();
    },
    true);



    let saferButton = document.getElementById('safer-button');
    saferButton?.addEventListener('click', function() {
        saferTest();
    })

    
}

window.addEventListener('DOMContentLoaded', init);