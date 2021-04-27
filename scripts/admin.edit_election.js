function addElection() {

    // For connecting Backend
    /********************************/

    var user = {
        election_id: document.getElementById('aeID').value,
        title: document.getElementById('aeTitle').value,
        address: document.getElementById('address').value,
    }
    console.log(user)
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch('http://localhost:5440/election/createElection', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    /********************************/

}
async function listElection(){

    // For connecting Backend
    /********************************/



}
