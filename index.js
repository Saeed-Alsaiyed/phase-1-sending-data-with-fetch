// Add your code here

let body = document.querySelector('body');
function submitData(username, emailMessag){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: emailMessag,
        })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        body.append(object.id);
    })
    .catch(function (error) {
        alert("error")
        body.append(error.message);
     });

    
}

