let users = [];

currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"];

function addCandidate() {

    // For connecting Backend
    /********************************/

    var user = {
        user_id: document.getElementById('aCanID').value,
        admin_level: 0,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"],
        user_eid: document.getElementById('eID').value,
        user_name: document.getElementById('fullName').value,
        user_gender: document.getElementById('gender').value,
        user_party: document.getElementById('pName').value,
        user_party_logo : document.getElementById('pLogo').value,
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    // fetch('http://localhost:5440/user/create', options)
    //     .then(res => {
    //         res.json()
    //             .then(data => {
    //                 console.log(data)
    //             })
    //             .catch(err => console.log(`${err}`))
    //     })
    //     .catch(err => console.error(err))

    /********************************/

    users.push(user);
    document.forms[0].reset();

    console.log('added', { users });
}
function removeCandidate(){

    // For connecting Backend
    /********************************/

    var user = {
        user_id: document.getElementById('rCanID').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    //
    // fetch('http://localhost:5440/user/remove', options)
    //     .then(res => {
    //         res.json()
    //             .then(data => {
    //                 console.log(data)
    //             })
    //             .catch(err => console.log(`${err}`))
    //     })
    //     .catch(err => console.error(err))

    /********************************/

    document.forms[0].reset();

    console.log('Removed', { user });

}
