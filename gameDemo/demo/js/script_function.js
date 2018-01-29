/* Função para facilitar a procura de elementos */
function $(variavel,contexto) {
    if(contexto) {
        return contexto.querySelector(variavel);
    } else {
        return document.querySelector(variavel);
    }
}

function randomBetween(numMin,numMax) {
    return Math.floor(Math.random() * (numMax - numMin)) + numMin;
}

// Verifica a vida dos jogadores, se alguma das duas chegar a zero o jagodor em questão perde
function checkLifes() {
    let lifeTriged = setInterval(function() {
        let playerClass = "." + localStorage.getItem("playerInGame") + "_class";
        let player = $(playerClass);
        let oponent;
        
        if(localStorage.getItem("playerInGame") == "player1") {
            oponent = "player2";
        } else if(localStorage.getItem("playerInGame") == "player2") {
            oponent = "player1";
        }
        
        if(parseInt($("#lifePercentagem_id").innerHTML) == 0) {
            setTimeout(function() {
                alert("The " + oponent + " won the game.");
                window.location.href = "../demo.html";
            }, 1000);
        clearInterval(lifeTriged);
    } else if(parseInt($("#hiddenLife").innerHTML) == 0) {
        setTimeout(function() {
            alert("The " + localStorage.getItem("playerInGame") + " won the game.");
            window.location.href = "../demo.html";
        }, 1000);
            clearInterval(lifeTriged);
        }
        
    }, 1);
}

// Muda a vida dos players de sitio em tempo real dependendo do player que estiver a jogar
function lifesInRightLocal() {
    let hiddenLife = $("#hiddenLife");
    let life = $("#lifePercentagem_id");
    
    if(localStorage.getItem("playerInGame") == "player1") {
        if(hiddenLife.classList.contains("player1Life")) {
            hiddenLife.classList.remove("player1Life");
            hiddenLife.classList.add("player2Life");
        }
        
        if(life.classList.contains("player2Life")) {
            life.classList.remove("player2Life");
            life.classList.add("player1Life");
            $(".yLife_class",this.life).style.width = localStorage.getItem("player1Life") + "%";
        }
    } else if(localStorage.getItem("playerInGame") == "player2") {
        if(hiddenLife.classList.contains("player2Life")) {
            hiddenLife.classList.remove("player2Life");
            hiddenLife.classList.add("player1Life");
        }
        
        if(life.classList.contains("player1Life")) {
            life.classList.remove("player1Life");
            life.classList.add("player2Life");
            $(".yLife_class",this.life).style.width = localStorage.getItem("player2Life") + "%";
        }
    }
}

/* Manipulação de dados relativamente às cartas */
function searchClassCard(elementId) {
    let idName;
    
    if(elementId.slice(0,1) == "#") {
        idName = elementId;
    } else {
        idName = "#" + elementId;
    };
    
    let contador;
    for(contador=1; contador<=30; contador++) {
        let classCard = "card" + contador;
        if($(idName).classList.contains(classCard)) {
            return "." + classCard;
        }
        /*
        if($(idName).classList.contains('cardEmpty')) {
            return ".cardEmpty";
        }
        */
    }
}

function searchIdCard(elementClass) {
    let className;
    
    if(elementClass.slice(0,1) == ".") {
        className = elementClass.slice(1);
    } else {
        className = elementClass;
    };
    
    let contador;
    for(contador=1; contador<=8; contador++) {
        let idCard = "#card" + contador + "_id";
        if($(idCard).classList.contains(className)) {
            return idCard;
        }
    }
}

function searchIdCardNumber(elementClass) {
    let className = elementClass;
    
    if(elementClass.slice(0,1) == ".") {
        className = elementClass.slice(1);
    } else {
        className = elementClass;
    };
    
    let contador;
    for(contador=1; contador<=8; contador++) {
        let idCard = "#card" + contador + "_id";
        if($(idCard).classList.contains(className)) {
            return contador;
        }
    }
}

function removeCardData(cardId) {
    let idName;
    
    if(cardId.slice(0,1) == "#") {
        idName = cardId;
    } else {
        idName = "#" + cardId;
    };
    
    let contador;
    for(contador=1; contador<=30; contador++) {
        let possibleCard = "card" + contador;
        if($(idName).classList.contains(possibleCard)) {
            $(idName).classList.remove(possibleCard);
        }
    }
}

