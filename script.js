function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal-overlay');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}