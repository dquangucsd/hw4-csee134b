let entries = [];
let addDialog = document.getElementById("add-dialog");
let addButton = document.getElementById("add-button");
let addSubmit = document.getElementById("add-submit");
let addCancel = document.getElementById("add-cancel");
let editDialog = document.getElementById("edit-dialog");
let editButton = document.getElementById("edit-button");



//curr values to hold between edit and remove
let editRequested = false;
var editTitle;
var editYear;
var editRating;
var editSummary;




function remove(title, year, rating, summary) {
    let idLabel = "" + title + year + rating + summary;
    let toRemove = document.getElementById(idLabel);
    document.getElementById("blogs").removeChild(toRemove);
    // for (let i = 0; i , entries.length; i++) {
    //     let entry = entries[i];
    //     if (entry.title == title && entry.date == date && entry.summary == summary) {
    //         entries.splice(i, 1);
    //         return true;
    //     }
    // }
    localStorage.removeItem(idLabel);
    return false;
};




function edit(title, year, rating, summary) {
    editDialog.showModal();
    let idLabel = "" + title + year + rating + summary;
    
    let toEdit = document.getElementById(idLabel);
    let currTitle = toEdit.getAttribute('title');
    let currYear = toEdit.getAttribute('year');
    let currRating = toEdit.getAttribute('rating');
    let currText = toEdit.getAttribute('summary');

    editTitle = currTitle;
    editYear = currYear;
    editRating = currRating;
    editSummary = currText;
    editRequested = true;


    let titleEdit = document.getElementById("title-edit");
    titleEdit.value = currTitle;
    let yearEdit = document.getElementById('year-edit');
    yearEdit.value = currYear;
    let ratingEdit = document.getElementById('rating-edit');
    ratingEdit.value = currRating;
    let textEdit = document.getElementById('summary-edit');
    textEdit.value = currText;

}






function add(title, year, rating, summary) {
    //add movie entry
    let blogs = document.getElementById("blogs");
    let newHTML = "<b>Title: " + title + ", Year: " + year + ", Rating: " + rating + "</b>";
    let p = document.createElement("p");
    let idLabel = "" + title + year + rating + summary;

    p.setAttribute("id", idLabel);
    p.setAttribute("class", "blog-data");
    p.setAttribute("title", title);
    p.setAttribute("year", year);
    p.setAttribute("rating", rating);
    p.setAttribute("summary", summary);


    p.innerHTML = newHTML;

    blogs.appendChild(p);


    let sumText = document.createElement("p");
    sumText.setAttribute("class", "blog-text");
    sumText.innerText = summary;
    p.appendChild(sumText);


    //add button to delete
    let deleteButton = document.createElement("button");
    //deleteButton.setAttribute("id", idLabel + "-delete");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("onclick", function() {
        remove(title, year, rating, summary);
    });
    deleteButton.onclick = function() {
        remove(title, year, rating, summary);
    };
    deleteButton.innerHTML = "<img style='height: 1.5rem; width: auto;' src='../files/trash.svg'>";
    p.appendChild(deleteButton);


    //edit button 
    let editButton = document.createElement("button");
    editButton.setAttribute("id",  "svg-pencil");
    editButton.setAttribute("onclick", function() {
        edit(title, year, rating, summary);
    });
    editButton.onclick = function() {
        edit(title, year, rating, summary);
    };
    editButton.innerHTML = "<img style='height: 1.5rem; width: auto; background-color: beige;' onclick='addDialog.showModal();' class='svg-pencil' src='../files/pencil-edit-button-svg.svg'>";
    p.appendChild(editButton);
    


    let newEntry = {};
    newEntry.title = title;
    newEntry.year = year;
    newEntry.summary = summary;
    entries.push(newEntry);
    localStorage.setItem(idLabel, newEntry);




    return true;
}


addButton.addEventListener('click', () => {
    addDialog.showModal();
});


addSubmit.addEventListener('click', () => {
    let titleEntry = document.getElementById('title-entry').value;
    let yearEntry = document.getElementById('year-entry').value;
    let rating = document.getElementById('rating-entry').value;
    let summary = document.getElementById('summary-entry').value;
    add(titleEntry, yearEntry, rating, summary);
});


editButton.addEventListener('click', () => {
    let titleEdit = document.getElementById('title-edit').value;
    let yearEdit = document.getElementById('year-edit').value;
    let ratingEdit = document.getElementById('rating-edit').value;
    let summaryEdit = document.getElementById('summary-edit').value;
    remove(editTitle, editYear, editRating, editSummary);
    add(titleEdit, yearEdit, ratingEdit, summaryEdit);

});




add("Spirited Away", 2001, 'G', "Chihiro and her parents stumble upon an abandoned amusementt park. After gobbling down food meant for the spirits that live there, her parents are turned into pigs and Chihiro must find a way back home.");
add("Initial D", 1998, 'PG', "Takumi Fujiwara stumbles into the world of underground Touge racing. His ability to race is almost inherited.")

