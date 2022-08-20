function opentaa() {
    document.getElementById("skills").style.display = "block"
    document.getElementById("experience").style.display = "none"
    document.getElementById("education").style.display = "none"

}
function opentab() {
    document.getElementById("experience").style.display = "block"
    document.getElementById("skills").style.display = "none"
    document.getElementById("education").style.display = "none"

}
function opentac() {
    document.getElementById("education").style.display = "block"
    document.getElementById("skills").style.display = "none"
    document.getElementById("experience").style.display = "none"

}

let sidemenu=document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }
