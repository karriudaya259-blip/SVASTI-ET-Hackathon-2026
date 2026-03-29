function addLog(msg) {
    const log = document.getElementById('auditContainer');
    const time = new Date().toLocaleTimeString();
    log.innerHTML += `<div>[${time}] ${msg}</div>`;
    log.scrollTop = log.scrollHeight;
}

function handleRegistration() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const vehicle = document.getElementById('vehicle').value;

    if (!name || !vehicle) {
        alert("Please fill in Name and Vehicle Number!");
        return;
    }

    addLog(`Data Received: ${vehicle} | Owner: ${name}`);

    // SIMULATED SMS LOGIC
    alert(`[SYSTEM ALERT to ${phone}]\nHello ${name}, SVASTI has registered your trip. Drive safely!`);
    
    // Update AI Prediction UI
    document.getElementById('congVal').innerText = "12%";
    document.getElementById('delayVal').innerText = "4 mins";
    document.getElementById('fuelVal').innerText = "Optimal";

    document.getElementById('statusMessage').innerHTML = "<p style='color:lime; text-align:center;'>Done!</p>";
    addLog(`SMS Triggered for ${phone}.`);
}

window.onload = () => addLog("SVASTI AI Systems Ready.");
