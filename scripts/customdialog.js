
let alertButton = document.getElementById("alert-button");
let alertDialog = document.getElementById("alert-dialog");
let confirmButton = document.getElementById("confirm-button");
let confirmDialog = document.getElementById("confirm-dialog");
let confirmOk = document.getElementById("confirm-ok");
let confirmCancel = document.getElementById("confirm-cancel");
let promptButton = document.getElementById("prompt-button");
let promptDialog = document.getElementById("prompt-dialog");
let promptAnswer = document.getElementById("prompt-answer");
let promptSubmit = document.getElementById("prompt-submit");


export function alertTest() {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "none";
    alertDialog.showModal();
}








alertButton.addEventListener('click', () => {
    alertTest();
});

confirmButton.addEventListener('click', () => {
    confirmDialog.showModal();
})

confirmOk.addEventListener('click', () => {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "block";
    let answer = 'Ok';
    let outputTemplate = `The value returned by the confirm method is ${answer}`;
    outputContainer.innerText = outputTemplate;
});


confirmCancel.addEventListener('click', () => {
    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "block";
    let answer = 'Cancel';
    let outputTemplate = `The value returned by the confirm method is ${answer}`;
    outputContainer.innerText = outputTemplate;
});


promptButton.addEventListener('click', () => {
    promptDialog.showModal();
})

promptSubmit.addEventListener('click', () => {
    let response = document.getElementById('prompt-answer').value;
    let clean = DOMPurify.sanitize(response);

    let outputContainer =  document.getElementById("response");
    outputContainer.style.display = "block";
    let outputTemplate = `Hello ${clean}`;
    outputContainer.innerHTML = outputTemplate;
})



