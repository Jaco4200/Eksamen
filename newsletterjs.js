function validation(){
    var nameV = document.getElementById('navn').value;
    var mailV = document.getElementById('email').value;

    var errormsgV = document.getElementById('error_message');
    var msgV =["Venligst skriv navn", "Venligst skriv email"];


    if(nameV.length <5 ){
        errormsgV.innerHTML = msgV[0];
        return false;
    }

    if(mailV.length <6 ){
        errormsgV.innerHTML = msgV[1];
        return false;
    }

}