function copyAnotherCard(card1,card2) {
    let cardNum1 = "#card" + card1 + "_id";
    let cardNum1Class = searchClassCard(cardNum1).slice(1);
    
    let cardNum2 = "#card" + card2 + "_id";
    let cardNum2Class = searchClassCard(cardNum2).slice(1);
    
    $(cardNum1).classList.remove(cardNum1Class);
    $(cardNum1).classList.add(cardNum2Class);
    
    
    //cards.defineCardHandNumber();
    
    //let number = parseInt(card1) - 1;
    //console.log($(cardNum1).parentNode.children[number].innerHTML);
    /*
    $("#limbo").innerHTML = $(cardNum1).parentNode.children[number].innerHTML;
    $(cardNum1).parentNode.children[number].innerHTML = " ";
    $(cardNum1).parentNode.children[number].innerHTML = $("#limbo").innerHTML;
    $("#limbo").innerHTML = " ";
    */
    
    //removeCardData(cardNum2); //console.log(searchClassCard("#card2_id"));
    //$(cardNum2).classList.add('cardEmpty');
}

function playableCards() {
    let playableCardsCount = 0;
    
    let contador;
    for(contador=1; contador<=8; contador++) {
        let card = "#card" + contador + "_id";
        if(!$(card).classList.contains('hidden')) {
            playableCardsCount++;
        }
    }
    
    return playableCardsCount;
}

/* Função para mudar o nome do player dependendo da class que estiver inserida no SPAN */
function definePlayer() {
    let playerSpan = $("#thePlayer");
    let anotherPlayerSpan = $("#theAnotherPlayer");

    if(localStorage.getItem("playerInGame") == "player1") {
        playerSpan.innerHTML = "Player 1";
        anotherPlayerSpan.innerHTML = "Player 2";
        
        if(playerSpan.classList.contains('thePlayer2')) {
           playerSpan.classList.remove('thePlayer2');
        };
        
        playerSpan.classList.add('thePlayer1');
        
    } else if(localStorage.getItem("playerInGame") == "player2") {
        playerSpan.innerHTML = "Player 2";
        anotherPlayerSpan.innerHTML = "Player 1";
        
        if(playerSpan.classList.contains('thePlayer1')) {
           playerSpan.classList.remove('thePlayer1');
        };
        
        playerSpan.classList.add('thePlayer2');
    }
}

/* Diz se o Player que se encontra a jogar é o Player1 ou o Player2 ao */
function getPlayerType() {
    if($("#thePlayer").classList.contains("thePlayer1")) {
        return "player1";
    } else if($("#thePlayer").classList.contains("thePlayer2")) {
        return "player2";
    };
}

/* Diz quem é o oponente do jogador em jogo */
function getOponentType() {
    
    if(localStorage.getItem("playerInGame") == "player1") {
        return "player2";
    } else if(localStorage.getItem("playerInGame") == "player2") {
        return "player1";
    };
    
}

function showPlayer2Life() {
    let playerSpan1 = $(".player2Span1");
    let playerSpan2 = $(".player2Span2");
    
    let playerSpanLife = $("#otherPlayerLife_id");
    
    playerSpanLife.addEventListener("mouseover",function() {
        if(playerSpan2.classList.contains("vanish")) {
            playerSpan2.classList.remove("vanish");
            playerSpan1.classList.add("vanish");
        };
    });
    
    playerSpanLife.addEventListener("mouseout",function() {
        if(playerSpan1.classList.contains("vanish")) {
            playerSpan2.classList.add("vanish");
            playerSpan1.classList.remove("vanish");
        };
    });
};

/* Corrige uma class introduzida em um parametro caso a mesma não esteja correta */
function classBroker(elementInsert) {
    let firstChar = elementInsert.slice(0,1);
    if(firstChar === ".") {
        return elementInsert;
    } else if(firstChar !== "." && firstChar !== "#") {
        return "." + elementInsert;
    } else if(firstChar === "#") {
        console.log("The inserted element is an id!");
        return "Error in \"classBroker\" function ";
    };
};

