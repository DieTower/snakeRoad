
/* Botão para chamar a tabela de testes */
let id = "#callForAnotherTable_id";
let button = $(id);
button.addEventListener("click",function() { testButton(); });

setInterval(function() {
    definePlayer();
    showPlayer2Life();
}, 1);