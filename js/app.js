function show() {

    var x = document.getElementById("upper_pane")
    x.style.visibility = "visible"
    var xb = document.getElementById("hide_btn");

    xb.style.visibility = "visible"
    var xc = document.getElementById("toggle");

    xc.style.visibility = "collapse"


}

function hide() {

    var x = document.getElementById("upper_pane");
    var xb = document.getElementById("hide_btn");
    x.style.visibility = "collapse";
    xb.style.visibility = "collapse"
    var xc = document.getElementById("toggle");

    xc.style.visibility = "visible"
}