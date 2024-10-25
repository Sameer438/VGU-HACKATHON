//script.js

// Handle Image Upload (from previous implementation)
document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please upload an image.");
        return;
    }
    const resultDiv = document.getElementById('detection-result');
    resultDiv.innerHTML = `<p>Analyzing ${file.name}...</p>`;
    setTimeout(() => {
        resultDiv.innerHTML = "<p>Analysis complete: No early signs detected.</p>";
    }, 2000); // Simulate AI analysis delay
});

// Handle Disease Selection
document.getElementById('submit-disease').addEventListener('click', () => {
    const selectedDisease = document.getElementById('disease').value;
    alert(`You selected ${selectedDisease} for detection.`);
});




//simulating video call
document.getElementById('video-call-doctor').addEventListener('click', () => {
    alert("Starting video call...");
    // Placeholder for video call implementation (WebRTC or other APIs)
});






// Handle Patient Categorization
const patients = [
    { name: "John Doe", status: "Not Positive" },
    { name: "Jane Smith", status: "Positive" },
    { name: "Emily Johnson", status: "Emergency" },
];

function populatePatientTable() {
    const tableBody = document.getElementById('patient-table');
    patients.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${patient.name}</td><td>${patient.status}</td>`;
        tableBody.appendChild(row);
    });
}
populatePatientTable();

// Handle Emergency Button
document.getElementById('emergency-btn').addEventListener('click', () => {
    alert("Emergency services have been contacted.");
});
