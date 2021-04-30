
    user_id = localStorage.getItem("user_id");
    const obj = {
        user_id:user_id
    }
    // console.log(user_id)
    document.querySelector('.nav').innerHTML='';
    // let eID = input.value;
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    }

    fetch('http://localhost:5440/election/list',options)
    .then((res)=>{
        res.json()
        .then((data)=>{

            if(data.votableElections[0]) votable(data.votableElections)
            if(data.underVerification[0]) underVerification(data.underVerification)
            if(data.elections[0]) elections(data.elections)
        })
    })
    .catch(err => console.error(err))

    
async function votable(array){
    var html = `<li class="votable"> <center> <p style="color:white;">Vote Now</p> </center> </li>
                <br>`;
    array.forEach((curr)=>{
        html+=`<li class="votable#${curr.election_id}"><a class="votable#${curr.election_id}" ><i class="votable#${curr.election_id} now-ui-icons gestures_tap-01"></i><p class="votable#${curr.election_id}">${curr.title}</p></a></li>`;
    })
    // console.log(html)
    document.querySelector('.nav').innerHTML+=html;
}

async function underVerification(array){
    var html = `<hr><li class="under-verification"> <center> <p style="color:white;">Under Verification</p> </center> </li>
                <br>`;
    array.forEach((curr)=>{
        html+=`<li class="underVerification#${curr.election_id}"><a class="underVerification#${curr.election_id}"><i class="underVerification#${curr.election_id} now-ui-icons gestures_tap-01"></i><p class="underVerification#${curr.election_id}">${curr.title}</p></a></li>`;
    })
    // console.log(html)
    document.querySelector('.nav').innerHTML+=html;
}

async function elections(array){
    var html = `<hr><li class="elections"> <center> <p style="color:white;">Elections</p> </center> </li>
                <br>`;
    array.forEach((curr)=>{
        html+=`<li class="elections#${curr.election_id}"><a class="elections#${curr.election_id}"><i class="elections#${curr.election_id} now-ui-icons gestures_tap-01"></i><p class="elections#${curr.election_id}">${curr.title}</p></a></li>`;
    })
    // console.log(html)
    document.querySelector('.nav').innerHTML+=html;
    
    html+=`<li style="position:fixed; bottom:1em; width:200px;">
            <a href="../login.html">
            <i class="now-ui-icons sport_user-run"></i>
            <p>Logout</p>
        
            </a>
            </li>`;
    document.querySelector('.nav').innerHTML+=html;

}