/* Corrige um id introduzida em um parametro caso a mesma não esteja correta */
function idBroker(elementInsert) {
    let firstChar = elementInsert.slice(0,1);
    if(firstChar === "#") {
       return elementInsert
    } else if(firstChar !== "#" && firstChar !== ".") {
       return "#" + elementInsert;
    } else if(firstChar === ".") {
        console.log("The inserted element is an class!");
        return "Error in \"idBroker\" function ";
    };
};

/* corrige completamente qualquer valor que o usuario introduza em referencia ao player e a sua CLASS */
function playerClassBroker(playerType) {
    if(playerType == 1 || playerType == 2) {
        return classBroker("player" + playerType + "_class");
    } else if(playerType == "player1" || playerType == "player2") {
        return classBroker(playerType + "_class");
    } else {
        return classBroker(playerType);
    };
};

/* corrige completamente qualquer valor que o usuario introduza em referencia ao player e a sua ID */
function playerIdBroker(playerType) {
    if(playerType == 1 || playerType == 2) {
        return idBroker("player" + playerType + "_id");
    } else if(playerType == "player1" || playerType == "player2") {
        return idBroker(playerType + "_id");
    } else {
        return idBroker(playerType);
    };
};

/* Função para descobrir a casa em que um jogador em particular se encontra */
function searchPlayerHouse(playerType) {
    var searchPlayer = $(playerClassBroker(playerType));
    
    if(searchPlayer !== "undefined") {
        let parentName = searchPlayer.parentElement;
        let getClass = parentName.id;
        let houseNumber = getClass.substr(9,3).split("_")[0];
        return houseNumber;
    } else {
        console.log("the class you are looking for does not exist!");
    };
};

/* Muda o player diretamente para uma casa em especifico */
function playerChangeFor(playerType,houseNum) {
    
    /* Descobre onde se encontra o utilizador */
    let player = classBroker(playerType);
    let oldHouse = $(player);
    
    /* descobrir para onde vai o utilizador */
    let newHouse;
    let newPlayerHouse = "#gridHouse" + houseNum + "_id";
    if(player === ".player1_class" && ((houseNum <= 44) && (houseNum >= 1))) {
        newHouse = $(newPlayerHouse).children[0]; console.log(newHouse);
    } else if(player === ".player2_class" && ((houseNum <= 44) && (houseNum >= 1))) {
        newHouse = $(newPlayerHouse).children[2];
    };
    console.log(houseNum);
    if(houseNum < 45 && 0 < houseNum) {
        if(searchPlayerHouse(player) !== houseNum) {
            
            if(player === ".player1_class") {
                newHouse.classList.add("player1_class"); //Colocar o utilizador da nova casa
                oldHouse.classList.remove("player1_class"); //Remover o utilizador da casa anterior
                trigedHouses();
            } else {
                newHouse.classList.add("player2_class"); //Colocar o utilizador da nova casa
                oldHouse.classList.remove("player2_class"); //Remover o utilizador da casa anterior
                trigedHouses();
            };

        } else if (searchPlayerHouse(player) === houseNum) {
            console.log("The houses not be a same!");

        };
    } else if(houseNum > 44) {
        console.log("The house number cannot be bigger than 44");
    } else if(houseNum < 1) {
        console.log("The house number cannot be smaller than 1");
    };
    
};

function playerChangeForJumpFunction(playerType,houseNum) {
    
    /* Descobre onde se encontra o utilizador */
    let player = classBroker(playerType);
    let oldHouse = $(player);
    
    /* descobrir para onde vai o utilizador */
    let newHouse;
    let newPlayerHouse = "#gridHouse" + houseNum + "_id";
    if(player === ".player1_class") {
        newHouse = $(newPlayerHouse).children[0];
    } else {
        newHouse = $(newPlayerHouse).children[2];
    };
    
    if(houseNum < 45 && 0 < houseNum) {
        if(searchPlayerHouse(player) !== houseNum) {
            
            if(player === ".player1_class") {
                newHouse.classList.add("player1_class"); //Colocar o utilizador da nova casa
                oldHouse.classList.remove("player1_class"); //Remover o utilizador da casa anterior
                //trigedHouses();
            } else {
                newHouse.classList.add("player2_class"); //Colocar o utilizador da nova casa
                oldHouse.classList.remove("player2_class"); //Remover o utilizador da casa anterior
                //trigedHouses();
            };

        } else if (searchPlayerHouse(player) === houseNum) {
            console.log("The houses not be a same!");

        };
    } else if(houseNum > 44) {
        console.log("The house number cannot be bigger than 44");
    } else if(houseNum < 1) {
        console.log("The house number cannot be smaller than 1");
    };
    
}; // Ignorar completamente esta função, mas não a apaguem!!! Ela tem um proposito!!!

