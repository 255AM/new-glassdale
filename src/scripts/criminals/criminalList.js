import { getCriminals, useCriminals } from './criminalProvider.js'
import { Criminal } from './criminal.js'
import { getFacilities, useFacilities  } from '../facilities/facilitiesData.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/criminalFacilityProvider.js'
//when criminals link selected clear dom, then run criminal list
document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    console.log('hi');
    // invoke the function that prints the criminals
    document.querySelector('.notes-form-container').innerHTML = ''
    document.querySelector('.criminal-container').innerHTML = ''
    document.querySelector('.officer-container').innerHTML = ''
    CriminalList()
})
//use fetch to getCriminal data and useCriminals data. 
// export const criminalList = () => {
//     let stringOfCriminals = ''
//     getCriminals()
//     .then(getFacilities)
//     .then(

//     )
//     // Now that you have the data, what component should be rendered?
//     .then(() => {
//             const criminals = useCriminals()
//             //dfollowing was a fancy way of injecting bootstrap div labels for creating and braking rows. likely easier way to acheive the same
//             let i = 0;
//             criminals.forEach(c=>{
//                 if (i < 2){
//                     stringOfCriminals += criminalObject(c)
//                     i++
//                 }
                
//                 else {
//                     stringOfCriminals += `
//                     ${criminalObject(c)}
//                     </div>
//                     <div class='row justify-content-evenly'>
//                     `
//                     i = 0
//                 }
//             })
//             document.querySelector('.criminal-container').innerHTML = `
//             <div class='row justify-content-evenly'>
//             ${stringOfCriminals}
//             `
            
            
//     })
// }
    
        
export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}        

let contentTarget = document.querySelector('.criminal-container')
const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    console.log('here');
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}