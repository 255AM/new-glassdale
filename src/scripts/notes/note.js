export const noteObject = (current) => {
        
    return `
            <div class='col-md-3 card mb-4 bg-light'> 
                <h5>Note: ${current.note}</h5>
                <h6>Name: ${current.criminalName}</h6>
            </div>
        
    `
}