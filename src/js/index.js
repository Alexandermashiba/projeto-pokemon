const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

console.log(body);

botaoAlterarTema.addEventListener("click", () => {


    const modoEscuroestaativo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroestaativo) {
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    }

    else {
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

});



