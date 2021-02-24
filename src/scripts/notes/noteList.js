import { noteForm } from "./noteForm.js";
import { saveNote, getNotes, useNotes, deleteNote} from './noteDataProvider.js';
import { noteObject } from "./note.js";


document.querySelector("#enter-notes-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.notes-form-container').innerHTML = ''
    document.querySelector('.officer-container').innerHTML = ''
    document.querySelector('.criminal-container').innerHTML = ''
    document.querySelector('.notes-container').innerHTML = ' '
    noteForm()
})

document.querySelector("#view-notes-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.notes-form-container').innerHTML = ''
    document.querySelector('.officer-container').innerHTML = ''
    document.querySelector('.criminal-container').innerHTML = ''
    
    noteList()
})

export const noteList = () => {
    //call fx to return data from api
    getNotes()
    //instruct program to wait until dat is returned
    .then(() => {
        const notes = useNotes()
        document.querySelector('.notes-container').innerHTML = ' '
            notes.map(element => {
                document.querySelector('.notes-container').innerHTML += noteObject(element)
            });
            
    }) 
           
}
let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveNote") {
        noteList()  
        // Make a new object representation of a note
        let newNote = ''
        
        newNote = {
            // Key/value pairs here
            note:document.querySelector("#note").value,
            criminalName:document.getElementById('dropper').options[document.getElementById('dropper').selectedIndex].text,
            criminalID:document.querySelector('#dropper').value
        }
        document.querySelector('.notes-form-container').innerHTML = ''
    
        console.log(newNote);
        // Change API state and application state
        saveNote(newNote)
        .then(noteList) // Refresh your list of notes once you've saved your new one
    
    
    }

})


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "deleteNote") {
        let noteID = parseInt(document.querySelector('#deleteNoteSelect').value)
        console.log(typeof noteID);
        
        deleteNote(noteID)

  }
})





