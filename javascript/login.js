let buttonElement = document.querySelector("button");
buttonElement.addEventListener('click', function() {
    let acc_n = document.getElementById("acc-n").value.trim();
    let pin = document.getElementById("pin-n").value.trim();
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let it
    for(it of accounts){
        if(it.accNumber == acc_n){
            if(it.pin == pin){
                window.location.href = "user.html"
                return
            }else{
                window.location.href = "incorrect.html"
                return
            }
        }
    }
    window.location.href = "noacc.html"
})