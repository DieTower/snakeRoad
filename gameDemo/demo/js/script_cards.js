class Cards {
    
    constructor() {
        let cards = $("#cardsPanel_id");
        this.player = localStorage.getItem("playerInGame");
        
        /* Define o numero de cartas que existem na mão de cada jogador */
        this.defineCardHandNumber();
    }
    
    addOneCardInHand() {
        let lastCardNumber;
        let playerType = this.player + "CardsInHand";
        
        lastCardNumber = parseInt(localStorage.getItem(playerType)) + 1;
        localStorage.setItem(playerType,lastCardNumber);
        
        let card = "#card" + lastCardNumber + "_id";
        if($(card).classList.contains('hidden')) {
            $(card).classList.remove('hidden');
        }
        
        this.removeCardData(card);
        let cardName = "card" + randomBetween(1,31);
        $(card,this.cards).classList.add(cardName);
    }
    
    removeOneCardInHand() {
        let lastCardNumber;
        let playerType = this.player + "CardsInHand";
        
        lastCardNumber = parseInt(localStorage.getItem(playerType)) - 1;
        localStorage.setItem(playerType,lastCardNumber);
        
        let card = "#card" + (lastCardNumber+1) + "_id";
        if(!$(card).classList.contains('hidden')) {
            $(card).classList.add('hidden');
        }
        
        this.removeCardData(card);
    }
    
    removeCardData(card) {
        let contador;
        for(contador=1; contador<=30; contador++) {
            let cardClass = "card" + contador;
            $(card).classList.remove(cardClass);
        }
    }
    
    refreshData() {
        let contador;
        for(contador=1; contador<=playableCards(); contador++) {
            let card = "#card" + contador + "_id";
            let cardClass = searchClassCard(card).slice(1);
            
            let player = getPlayerType() + "Card" + contador;
            localStorage.setItem(player,cardClass);
        }
    }
    
    defineCardHandNumber() {
        let cardsNumber;
        let playerType = localStorage.getItem("playerInGame") + "CardsInHand";
        
        cardsNumber = parseInt(localStorage.getItem(playerType));
        
        let cont;
        for(cont=1; cont<=cardsNumber; cont++) {
            let showCard = "#card" + cont + "_id";
            if($(showCard,this.cards).classList.contains('hidden')) {
                $(showCard,this.cards).classList.remove('hidden');
            }
            
            let cardName = this.player + "Card" + cont;
            let cardClass = localStorage.getItem(cardName);
            this.removeCardData(showCard);
            $(showCard,this.cards).classList.add(cardClass);
        }
        
        let anotherCards = cardsNumber + 1;
        for(anotherCards; anotherCards<=8; anotherCards++) {
            let showCard = "#card" + anotherCards + "_id";
            if(!$(showCard,this.cards).classList.contains('hidden')) {
                $(showCard,this.cards).classList.add('hidden');
            }
        }
        
    }
    
}

let cards = new Cards();

setInterval(function() {
    cards.player = localStorage.getItem("playerInGame");
    cards.defineCardHandNumber();
}, 1);
