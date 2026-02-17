function verifyEmail() {
    let email = document.getElementById("emailInput").value;

    fetch("https://your-backend-url.onrender.com/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText = data.status;
    });
}

function uploadCSV() {
    let file = document.getElementById("csvFile").files[0];
    let formData = new FormData();
    formData.append("file", file);

    fetch("https://your-backend-url.onrender.com/bulk", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("bulkResult").innerText =
            data.map(r => r.status).join("\n");
    });
}