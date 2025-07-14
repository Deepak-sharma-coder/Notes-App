const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");


//create a function show our notes
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
//call it the function 
showNotes();

//create a function because when i click the webpage when it refresh so my note's not store
//so create a function it is already store 
 function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
 }


//after this we add an event listner
createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = 'input-box'
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    notesContainer.appendChild(inputBox).appendChild(img);

})

//now we create a another add event listner for delete the notes 
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); //here we call the upload storage function 
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                uploadStorage();
            }
        })
    }
})

//create another eventlistenr  for keydown
//we will create this for when i click enter then we comes on next line in input box
notesContainer.addEventListener("keydown", (e) => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})

