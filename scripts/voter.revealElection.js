document.querySelector('body').addEventListener('click',findlocation);

function findlocation(event){


    var Class = event.target.classList[0]
    Class = Class.split('#');
    // console.log(Class[0])
    if(Class[0]==="votable") {
        document.querySelector('.fill-info').style.display="none";
        document.querySelector('.wait').style.display="none";
        document.querySelector('.give-vote').style.display="none";

        document.querySelector('.give-vote').style.display="block";
        listCandidates(Class[1]);
    }
    else if(Class[0]==="underVerification") {
        document.querySelector('.fill-info').style.display="none";
        document.querySelector('.wait').style.display="none";
        document.querySelector('.give-vote').style.display="none";

        document.querySelector('.wait').style.display="block";
    }
    else if(Class[0]==="elections") {
        document.querySelector('.fill-info').style.display="none";
        document.querySelector('.wait').style.display="none";
        document.querySelector('.give-vote').style.display="none";

        document.querySelector('.fill-info').style.display="block";
    }else if(Class[0]==="vote"){
        giveVote(Class[2],Class[1]);
    }

}

listCandidates = async function(election_id) {
    // var user_id = localStorage.getItem("user_id");
    
    document.querySelector('#candLists').innerHTML='';
    // let eID = input.value;
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            election_id: election_id
        })
    }

    fetch('http://localhost:5440/candidate/list',options)
    .then((res)=>{
        res.json()
        .then((data)=>{
            // console.log(data)
            let results = data.candidates;
            // console.log(results);
            var i=1;
            results.forEach(curr => {
                let html = `<tr><td>${i}</td><td>${curr.name}</td><td>${curr.party}</td>`;
                html+=  `<td>
                            <button class="vote#${curr.candidate_id}#${curr.election_id} btn btn-success btn-sm" type="button" name="vote">Vote</button>
                        </td></tr>`;
                document.querySelector('#candLists').insertAdjacentHTML('beforeend',html);
                i++;
            });
        })
    })
    .catch(err => console.error(err))
}

async function giveVote(election_id,candidate_id){
    var user_id = localStorage.getItem("user_id");
    if(confirm("Confirm your vote")) {
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                election_id: election_id,
                candidate_id:candidate_id,
                user_id:user_id
            })
        }
        fetch('http://localhost:5440/voter/giveVote',options)
        .then((res)=>{
            res.json()
            .then((data)=>{
                document.querySelector('.fill-info').style.display="none";
                document.querySelector('.wait').style.display="none";
                document.querySelector('.give-vote').style.display="none";
                location.reload();
            })
        })
        .catch(err => {
            // console.error(err);
            alert("unable to vote");
        })
    }
    
}
