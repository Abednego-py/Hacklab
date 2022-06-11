
function signUp(){
    fetch('https://voathclone.vercel.app/api/v1/auth/signup', {
        method : 'POST',
        body : JSON.stringify(),
        headers: {'content-type':
        'application/json'
    }
    })
    .then(
        res => res.json()
    )
    .then(data =>
         console.log(data))
    .catch(err => console.log(err))
}

let sign_up = document.getElementById('signUp')



