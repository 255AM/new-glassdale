import {officerObject} from './officer.js'
import { useOfficers, getOfficers} from './officerProvider.js'
//import {} from '../criminals/criminalList.js'

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    //document.querySelector('.notes-form-container').innerHTML = ''
    document.querySelector('.officer-container').innerHTML = ''
    document.querySelector('.criminal-container').innerHTML = ''
    officerList()

})
export const officerList = () => {
    //targetElement.innerHTML = ""
    let stringOfOfficers = ''
    //call fx to return data from api
    getOfficers()
    //instruct program to wait until dat is returned
    .then(() => {
        const officers = useOfficers()
        let i = 0;
            officers.forEach(c=>{
                console.log(i);
                if (i < 2){
                    stringOfOfficers += officerObject(c)
                    i++
                }
                
                else {
                    stringOfOfficers += `
                    ${officerObject(c)}
                    </div>
                    <div class='row justify-content-evenly'>
                    `
                    i = 0
                }
    })
            document.querySelector('.officer-container').innerHTML = `
            <div class='row justify-content-evenly'>
            ${stringOfOfficers}
            `
            
            
    })
        
    
}       
        
        
    

