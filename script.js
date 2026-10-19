document.addEventListener("DOMContentLoaded", displayOrders);

function saveOrder(carName, carPrice) {
    let orders = JSON.parse(localStorage.getItem("arcadeOrders")) || [];
    let newOrder = {
        name: carName,
        price: carPrice,
        time: new Date().toLocaleTimeString()
    };
    orders.push(newOrder);
    localStorage.setItem("arcadeOrders", JSON.stringify(orders));
    displayOrders();
}
function displayOrders() {
    let orderList = document.getElementById("orders-list");
    let orders = JSON.parse(localStorage.getItem("arcadeOrders")) || [];
    if(orders.length === 0) {
        orderList.innerHTML = "<li>No cars ordered yet. Click 'Buy' on any car!</li>";
        return;
    }
     orderList.innerHTML ="";
     orders.forEach(order =>{
         let li = document.createElement("li");
         li.style.margin = "8px 0";
         li.innerHTML = `<strong>${order.name}</strong> - <span style="color: var(--accent-gold);">${order.price}</span> <small style="color: var(--text-secondary);">(Ordered at ${order.time})</small>`;
         orderList.appendChild(li);
     });
}
function showRangeMessage() {
document.getElementById("range-btn").innerHTML = "Bought!";
}
function showAMGMessage() {
document.getElementById("amg-btn").innerHTML = "Bought!";
}
function showDefenderMessage() {
document.getElementById("defender-btn").innerHTML = "Bought!";
}
function showTharMessage() {
document.getElementById("thar-btn").innerHTML = "Bought!";
}  
function showWranglerMessage() {
document.getElementById("wrangler-btn").innerHTML = "Bought!";
}
function showAMG6x6Message() {
    document.getElementById("AMG6x6-btn").innerHTML = "Bought!";
}
function showGrandMessage() {
    document.getElementById("grand-btn").innerHTML = "Bought!";
}