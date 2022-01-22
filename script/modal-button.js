// Get the button that opens the modal
let modalBtn = document.querySelector("#open-modal-btn");


// When the user clicks on the button, open the modal
modalBtn.onclick = function () {
    let myModal = document.createElement('div');
    myModal.id = 'my-modal';
    myModal.className = 'show-modal';
    myModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal-btn">&times;</span>
            <p>Some text in the Modal..</p>
        </div>`;
    document.body.appendChild(myModal)

    let closeBtn = document.querySelector(".close-modal-btn");

    function closeModal() {
        document.body.removeChild(myModal);
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function () {
        closeModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === myModal) {
            closeModal();
        }
    }
}
