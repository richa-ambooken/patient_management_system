const API_URL = "http://localhost:8080/api/patients";

async function fetchPatients() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const list = document.getElementById("patient-list");
    list.innerHTML = data.map(p =>
        `<div>
            ${p.name}, Age: ${p.age}, Illness: ${p.disease}
            <button onclick="deletePatient('${p.id}')">Delete</button>
        </div>`
    ).join("");
}

async function addPatient() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const disease = document.getElementById("disease").value;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, disease })
    });

    fetchPatients();
}

async function deletePatient(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchPatients();
}

fetchPatients();
