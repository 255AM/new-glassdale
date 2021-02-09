export const noteObject = (current) => {
        
    return `
            <div class='col-md-3 card mb-4 bg-light'> 
                <h5>Where: ${current.where}</h5>
                <h6>When: ${current.when}</h6>
                <h6>How: ${current.how}</h6>
            </div>
        
    `
}