/* Salta diversas casas antes de chegar há casa final. Atenção, não usar esta função como pode de mover o jogador! As casas especiais não são ativadas com o uso destra função*/
function jump(numberOfHouses,playerType,forwardOrBackward) {
    
    /* Descobre onde se encontra o utilizador */
    let player = classBroker(playerType);
    let oldHouse = $(player);
    
    
    if(forwardOrBackward === "true") {
        
        let theNextHouse = parseInt(searchPlayerHouse(player)) + parseInt(numberOfHouses);
        
        if(theNextHouse <= 44) {
            
            let playerHouse = searchPlayerHouse(player);
            
            while(playerHouse < theNextHouse) {
                playerHouse++;
                playerChangeForJumpFunction(player,playerHouse); // playerType and houseNum
            };
            
        } else {
            console.log("The final house cannot be bigger than 44");
        };
        
    } else {
        
        let theNextHouse = parseInt(searchPlayerHouse(player)) - parseInt(numberOfHouses);  
        
        if(theNextHouse >= 1) {
            
            let playerHouse = searchPlayerHouse(player);
            
            while(playerHouse > theNextHouse) {
                playerHouse--;
                playerChangeForJumpFunction(player,playerHouse); // playerType and houseNum
            };
            
        } else {
            console.log("The final house cannot be smaller than 1");
        };
        
    };
    
};


/* Efeitos das casas */
function yellowTrigged() {
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
    
    if(player.classList.contains("yellowHouse")) {
        //alert("yellowHouse");
        
        let diceNum1 = dice.throwDice(1);
        let diceNum2 = dice.throwDice(2);
        let sum = parseInt(diceNum1) + parseInt(diceNum2);
        let evenOrOdd = sum % 2;
        
        setTimeout(function() {
            let productForFive = sum * 5;
            
            if(evenOrOdd == 0) { // even side
                if(localStorage.getItem("playerInGame") == "player1") {
                    // vida após a multiplicação dos dados por cinco
                    supOrNot = parseInt(localStorage.getItem("player2Life")) + productForFive;
                    
                    if(supOrNot <= 100) {
                        localStorage.setItem("player2Life",supOrNot);
                        alert("The opponentlife was increased.");
                    } else {
                        localStorage.setItem("player2Life","100");
                        alert("The opponent life did not increased, because yours life can't be more of hundred."); console.log("work");
                    }
                    
                } else if(localStorage.getItem("playerInGame") == "player2") {
                    // vida após a multiplicação dos dados por cinco
                    supOrNot = parseInt(localStorage.getItem("player1Life")) + productForFive;
                    
                    if(supOrNot <= 100) {
                        localStorage.setItem("player1Life",supOrNot);
                        alert("The opponentlife was increased.");
                    } else {
                        localStorage.setItem("player1Life","100");
                        alert("The opponent life did not increased, because yours life can't be more of hundred.");
                    }
                    
                }
            } else if(evenOrOdd == 1) { // odd side
                if(localStorage.getItem("playerInGame") == "player1") {
                    life.lessEffectFor(productForFive); console.log("work 2");
                    alert("Yours life was decreased.");
                    
                } else if(localStorage.getItem("playerInGame") == "player2") {
                    life.lessEffectFor(productForFive);
                    alert("Yours life was decreased.");
                    
                }
            }
        }, 2000);
    }
}

function redTrigged() {
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
    
    if(player.classList.contains("redHouse")) {
        alert("O adeversário ganhou uma nova carta!");
        cards.addOneCardInOponentHand();
    }
}

