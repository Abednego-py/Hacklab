
let btn =  document.getElementById('btn-signUp')
let sign_up = document.getElementById('signUp')

window.addEventListener('load', ()=>{
    function sendData() {
        const XHR = new XMLHttpRequest();

        const FD =  new FormData(sign_up)

        XHR.open( "POST", "https://voathclone.vercel.app/api/v1/auth/signup")
        XHR.send(FD)

        XHR.addEventListener( "load", function(event) {
            alert( event.target.responseText );
          } );
          XHR.addEventListener( "error", function( event ) {
            alert( 'Oops! Something went wrong.' );
          } );
    }

    sign_up.addEventListener( "submit", function ( event ) {
        event.preventDefault();
    
        sendData();
    })
})

const url = 'https://voathclone.vercel.app/api/v1/auth/signin'

let btn_ =  document.getElementById('btn-signIn')
let login_ = document.getElementById('login_')


window.addEventListener('load', ()=>{
    function sendData() {
        const XHR = new XMLHttpRequest();

        const FD =  new FormData(login_)
        XHR.open( "POST", url)
        XHR.send(FD)


        XHR.addEventListener( "load", function(event) {
            alert( event.target.responseText);
          } );
          XHR.addEventListener( "error", function( event ) {
            alert( 'Oops! Something went wrong.' );
          } );
    }


    login_.addEventListener( "submit", function ( event ) {
        event.preventDefault();
    
        sendData();
    })
})


//Recommendation script

fetch('https://voathclone.vercel.app/api/v1/predict', {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body : JSON.stringify({
    }),
})
.then(
    
)






