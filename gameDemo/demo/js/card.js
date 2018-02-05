class Card {
    
    constructor(num,name,imgName,cardText,effect) {
        //Element data
        this.cardNum = parseInt(num);
        this.cardClass = ".card" + this.cardNum;
        this.cardId = searchIdCard(this.cardClass.slice(1));
        this.element = $(this.cardClass);
        
        //Card data
        this.name = name;
        this.cardImg = imgName;
        this.text = cardText;
        this.theEffect = effect;
        
        setInterval(this.render.bind(this), 1);
        
        setInterval(function() {
            if($(this.cardClass)) {
                $(this.cardClass).onclick = function() { this.theEffect(); }.bind(this);
            };
        }.bind(this), 1);
        
        
        this.attachmentEffect();
    }
    
    render() {
        let cardClass = "card" + this.cardNum;
        
        let contador;
        for(contador=1; contador<=playableCards(); contador++) {
            let card = "#card" + contador + "_id";
            
            if($(card).classList.contains(cardClass)) {
                let theCard = $(card);
                $(".cardText_class",theCard).innerHTML = this.text;
                
                //Fixed the imgage code
                $(".cardImg_class",theCard).style.backgroundImage = "url('img/cardImg/" + this.cardImg + "')";
            }
        }
        
        
    }
    
    attachmentEffect() {
        
        let cardClass = "card" + this.cardNum;
        
        let contador;
        for(contador=1; contador<=playableCards(); contador++) {
            let card = "#card" + contador + "_id";
            if($(card).classList.contains(cardClass)) {
                $(classBroker(cardClass)).addEventListener("click",this.clickFunction.bind(this));
            }
        }
        
    }
    
    clickFunction() {
        let cardClass = "card" + this.cardNum;
        this.pullCards(this.cardId);
    }
    
    pullCards(cardId) {
        let classCard = searchClassCard(cardId);
        let contador = parseInt(searchIdCardNumber(classCard));
        for(contador; contador<playableCards(); contador++) {
            copyAnotherCard(contador,(contador + 1));
        }
        cards.removeOneCardInHand();
        cards.refreshData();
    }
    
    copyNextCard(nextCardId) {
        let nextCardClass = searchClassCard(nextCardId);
        $(this.cardId).classList.remove(this.cardClass.slice(1));
        $(this.cardId).classList.add(nextCardClass.slice(1));
        removeCardData(nextCardId);
    }
    
    showName() {
        console.log(this.name);
    }
    
    showText() {
        console.log(this.Text);
    }
    
}


