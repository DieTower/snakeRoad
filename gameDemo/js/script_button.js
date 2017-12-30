function $(element, context) {
    if(context) {
        return context.querySelector(element);
    } else {
        return document.querySelector(element);
    }
}

function randomBetween(numMin,numMax) {
    return Math.floor(Math.random() * (numMax - numMin)) + numMin;
}

class Button {
    
    constructor() {
        let button = $("#button");
        this.events();
    }
    
    events() {
        $("#button").addEventListener("click",this.setData.bind(this));
    }
    
    setData() {
        /* Player1 data */
        localStorage.setItem('player1Life','100');
        localStorage.setItem('player1CardsInHand','3');
        this.setDataPlayer1Cards();
        
        /* Player2 data */
        localStorage.setItem('player2Life','100');
        localStorage.setItem('player2CardsInHand','3');
        this.setDataPlayer2Cards();
        
    }
    
    setDataPlayer1Cards() {
        let cont;
        for(cont=1; cont<=8; cont++) {
            let cardName = "player1Card" + cont;
            let cardChosen = "card" + randomBetween(1,31);
            
            let contador1 = 1;
            while(contador1<=cont) {
                let playerOneCards = "player1Card" + contador1;
                if(localStorage.getItem(playerOneCards) == cardChosen) {
                    cardChosen = "card" + randomBetween(1,31);
                    contador1 = 0;
                }
                contador1++;
            }
            
            localStorage.setItem(cardName,cardChosen);
        }
    }
    
    setDataPlayer2Cards() {
        let cont2;
        for(cont2=1; cont2<=8; cont2++) {
            let cardName = "player2Card" + cont2;
            let cardChosen = "card" + randomBetween(1,31);
            
            let contador1 = 1;
            while(contador1<=cont2) {
                let playerTwoCards = "player2Card" + contador1;
                if(localStorage.getItem(playerTwoCards) == cardChosen) {
                    cardChosen = "card" + randomBetween(1,31);
                    contador1 = 0;
                }
                contador1++;
            }
            
            /*
            let contador2;
            while(contador2<=8) {
                let playerOne = "player1Card" + contador2;
                if(localStorage.getItem(playerOne) == cardChosen) {
                    cardChosen = "card" + randomBetween(1,31);
                    contador2 = 0;
                };
                contador2++;
            }
            */
            
            localStorage.setItem(cardName,cardChosen);
        }
    }
    
}

let button = new Button();