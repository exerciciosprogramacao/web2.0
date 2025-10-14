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

//troca de modo escoro/claro
function toggleDarkMode() {
  document.body.classList.toggle('cyberpunk');
}


//ativa e desativa a pagina pela url
const paginaAtual = window.location.pathname.split("/").pop();
const btProjetoAtivo = document.querySelectorAll(".circle a");

btProjetoAtivo.forEach(link => {
 
    const btAtivo = link.parentElement;
    const enderecoLimpo = link.getAttribute("href").replace("./", "");
    if(enderecoLimpo === paginaAtual){
      btAtivo.classList.add("ativo")
    }else{
      btAtivo.classList.remove("ativo")
    }
});

