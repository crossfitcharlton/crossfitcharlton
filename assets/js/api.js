const api_endpoint = 'https://paladinmailapi.paladinwebgroup.com/';
function get_csrf() {

    return new Promise( resolve =>
        fetch( `${api_endpoint}?csrf`, {
            method:'GET',
        })
        .then( response => response.json() )
        .then( token => resolve(token) )
        .catch( err => console.log(err) )
    );
}
    
function submit_contact(data) {
    return new Promise( resolve =>
        fetch( api_endpoint, {
            method:'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: data 
        })
        .then( response => response.json() )
        .then( token => resolve(token) )
        .catch( err => console.log(err) )
    );
}

export { get_csrf, submit_contact };