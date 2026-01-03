function approveLeave(btn) {
    const row = btn.closest('tr');
    const statusCell = row.querySelector('.status-cell');
    statusCell.innerHTML = '<span class="status-badge present">Approved</span>';
    btn.parentElement.innerHTML = '<span style="color:var(--success)">Done</span>';
}

function rejectLeave(btn) {
    const row = btn.closest('tr');
    const statusCell = row.querySelector('.status-cell');
    statusCell.innerHTML = '<span class="status-badge absent">Rejected</span>';
    btn.parentElement.innerHTML = '<span style="color:var(--danger)">Done</span>';
}

function submitLeave(event) {
    event.preventDefault();
    alert("Leave request submitted successfully! Status: Pending Approval.");
    document.querySelector('form').reset();
}

function toggleCheckIn(btn) {
    if(btn.innerText === "Check In") {
        btn.innerText = "Check Out";
        btn.classList.replace('btn-primary', 'btn-danger');
        document.getElementById('attend-status').innerText = "Working";
        document.getElementById('attend-status').className = "status-badge present";
    } else {
        btn.innerText = "Check In";
        btn.classList.replace('btn-danger', 'btn-primary');
        document.getElementById('attend-status').innerText = "Checked Out";
        document.getElementById('attend-status').className = "status-badge absent";
    }
}

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    sessionStorage.clear();

    window.location.href = "login.html"; 
});