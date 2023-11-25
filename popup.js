// This code only runs on the browser

const grabBtn = document.getElementById("grabBtn");

function get_selected_text() {
    if (window.getSelection()) {
        var select = window.getSelection();
        alert(select.toString());
    }
}


grabBtn.addEventListener("click",() => {    
    alert(window.getSelection());
})

