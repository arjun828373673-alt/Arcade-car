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
saveOrder("Range Rover", "3.38 cr");
}
function showAMGMessage() {
document.getElementById("amg-btn").innerHTML = "Bought!";
saveOrder("Mercedes AMG G63", "4.50cr");
}
function showDefenderMessage() {
document.getElementById("defender-btn").innerHTML = "Bought!";
saveOrder("Land Rover Defender", "1.20cr");
}
function showTharMessage() {
document.getElementById("thar-btn").innerHTML = "Bought!";
saveOrder("Mahindra Thar", "27 lakh");
}  
function showWranglerMessage() {
document.getElementById("wrangler-btn").innerHTML = "Bought!";
saveOrder("Jeep Wrangler", "70.80 lakh");
}
function showAMG6x6Message() {
document.getElementById("AMG6x6-btn").innerHTML = "Bought!";
saveOrder("Mercedes AMG G63 6x6", "10cr");
}
function showGrandMessage() {
document.getElementById("grand-btn").innerHTML = "Bought!";
saveOrder("Jeep Grand Cherokee", "63.85 lakh");
}