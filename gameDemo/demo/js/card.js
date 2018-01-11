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
            }
        }
        
        //Fixed the imgage code
        $(".cardImg_class",this.element).style.backgroundImage = "url('img/cardImg/" + this.cardImg + "')";
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
        console.log(this.theEffect);
        
        //this.theEffect(); //Remover dos comentários caso remova o set interval de testes!
        this.pullCards(this.cardId);
        //location.reload(); //solução a curto prazo que não funciona na sua totalidade
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


let card1 = new Card("1","card1","card0.gif","Move o ícone do utilizador 5 casas para a frente.", function() {
    console.log("Hello Friend... this is the card " + card1.cardNum);
    
    let player = "." + localStorage.getItem("playerInGame") + "_class";
    let nextHouse = parseInt(searchPlayerHouse(player)) + 5;
    playerChangeFor(player,nextHouse);
    
});

let card2 = new Card("2","card2","card0.gif","Move o ícone do utilizador 10 casas para a frente.", function() {
    console.log("Hello Friend... this is the card " + card2.cardNum);
    
    let player = "." + localStorage.getItem("playerInGame") + "_class";
    let nextHouse = parseInt(searchPlayerHouse(player)) + 10;
    playerChangeFor(player,nextHouse);
    
});

let card3 = new Card("3","card3","card0.gif","Move o ícone do adversário 5 casas para trás.", function() {
    console.log("Hello Friend... this is the card " + card3.cardNum);
    /*
    let player = "." + getOponentType() + "_class";
    let nextHouse = parseInt(searchPlayerHouse(player)) - 5;
    
    if(nextHouse < 0) {
        playerChangeFor(player,nextHouse);
    } else {
        console.log("O efeito não pode ser executado.");
    };
    */
});

let card4 = new Card("4","card4","card0.gif","Move o ícone do adversário 10 casas para trás.", function() {
    console.log("Hello Friend... this is the card " + card4.cardNum);
    
    let player = "." + getOponentType() + "_class";
    let nextHouse = parseInt(searchPlayerHouse(player)) - 10;
    console.log(nextHouse);
    if(nextHouse < 0) {
        playerChangeFor(player,nextHouse);
    } else {
        console.log("O efeito não pode ser executado.");
    };
    
});

let card5 = new Card("5","card5","card0.gif","Subtrai 15 pontos de vida á barra de vida do adversário.", function() {
    console.log("Hello Friend... this is the card " + card5.cardNum);
    
    let player = "." + getOponentType() + "_class";
    let lifeBefore = parseInt($("#hiddenLife").innerHTML) - 15;
    
    if(lifeBefore >= 0) {
        $("#hiddenLife").innerHTML = lifeBefore;
    } else if(lifeBefore < 0) {
        $("#hiddenLife").innerHTML = "0";
    }
    
});

let card6 = new Card("6","card6","card0.gif","Soma 15 pontos de vida á barra de vida do utilzador.", function() {
    console.log("Hello Friend... this is the card " + card6.cardNum);
    
    life.plusEffectFor(15);
    
});

let card7 = new Card("7","card7","card0.gif","Troca o ícone do utlizador com o ícone do adversário.", function() {
    console.log("Hello Friend... this is the card " + card7.cardNum);
    
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
    
});

let card8 = new Card("8","card8","card0.gif","Description from card8", function() {
    console.log("Hello Friend... this is the card " + card8.cardNum);
});

let card9 = new Card("9","card9","card0.gif","Description from card9", function() {
    console.log("Hello Friend... this is the card " + card9.cardNum);
});

let card10 = new Card("10","card10","card0.gif","Description from card10", function() {
    console.log("Hello Friend... this is the card " + card10.cardNum);
});

let card11 = new Card("11","card11","card0.gif","Description from card11", function() {
    console.log("Hello Friend... this is the card " + card11.cardNum);
});

let card12 = new Card("12","card12","card0.gif","Description from card12", function() {
    console.log("Hello Friend... this is the card " + card12.cardNum);
});

let card13 = new Card("13","card13","card0.gif","Description from card13", function() {
    console.log("Hello Friend... this is the card " + card13.cardNum);
});

let card14 = new Card("14","card14","card0.gif","Description from card14", function() {
    console.log("Hello Friend... this is the card " + card14.cardNum);
});

let card15 = new Card("15","card15","card0.gif","Description from card15", function() {
    console.log("Hello Friend... this is the card " + card15.cardNum);
});

let card16 = new Card("16","card16","card0.gif","Description from card16", function() {
    console.log("Hello Friend... this is the card " + card16.cardNum);
});

let card17 = new Card("17","card17","card0.gif","Description from card17", function() {
    console.log("Hello Friend... this is the card " + card17.cardNum);
});

let card18 = new Card("18","card18","card0.gif","Description from card18", function() {
    console.log("Hello Friend... this is the card " + card18.cardNum);
});

let card19 = new Card("19","card19","card0.gif","Description from card19", function() {
    console.log("Hello Friend... this is the card " + card19.cardNum);
});

let card20 = new Card("20","card20","card0.gif","Description from card20", function() {
    console.log("Hello Friend... this is the card " + card20.cardNum);
});

let card21 = new Card("21","card6","card0.gif","Description from card21", function() {
    console.log("Hello Friend... this is the card " + card21.cardNum);
});

let card22 = new Card("22","card22","card0.gif","Description from card22", function() {
    console.log("Hello Friend... this is the card " + card22.cardNum);
});

let card23 = new Card("23","card23","card0.gif","Description from card23", function() {
    console.log("Hello Friend... this is the card " + card23.cardNum);
});

let card24 = new Card("24","card24","card0.gif","Description from card24", function() {
    console.log("Hello Friend... this is the card " + card24.cardNum);
});

let card25 = new Card("25","card25","card0.gif","Description from card25", function() {
    console.log("Hello Friend... this is the card " + card25.cardNum);
});

let card26 = new Card("26","card26","card0.gif","Description from card26", function() {
    console.log("Hello Friend... this is the card " + card26.cardNum);
});

let card27 = new Card("27","card27","card0.gif","Description from card27", function() {
    console.log("Hello Friend... this is the card " + card27.cardNum);
});

let card28 = new Card("28","card28","card0.gif","Description from card28", function() {
    console.log("Hello Friend... this is the card " + card28.cardNum);
});

let card29 = new Card("29","card29","card0.gif","Description from card29", function() {
    console.log("Hello Friend... this is the card " + card29.cardNum);
});

let card30 = new Card("30","card30","card0.gif","Description from card30", function() {
    console.log("Hello Friend... this is the card " + card30.cardNum);
});



function changeCards(card1,card2) {
    let cardNum1 = "#card" + card1 + "_id";
    let cardNum1Class = searchClassCard(cardNum1).slice(1);
    
    let cardNum2 = "#card" + card2 + "_id";
    let cardNum2Class = searchClassCard(cardNum2).slice(1);
    
    $(cardNum1).classList.remove(cardNum1Class);
    $(cardNum1).classList.add(cardNum2Class);
    
    $(cardNum2).classList.remove(cardNum2Class);
    $(cardNum2).classList.add(cardNum1Class);
}

function removeClass(card1) {
    let cardNum1 = "#card" + card1 + "_id"; console.log(cardNum1);
    let cardNum1Class = searchClassCard(cardNum1).slice(1); console.log(cardNum1Class);
    
    $(cardNum1).classList.remove(cardNum1Class);
}