function blueTrigged() {
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
    
    if(player.classList.contains("blueHouse")) {
        
        $("#bluePanel_id").classList.remove("hidden");
        
        let thePlayer = "." + localStorage.getItem("playerInGame") + "_class";
        let playerHouse = parseInt(searchPlayerHouse(thePlayer));
        
        let optionElement = "";
        let contador;
        for(contador=1; contador<playerHouse; contador++) {
            let theHouse = "#gridHouse" + contador + "_id";
            let house = $(theHouse);
            
            if(!house.classList.contains('yellowHouse') && !house.classList.contains('redHouse') && !house.classList.contains('blueHouse') && !house.classList.contains('greenHouse')) {
                optionElement = optionElement + "<option value=\"" + contador + "\" >" + contador + "</option>";
            }
        }
        
        $("#theBlueSelector").innerHTML = optionElement;
        $("#blueButton").addEventListener("click",function() {
            let houseComeBack = $("#theBlueSelector").value;
            playerChangeFor(thePlayer,houseComeBack);
            $("#bluePanel_id").classList.add("hidden");
        });
    }
}

function greenTrigged() {
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
    
    let player1 = $(".player1_class");
    let player2 = $(".player2_class");
    
    if(player.classList.contains("greenHouse")) {
        
        alert("Green House Effect");
        
        player1.classList.add("player2_class");
        player2.classList.add("player1_class");
        
        player2.classList.remove("player2_class");
        player1.classList.remove("player1_class");
        
    }
}

function lastHouse() {
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
    
    if(player.classList.contains("lastGridHouse")) {
        alert("The " + localStorage.getItem("playerInGame") + " won the game.");
        window.location.href = "../demo.html";
    }
}

function trigedHouses() {
    let triged = setInterval(function() {
        yellowTrigged();
        redTrigged();
        blueTrigged();
        greenTrigged();
        
        lastHouse();
    }, 100);
        
    setTimeout(function() {clearInterval(triged)}, 100);
}


/* Botão para chamar a tabela de testes */
function testButton() {
    
    var panel = $("#panel_id"),
        testPanel = $("#testPanel_id");
    
    var b1 = $("#b1_id"), b2 = $("#b2_id"), b3 = $("#b3_id");
    
    var vb1 = b1.classList.contains("animation_b1_class"),
        vb2 = b2.classList.contains("animation_b2_class"),
        vb3 = b3.classList.contains("animation_b3_class");
    
    
    if(vb1 && vb2 && vb3) {
        b1.classList.remove("animation_b1_class");
        b2.classList.remove("animation_b2_class");
        b3.classList.remove("animation_b3_class");
        
        b1.classList.add("animationReverse_b1_class");
        b2.classList.add("animationReverse_b2_class");
        b3.classList.add("animationReverse_b3_class");
        
        let pReverse = panel.classList.contains("down_class");
        let tpReverse = testPanel.classList.contains("forLeft_class");
        
        if(pReverse && tpReverse) {
            panel.classList.remove("down_class");
            testPanel.classList.remove("forLeft_class");
            
            panel.classList.add("rise_class");
            testPanel.classList.add("forRight_class");
        };
        
    } else {
        
        let vb1 = b1.classList.contains("animationReverse_b1_class");
        let vb2 = b2.classList.contains("animationReverse_b2_class");
        let vb3 = b3.classList.contains("animationReverse_b3_class");
        
        if(vb1 && vb2 && vb3) {
            b1.classList.remove("animationReverse_b1_class");
            b2.classList.remove("animationReverse_b2_class");
            b3.classList.remove("animationReverse_b3_class");
        };
        
        b1.classList.add("animation_b1_class");
        b2.classList.add("animation_b2_class");
        b3.classList.add("animation_b3_class");
        
        
        let p = panel.classList.contains("rise_class");
        let tp = testPanel.classList.contains("forRight_class");
        
        if(p && tp) {
            panel.classList.remove("rise_class");
            testPanel.classList.remove("forRight_class");
            
            panel.classList.add("down_class");
            testPanel.classList.add("forLeft_class");
        } else {
            panel.classList.add('down_class');
            testPanel.classList.add('forLeft_class');
        };
    };
       
};

$("#buttonTest").addEventListener("click",function() {
    
    var playerType = ".player" + $("#input1").value + "_class";
        moveHomes = $("#input2").value;
        bool = $("#trueOrFalse").value;
    
    jump(moveHomes,playerType,bool);
});

