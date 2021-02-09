import { noteForm } from "./noteForm.js";
import { saveNote, getNotes, useNotes} from './noteDataProvider.js';
import { noteObject } from "./note.js";

document.querySelector("#notes-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.notes-form-container').innerHTML = ''
    document.querySelector('.officer-container').innerHTML = ''
    document.querySelector('.criminal-container').innerHTML = ''
    noteForm()

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
            console.log(notes);
    }) 
           
}
let eventHub = document.querySelector('body')
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveNote") {
        
        // Make a new object representation of a note
        let newNote = ''
        newNote = {
            // Key/value pairs here
            where:document.querySelector("#where").value,
            when:document.querySelector("#when").value,
            how:document.querySelector("#how").value
        }
        console.log(newNote);
        // Change API state and application state
        saveNote(newNote)
        .then(noteList) // Refresh your list of notes once you've saved your new one
    }
   
})


