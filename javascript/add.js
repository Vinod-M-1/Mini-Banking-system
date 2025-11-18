document.getElementById("create-account-button").addEventListener("click", function () {

    let name = document.getElementById("account-holder-name").value.trim();
    let balance = document.getElementById("initial-balance").value.trim();
    let accNumber = document.getElementById("account-number").value.trim();
    let pin = document.getElementById("account-pin").value.trim();

    if (!name || !balance || !pin) {
        alert("Fill all fields.");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    accounts.push({ name, balance, accNumber, pin });

    localStorage.setItem("accounts", JSON.stringify(accounts));

    location.reload();
});
