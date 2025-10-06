var acc = document.getElementsByClassName("accordion");
var i;
//cada accordion é um indice do for, isso é para poder usar com varios accordions no mesmo projeto
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function toggleDarkMode() {
  document.body.classList.toggle('cyberpunk');
}



