
/* Botão para chamar a tabela de testes */
let id = "#callForAnotherTable_id";
let button = $(id);
button.addEventListener("click",function() { testButton(); });

setInterval(function() {
    definePlayer();
    lifesInRightLocal();
    showPlayer2Life();
}, 1);

checkLifes(); //Esta função não deve se encontrar dentro de nenhum setInterval pois a mesma já tem um.


