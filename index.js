let bool = true;
function exp() {
  let elemet = document.getElementById("main");
  var nav = document.getElementsByTagName("nav")[0];
  if (bool) {
    elemet.classList.replace("collapse", "expand");
    nav.classList.replace("collapse", "expand");
    bool = false;
  } else {
    elemet.classList.replace("expand", "collapse");
    nav.classList.replace("expand", "collapse");
    bool = true;
  }
}
