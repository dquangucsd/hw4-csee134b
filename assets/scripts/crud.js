let entries = [];
let addDialog = document.getElementById("add-dialog");
let addButton = document.getElementById("add-button");
let addSubmit = document.getElementById("add-submit");
let addCancel = document.getElementById("add-cancel");


function remove(title, date, summary) {
    let idLabel = "" + title + date + summary;
    let toRemove = document.getElementById(idLabel);
    document.getElementById("blogs").removeChild(toRemove);
    // for (let i = 0; i , entries.length; i++) {
    //     let entry = entries[i];
    //     if (entry.title == title && entry.date == date && entry.summary == summary) {
    //         entries.splice(i, 1);
    //         return true;
    //     }
    // }
    return false;
}

function add(title, date, summary) {
    //add movie entry
    let blogs = document.getElementById("blogs");
    let newHTML = "Title: " + title + ", Date: " + date + ", Summary: " + summary;
    let p = document.createElement("p");
    let idLabel = "" + title + date + summary;

    p.setAttribute("id", idLabel);
    p.innerText = newHTML;

    blogs.appendChild(p);
    //add button to delete
    let deleteButton = document.createElement("button");
    //deleteButton.innerHTML = "<button id = sssstest-delete onclick = 'alert('Hi');'>Delete</button> ";
    deleteButton.setAttribute("id", idLabel + "-delete");
    deleteButton.setAttribute("onclick", function() {
        remove(title, date, summary);
    });
    deleteButton.onclick = function() {
        remove(title, date, summary);
    };
    deleteButton.innerText = "Delete";
    p.appendChild(deleteButton);
    


    let newEntry = {};
    newEntry.title = title;
    newEntry.date = date;
    newEntry.summary = summary;
    entries.push(newEntry);
    return true;
}


addButton.addEventListener('click', () => {
    addDialog.showModal();
});


addSubmit.addEventListener('click', () => {
    let titleEntry = document.getElementById('title-entry').value;
    let yearEntry = document.getElementById('year-entry').value;
    let rating = document.getElementById('ratings').value;
    add(titleEntry, yearEntry, rating);
})


addCancel.addEventListener('click', () => {
})
