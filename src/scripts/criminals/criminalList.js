import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalObject } from './criminal.js'
//when criminals link selected clear dom, then run criminal list
document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.notes-form-container').innerHTML = ''
    document.querySelector('.criminal-container').innerHTML = ''
    document.querySelector('.officer-container').innerHTML = ''
    criminalList()
})
//use fetch to getCriminal data and useCriminals data. 
export const criminalList = () => {
    let stringOfCriminals = ''
    getCriminals()
    // Now that you have the data, what component should be rendered?
    .then(() => {
            const criminals = useCriminals()
            //dfollowing was a fancy way of injecting bootstrap div labels for creating and braking rows. likely easier way to acheive the same
            let i = 0;
            criminals.forEach(c=>{
                if (i < 2){
                    stringOfCriminals += criminalObject(c)
                    i++
                }
                
                else {
                    stringOfCriminals += `
                    ${criminalObject(c)}
                    </div>
                    <div class='row justify-content-evenly'>
                    `
                    i = 0
                }
            })
            document.querySelector('.criminal-container').innerHTML = `
            <div class='row justify-content-evenly'>
            ${stringOfCriminals}
            `
            
            
    })
}
    
        
        
    