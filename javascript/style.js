let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

let tableBody = document.getElementById('accounts-table-body');

accounts.forEach(acc => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${acc.name}</td>
        <td>₹${acc.balance}</td>
        <td>${acc.accNumber}</td>
        <td>${acc.pin}</td>
    `;

    tableBody.appendChild(row);
});