let card1 = new Card("1","card1","card1.png","card1 - Move o ícone do utilizador 5 casas para a frente.", function() {
    console.log("Hello Friend... this is the card " + card1.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    let playerHouse = searchPlayerHouse(player);
    let nextHouse = parseInt(playerHouse) + 5;
    
    if(nextHouse > 44) {
        nextHouse = 44;
    } else if(nextHouse < 1) {
        nextHouse = 1;
    }
    
    let playerClass = "." + player + "_class";
    playerChangeFor(playerClass,nextHouse);
});

let card2 = new Card("2","card2","card2.png","card2 - Move o ícone do utilizador 10 casas para a frente.", function() {
    console.log("Hello Friend... this is the card " + card2.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    let playerHouse = searchPlayerHouse(player);
    let nextHouse = parseInt(playerHouse) + 10;
    
    if(nextHouse > 44) {
        nextHouse = 44;
    } else if(nextHouse < 1) {
        nextHouse = 1;
    }
    
    let playerClass = "." + player + "_class";
    playerChangeFor(playerClass,nextHouse);
});

let card3 = new Card("3","card3","card3.jpg","card3 - Move o ícone do adversário 5 casas para trás.", function() {
    console.log("Hello Friend... this is the card " + card3.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    
    if(player == "player1") {
        player = "player2";
    } else if(player == "player2") {
        player = "player1";
    };
    
    let playerHouse = searchPlayerHouse(player);
    let nextHouse = parseInt(playerHouse) - 5;
    
    if(nextHouse > 44) {
        nextHouse = 44;
    } else if(nextHouse < 1) {
        nextHouse = 1;
    }
    
    let playerClass = "." + player + "_class";
    
    if(nextHouse != parseInt(playerHouse)) {
        playerChangeFor(playerClass,nextHouse);
    } else {
        alert("The player can't move.");
    };
});

let card4 = new Card("4","card4","card4.jpg","card4 - Move o ícone do adversário 10 casas para trás.", function() {
    console.log("Hello Friend... this is the card " + card4.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    
    if(player == "player1") {
        player = "player2";
    } else if(player == "player2") {
        player = "player1";
    };
    
    let playerHouse = searchPlayerHouse(player);
    let nextHouse = parseInt(playerHouse) - 10;
    
    if(nextHouse > 44) {
        nextHouse = 44;
    } else if(nextHouse < 1) {
        nextHouse = 1;
    }
    
    let playerClass = "." + player + "_class";
    playerChangeFor(playerClass,nextHouse);
});

let card5 = new Card("5","card5","card5.jpg","card5 - Subtrai 15 pontos de vida á barra de vida do adversário.", function() {
    console.log("Hello Friend... this is the card " + card5.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    
    if(player == "player1") {
        player = "player2Life";
    } else if(player == "player2") {
        player = "player1Life";
    };
    
    let oponentLife = parseInt(localStorage.getItem(player)) - 15;
    
    if(oponentLife > 100) {
        oponentLife = 100;
    } else if(oponentLife < 0) {
        oponentLife = 0;
    }
    
    localStorage.setItem(player,oponentLife);
    
});

let card6 = new Card("6","card6","card6.jpg","card6 - Soma 15 pontos de vida á barra de vida do player.", function() {
    console.log("Hello Friend... this is the card " + card6.cardNum);
    life.plusEffectFor(15);
    
});

let card7 = new Card("7","card7","card7.jpg","card7 - Troca o ícone do player com o ícone do adversário.", function() {
    console.log("Hello Friend... this is the card " + card7.cardNum);
    
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
    
    let player1 = $(".player1_class");
    let player2 = $(".player2_class");
    
    alert("Green House Effect");
    
    player1.classList.add("player2_class");
    player2.classList.add("player1_class");
    
    player2.classList.remove("player2_class");
    player1.classList.remove("player1_class");
    
});

let card8 = new Card("8","card8","card8.png","card8 - Apresenta as casas especiais disponiveis e, move o ícone do utilizador para essa tal casa.", function() {
    console.log("Hello Friend... this is the card " + card8.cardNum);
    
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
        
    $("#bluePanel_id").classList.remove("hidden");
    
    let thePlayer = "." + localStorage.getItem("playerInGame") + "_class";
    let playerHouse = parseInt(searchPlayerHouse(thePlayer));
    
    if(searchPlayerHouse(thePlayer) >= 7) {
        let optionElement = "";
        let contador;
        for(contador=1; contador<playerHouse; contador++) {
            let theHouse = "#gridHouse" + contador + "_id";
            let house = $(theHouse);

            if(house.classList.contains('yellowHouse') || house.classList.contains('redHouse') || house.classList.contains('blueHouse') || house.classList.contains('greenHouse')) {
                optionElement = optionElement + "<option value=\"" + contador + "\" >" + contador + "</option>";
            }
        }

        $("#theBlueSelector").innerHTML = optionElement;
        $("#blueButton").addEventListener("click",function() {
            let houseComeBack = $("#theBlueSelector").value;
            playerChangeFor(thePlayer,houseComeBack);
            $("#bluePanel_id").classList.add("hidden");
        });
    } else {
        alert("Não existem casas especiais antes da casa em que se encontra.");
    }
});

let card9 = new Card("9","card9","card9.png","card9 - Apresenta as casas normais antes de cada casa especial disponiveis e, move o ícone do utilizador para essa tal casa.", function() {
    console.log("Hello Friend... this is the card " + card9.cardNum);
    
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
        
    $("#bluePanel_id").classList.remove("hidden");
    
    let thePlayer = "." + localStorage.getItem("playerInGame") + "_class";
    let playerHouse = parseInt(searchPlayerHouse(thePlayer));
    
    if(searchPlayerHouse(thePlayer) >= 7) {
        let optionElement = "";
        let contador;
        for(contador=1; contador<playerHouse; contador++) {
            let theHouse = "#gridHouse" + contador + "_id";
            let house = $(theHouse);

            if(house.classList.contains('yellowHouse') || house.classList.contains('redHouse') || house.classList.contains('blueHouse') || house.classList.contains('greenHouse')) {
                let numberBeforeCont = contador - 1;
                optionElement = optionElement + "<option value=\"" + contador + "\" >" + numberBeforeCont + "</option>";
            }
        }

        $("#theBlueSelector").innerHTML = optionElement;
        $("#blueButton").addEventListener("click",function() {
            let houseComeBack = $("#theBlueSelector").value;
            playerChangeFor(thePlayer,houseComeBack);
            $("#bluePanel_id").classList.add("hidden");
        });
    } else {
        alert("Era necessário ter casas especiais para utilizar o efeito desta carta.");
    }
});

let card10 = new Card("10","card10","card10.jpg","card10 - O adeversário perde 10 de vida para cada carta na mão do player que use este efeito.", function() {
    console.log("Hello Friend... this is the card " + card10.cardNum);
    
    let player;
    let playerType = localStorage.getItem("playerInGame");
    
    if(playerType == "player1") {
        player = "player2Life";
    } else if(playerType == "player2") {
        player = "player1Life";
    };
    
    let hand = playerType + "CardsInHand";
    let cardsInPlayerHand = localStorage.getItem(hand);
    let oponentLife = parseInt(localStorage.getItem(player)) - (10*cardsInPlayerHand);
    
    if(oponentLife > 100) {
        oponentLife = 100;
    } else if(oponentLife < 0) {
        oponentLife = 0;
    }
    
    localStorage.setItem(player,oponentLife);
    
});

let card11 = new Card("11","card11","card11.jpg","card11 - Ganhe 10 de vida por cada carta na mão do adeversário.", function() {
    console.log("Hello Friend... this is the card " + card11.cardNum);
    
    let hand;
    let player;
    let playerType = localStorage.getItem("playerInGame");
    
    if(playerType == "player1") {
        player = "player1Life";
        hand = "player2CardsInHand";
    } else if(playerType == "player2") {
        player = "player2Life";
        hand = "player1CardsInHand";
    };
    
    let cardsInPlayerHand = localStorage.getItem(hand);
    let oponentLife = parseInt(localStorage.getItem(player)) + (10*cardsInPlayerHand);
    
    if(oponentLife > 100) {
        oponentLife = 100;
    } else if(oponentLife < 0) {
        oponentLife = 0;
    }
    
    localStorage.setItem(player,oponentLife);
    
});

let card12 = new Card("12","card12","card12.jpg","card12 - Adiciona uma carta á mao do utilizador caso o ícone do adversário esteja numa casa especial.", function() {
    console.log("Hello Friend... this is the card " + card12.cardNum);
    
    let contador = 0;
    let theOponent;
    
    if(localStorage.getItem("playerInGame") == "player1") {
        theOponent = "player2";
    } else if(localStorage.getItem("playerInGame") == "player2") {
        theOponent = "player1";
    };
    
    let playerName = "." + theOponent + "_class";
    let player = $(playerName).parentNode;
        
    $("#bluePanel_id").classList.remove("hidden");
        
    let thePlayer = "." + theOponent + "_class";
    let playerHouse = parseInt(searchPlayerHouse(thePlayer));
        
    let optionElement = "";
    let contador;
    for(contador=1; contador<playerHouse; contador++) {
        let theHouse = "#gridHouse" + contador + "_id";
        let house = $(theHouse);
            
        if(!house.classList.contains('yellowHouse') && !house.classList.contains('redHouse') && !house.classList.contains('blueHouse') && !house.classList.contains('greenHouse')) {
            contador++;
        }
    }
    
    if(contador>0) {
        cards.addOneCardInHand();
    } else {
        alert("O player adeversário não se encontra numa casa  especial");
    }
    
});

let card13 = new Card("13","card13","card13.png","card13 - Adiciona uma carta à mão do utilizador.", function() {
    console.log("Hello Friend... this is the card " + card13.cardNum);
    
    cards.addOneCardInHand();
    
});

let card14 = new Card("14","card14","card14.png","card14 - Adiciona duas cartas à mao do utilizador caso a barra de vida do adversário tiver mais 50 pontos que a barra de vida do utilizador.", function() {
    console.log("Hello Friend... this is the card " + card14.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    let oponent;
    
    if(player == "player1") {
        oponent = "player2";
    } else if(player == "player2") {
        oponent = "player1";
    }
    
    let yourLifeStorageName = player + "Life";
    let yourLife = parseInt(localStorage.getItem(yourLifeStorageName));
    
    let oponentLifeStorageName = oponent + "Life";
    let oponentLife = parseInt(localStorage.getItem(oponentLifeStorageName));
    
    let differenceBetweenLifes = oponentLife - yourLife;
    
    if(differenceBetweenLifes >= 50) {
        cards.addOneCardInHand();
        cards.addOneCardInHand();
    } else {
        alert("O adeversário não tem 50 ou mais de vida.");
    }
    
});

let card15 = new Card("15","card15","card15.jpg","card15 - Roda o ícone do dado 2 vezes e move o ícone do utilizador o valor que sair nele, o utilizador perde uma casa.", function() {
    console.log("Hello Friend... this is the card " + card15.cardNum);
    
    dice.throwDices();
    cards.removeCardInHand();
    
});

let card16 = new Card("16","card16","card16.png","card16 - Move o ícone do utilizador para a proxima casa especial.", function() {
    console.log("Hello Friend... this is the card " + card16.cardNum);
    
    let playerName = "." + localStorage.getItem("playerInGame") + "_class";
    let player = $(playerName).parentNode;
        
    //$("#bluePanel_id").classList.remove("hidden");
    
    let thePlayer = "." + localStorage.getItem("playerInGame") + "_class";
    let playerHouse = parseInt(searchPlayerHouse(thePlayer));
    
    let theHouse;
    let oldHouse = " ";
    
    let loopCont = 0;
    let contador = playerHouse;
    while(loopCont != 1) {
        theHouse = "#gridHouse" + contador + "_id";
        
        if(oldHouse == " ") {
            oldHouse = theHouse;
        }
        
        let house = $(theHouse);
        
        if(house.classList.contains('yellowHouse')) {
            loopCont=1;
        } else if(house.classList.contains('redHouse')) {
            loopCont=1;
        } else if(house.classList.contains('blueHouse')) {
            loopCont=1;
        } else if(house.classList.contains('greenHouse')) {
            loopCont=1;
        };
        
        contador++; console.log(contador);
    }
    
    contador--;
    
    if(contador <= 40) {
        playerChangeFor(thePlayer,contador);
    } else {
        alert("Não existe nenhuma casa especial após a casa em que se encontra.");
    }
    
});

let card17 = new Card("17","card17","card17.jpg","card17 - O player move-se duas casas caso a sua vida seja menor que a vida do adeversário.", function() {
    console.log("Hello Friend... this is the card " + card17.cardNum);
    
    //Player in game life
    let playerInGame = localStorage.getItem("playerInGame") + "Life";
    let playerLife = parseInt(localStorage.getItem(playerInGame));
    
    //Oponent life
    let oponentInMoment;
    
    if(localStorage.getItem("playerInGame") == "player1") {
        oponentInMoment = "player2Life";
    } else if(localStorage.getItem("playerInGame") == "player2") {
        oponentInMoment = "player1Life";
    }
    
    let oponentLife = parseInt(localStorage.getItem(oponentInMoment));
    
    if(playerLife < oponentLife) {
        
        let player = localStorage.getItem("playerInGame") + "_class";
        let playerNextHouse = parseInt(searchPlayerHouse(Player)) + 2;
        
        if(playerNextHouse > 44) {
            playerChangeFor(player,44);
        } else {
            playerChangeFor(player,playerNextHouse);
        }
        
    } else if(playerLife == oponentLife) {
        alert("A vida de ambos os jogadores não pode ser igual.");
    } else if(playerLife > oponentLife) {
        alert("Éra necessário que a vida do oponent fosse maior que a sua.");
    }
    
});

let card18 = new Card("18","card18","card18.png","card18 - Soma 30 pontos de vida á barra do utilizador.", function() {
    console.log("Hello Friend... this is the card " + card18.cardNum);
    
    let player = localStorage.getItem("playerInGame") + "Life";
    let playerLife = parseInt(localStorage.getItem(player));
    let playerLifeAfter = playerLife + 30;
    
    if(playerLifeAfter >= 100) {
        life.changeLifeFor(100);
        $(".yLife_class").style.width = "100%";
    } else {
        life.changeLifeFor(playerLifeAfter);
        $(".yLife_class").style.width = playerLifeAfter + "%";
    }
    
});

let card19 = new Card("19","card19","card19.png","card19 - Subtrai 30 pontos de vida á barra do adversário.", function() {
    console.log("Hello Friend... this is the card " + card19.cardNum);
    
    let oponent;
    if(localStorage.getItem("playerInGame") == "player1") {
        oponent = "player2Life";
    } else if(localStorage.getItem("playerInGame") == "player2") {
        oponent = "player1Life";
    };
    
    let oponentLife = parseInt(localStorage.getItem(oponent));
    let oponentLifeAfter = oponentLife - 30;
    
    if(oponentLifeAfter < 0) {
        life.changeLifeFor(0);
        $(".yLife_class").style.width = "0%";
    } else {
        life.changeLifeFor(oponentLifeAfter);
        $(".yLife_class").style.width = oponentLifeAfter + "%";
    }
    
});

let card20 = new Card("20","card20","card20.png","card20 - A barra do utilizador manipula (-10, 25, 20, -25) pontos de vida correspectivamente, dependendo do numero de cartas na mão do oponente.", function() {
    console.log("Hello Friend... this is the card " + card20.cardNum);
    
    let playerInGame = localStorage.getItem("playerInGame") + "Life";
    
    let oponent
    if(playerInGame == "player1") {
        oponent = "player2CardsInHand";
    } else if(playerInGame == "player2") {
        oponent = "player1CardsInHand";
    }
    
    let oponentCardsInHand = localStorage.getItem(oponent);
    
    if(oponentCardsInHand == 1) {
        
        let oponentLifeAfter = parseInt(localStorage.getItem(playerInGame)) - 10;
        
        if(oponentLifeAfter < 0) {
            life.changeLifeFor(0);
            $(".yLife_class").style.width = "0%";
        } else {
            life.changeLifeFor(oponentLifeAfter);
            $(".yLife_class").style.width = oponentLifeAfter + "%";
        }
        
    } else if(oponentCardsInHand == 2) {
        
        let oponentLifeAfter = parseInt(localStorage.getItem(playerInGame)) + 25;
        
        if(oponentLifeAfter >= 100) {
            life.changeLifeFor(100);
            $(".yLife_class").style.width = "100%";
        } else {
            life.changeLifeFor(oponentLifeAfter);
            $(".yLife_class").style.width = oponentLifeAfter + "%";
        }
        
    } else if(oponentCardsInHand == 3) {
        
        let oponentLifeAfter = parseInt(localStorage.getItem(playerInGame)) + 20;
        
        if(oponentLifeAfter >= 100) {
            life.changeLifeFor(100);
            $(".yLife_class").style.width = "100%";
        } else {
            life.changeLifeFor(oponentLifeAfter);
            $(".yLife_class").style.width = oponentLifeAfter + "%";
        }
        
    } else if(oponentCardsInHand >= 4) {
        
        let oponentLifeAfter = parseInt(localStorage.getItem(playerInGame)) - 25;
        
        if(oponentLifeAfter < 0) {
            life.changeLifeFor(0);
            $(".yLife_class").style.width = "0%";
        } else {
            life.changeLifeFor(oponentLifeAfter);
            $(".yLife_class").style.width = oponentLifeAfter + "%";
        }
        
    }
    
});

let card21 = new Card("21","card6","card21.jpg","card21 - Roda o dado duas vezes.", function() {
    console.log("Hello Friend... this is the card " + card21.cardNum);
    
    dice.throwDices();
    
    setTimeout(function(){
        dice.throwDices();
    },2100);
    
});

let card22 = new Card("22","card22","card22.jpg","card22 - Roda o dado três vezes.", function() {
    console.log("Hello Friend... this is the card " + card22.cardNum);
    
    dice.throwDices();
    
    setTimeout(function(){
        dice.throwDices();
    },2100);
    
    setTimeout(function(){
        dice.throwDices();
    },4200);
    
});

let card23 = new Card("23","card23","card23.jpg","card23 - O player vai para a casa 11.", function() {
    console.log("Hello Friend... this is the card " + card23.cardNum);
    
    let player = localStorage.getItem("playerInGame") + "_class";
    
    playerChangeFor(player,11);
    
});

let card24 = new Card("24","card24","card24.jpg","card24 - O player pede uma carta.", function() {
    console.log("Hello Friend... this is the card " + card24.cardNum);
    
    cards.removeOneCardInHand();
    
});

let card25 = new Card("25","card25","card25.jpg","card25 - O player que usar esta carta ganha duas cartas.", function() {
    console.log("Hello Friend... this is the card " + card25.cardNum);
    
    cards.addOneCardInHand();
    
    setInterval(function(){
        cards.addOneCardInHand();
    },100)
    
});

let card26 = new Card("26","card26","card26.jpg","card26 - O oponente ganha duas cartas.", function() {
    console.log("Hello Friend... this is the card " + card26.cardNum);
    
    cards.addOneCardInOponentHand();
    
    setInterval(function(){
        cards.addOneCardInOponentHand();
    },100)
    
});

let card27 = new Card("27","card27","card27.jpg","card27 - O oponente ganha uma carta.", function() {
    console.log("Hello Friend... this is the card " + card27.cardNum);
    
    cards.addOneCardInOponentHand();
    
});

let card28 = new Card("28","card28","card28.jpg","card28 - Carta inutil, esta carta não faz absolutamente nada.", function() {
    console.log("Hello Friend... this is the card " + card28.cardNum);
});

let card29 = new Card("29","card29","card29.png","card29 - Roda o ícone do dado uma vez.", function() {
    console.log("Hello Friend... this is the card " + card29.cardNum);
    
    dice.throwDices();
    
});

let card30 = new Card("30","card30","card30.jpg","card30 - Esta carta faz com que o player que a utilize perca automáticamente o jogo.", function() {
    console.log("Hello Friend... this is the card " + card30.cardNum);
    
    let player = localStorage.getItem("playerInGame");
    
    let oponent;
    if(player == "player1") {
        oponent = "player2_class";
    } else if(player == "player2") {
        oponent = "player1_class"
    }
    
    playerChangeFor(oponent,44);
    
});