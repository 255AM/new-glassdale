import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminalObject } from './criminal.js'

export const criminalList = () => {
    let stringOfCriminals = ''
    getCriminals()
    // Now that you have the data, what component should be rendered?
    .then(() => {
            const criminals = useCriminals()
            //debugger
            let i = 0;
            criminals.forEach(c=>{
                console.log(i);
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
    
        
        
    