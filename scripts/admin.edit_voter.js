let users = [];

currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"];

function addVoter() {

    // For connecting Backend
    /********************************/

    var user = {
        user_id: document.getElementById('aUserID').value,
        admin_level: 0,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"],
        user_name: document.getElementById('fullName').value,
        user_dob: document.getElementById('dob').value,
        user_phno: document.getElementById('phNum').value,
        user_gender: document.getElementById('gender').value,
        user_address: document.getElementById('address').value,
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
function debarVoter(){

    // For connecting Backend
    /********************************/

    var user = {
        user_id: document.getElementById('dUserID').value,
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

    console.log('Debared', { user });

}
