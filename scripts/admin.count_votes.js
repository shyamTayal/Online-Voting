var input = document.querySelector('#elecID');
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"];

document.querySelector('#search_result').addEventListener('click',fetchResults)

async function fetchResults(){
    document.querySelector('#candList').innerHTML='';
    let semester = input.value;
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            my_id:myID,
            my_level:myLevel,
            election_ID: input
        })
    }

    fetch('http://localhost:5440/candidate/listCandidate?action=2',options)
    .then((res)=>{
        res.json()
        .then((data)=>{
            let results = data.actions;
            console.log(results);
            var i=1;
            results.forEach(curr => {
                let html = `<td>${i}</td><td>${curr.enrollment_id}</td><td>${curr.total_credits}</td><td>${curr.gpa}</td>`
                document.querySelector('#result_table').insertAdjacentHTML('beforeend',html);
            });
            i++;
        })
    })
    .catch(err => console.error(err))

}
