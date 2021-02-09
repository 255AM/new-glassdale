



const contentTarget = document.querySelector(".notes-form-container")

export const noteForm = () => {
    
    contentTarget.innerHTML = `
    <label for='where'>where</label>
        <input type="text" name='where' id="where">
        <label for='when'>when</label>
        <input type="text" id="when">
        <label for='how'>how</label>
        <input type="text" id="how">

        <button type='button' id="saveNote" >Save Note</button>

        
    `
}