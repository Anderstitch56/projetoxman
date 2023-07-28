const personagens = document.querySelectorAll (".personagem");

personagens.forEach (personagem => {
    personagem.addEventListener ("mouseenter", () => {
//para celular
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behaviour: "smooth" });
        }
//permite trocar a seleção do personagem
        const personagemSelecionado = document.querySelector (".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");
//altera a imagem do personagem selecionado
        const imagemPersonagemGrande = document.querySelector (".personagem-grande");
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
//altera o nome do prsonagem a ser selecionado
        const nomePersonagem = document.getElementById ("nome-personagem");
        nomePersonagem.innerText = personagem.getAttribute ("data-name");
//Altera a descrição do personagem selecionado
        const descricaoPersonagem = document.getElementById ("descricao-personagem");
        descricaoPersonagem.innerText = personagem.getAttribute ("data-description");


    })
})