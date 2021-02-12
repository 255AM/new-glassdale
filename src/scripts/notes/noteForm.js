//import { getCriminals } from "../criminals/criminalProvider.js";
//import { dropDownCreator } from "./criminalDropDownCreator.js";
import { getCriminals, useCriminals } from '../criminals/criminalProvider.js'

const contentTarget = document.querySelector(".notes-form-container")

export const noteForm = () => {
    getCriminals().then(() => {
        let criminals = useCriminals()
        contentTarget.innerHTML = `
            <label for='note'>Enter Note</label>
            <input type="text" name='note' id="note">
            <select class='dropdown' id='dropper'>
            <option value="0">Please Select</option>
            ${
                    criminals.map(current => {
                    return `<option value='${current.id}'>${current.name}</option>`
                })
            }
            </select>
            <button type='button' id="saveNote" >Save Note</button>
            <br>
            <button id="deleteNote">Delete</button>
            <label for='note'>Delete Note</label>
            <input type="text" name='deleteNote' id="deleteNoteSelect">

    `
    })
    
}