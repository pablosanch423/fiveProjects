let menuItems = document.getElementsByClassName("menuItem");

function calcTotal() {
    let orderTotal = 0;
    for (let i in menuItems) {
        if (menuItems[i].checked) {
            orderTotal += parseFloat(menuItems[i].value);
        }
    }

    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
