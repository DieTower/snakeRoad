
/* Botão para chamar a tabela de testes */
let id = "#callForAnotherTable_id";
let button = $(id);
button.addEventListener("click",function() { testButton(); });

setInterval(function() {
    definePlayer();
    lifesInRightLocal();
    showPlayer2Life();
}, 1);

/*
let triged = setInterval(function() {
    trigedHouses();
}, 1);
*/