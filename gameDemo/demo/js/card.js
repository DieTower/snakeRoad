class Card {
    
    constructor(num,name,cardText,effect) {
        this.cardNum = parseInt(num);
        this.name = name;
        this.text = cardText;
        this.theEffect = effect;
        
        this.render();
        this.attachmentEffect();
    }
    
    render() {
        let cardClass = "card" + this.cardNum;
        
        let contador;
        for(contador=1; contador<=8; contador++) {
            let card = "#card" + contador + "_id";
            
            if($(card).classList.contains(cardClass)) {
                let theCard = $(card);
                $(".cardText_class",theCard).innerHTML = this.text;
            }
        }
    }
    
    attachmentEffect() {
        let cardClass = "card" + this.cardNum;
        
        let contador;
        for(contador=1; contador<=8; contador++) {
            let card = "#card" + contador + "_id";
            if($(card).classList.contains(cardClass)) {
                let theCardClass = "." + cardClass;
                $(theCardClass).addEventListener("click", this.theEffect);
            }
        }
    }
    
    showName() {
        console.log(this.name);
    }
    
    showText() {
        console.log(this.Text);
    }
    
}


let card1 = new Card("1","card1","Description from card1", function() {
    console.log("Hello Friend... this is the card " + card1.cardNum);
});

let card2 = new Card("2","card2","Description from card2", function() {
    console.log("Hello Friend... this is the card " + card2.cardNum);
});

let card3 = new Card("3","card3","Description from card3", function() {
    console.log("Hello Friend... this is the card " + card3.cardNum);
});

let card4 = new Card("4","card4","Description from card4", function() {
    console.log("Hello Friend... this is the card " + card4.cardNum);
});

let card5 = new Card("5","card5","Description from card5", function() {
    console.log("Hello Friend... this is the card " + card5.cardNum);
});

let card6 = new Card("6","card6","Description from card6", function() {
    console.log("Hello Friend... this is the card " + card6.cardNum);
});

let card7 = new Card("7","card7","Description from card7", function() {
    console.log("Hello Friend... this is the card " + card7.cardNum);
});

let card8 = new Card("8","card8","Description from card8", function() {
    console.log("Hello Friend... this is the card " + card8.cardNum);
});

let card9 = new Card("9","card9","Description from card9", function() {
    console.log("Hello Friend... this is the card " + card9.cardNum);
});

let card10 = new Card("10","card10","Description from card10", function() {
    console.log("Hello Friend... this is the card " + card10.cardNum);
});

let card11 = new Card("11","card11","Description from card11", function() {
    console.log("Hello Friend... this is the card " + card11.cardNum);
});

let card12 = new Card("12","card12","Description from card12", function() {
    console.log("Hello Friend... this is the card " + card12.cardNum);
});

let card13 = new Card("13","card13","Description from card13", function() {
    console.log("Hello Friend... this is the card " + card13.cardNum);
});

let card14 = new Card("14","card14","Description from card14", function() {
    console.log("Hello Friend... this is the card " + card14.cardNum);
});

let card15 = new Card("15","card15","Description from card15", function() {
    console.log("Hello Friend... this is the card " + card15.cardNum);
});

let card16 = new Card("16","card16","Description from card16", function() {
    console.log("Hello Friend... this is the card " + card16.cardNum);
});

let card17 = new Card("17","card17","Description from card17", function() {
    console.log("Hello Friend... this is the card " + card17.cardNum);
});

let card18 = new Card("18","card18","Description from card18", function() {
    console.log("Hello Friend... this is the card " + card18.cardNum);
});

let card19 = new Card("19","card19","Description from card19", function() {
    console.log("Hello Friend... this is the card " + card19.cardNum);
});

let card20 = new Card("20","card20","Description from card20", function() {
    console.log("Hello Friend... this is the card " + card20.cardNum);
});

let card21 = new Card("21","card6","Description from card21", function() {
    console.log("Hello Friend... this is the card " + card21.cardNum);
});

let card22 = new Card("22","card22","Description from card22", function() {
    console.log("Hello Friend... this is the card " + card22.cardNum);
});

let card23 = new Card("23","card23","Description from card23", function() {
    console.log("Hello Friend... this is the card " + card23.cardNum);
});

let card24 = new Card("24","card24","Description from card24", function() {
    console.log("Hello Friend... this is the card " + card24.cardNum);
});

let card25 = new Card("25","card25","Description from card25", function() {
    console.log("Hello Friend... this is the card " + card25.cardNum);
});

let card26 = new Card("26","card26","Description from card26", function() {
    console.log("Hello Friend... this is the card " + card26.cardNum);
});

let card27 = new Card("27","card27","Description from card27", function() {
    console.log("Hello Friend... this is the card " + card27.cardNum);
});

let card28 = new Card("28","card28","Description from card28", function() {
    console.log("Hello Friend... this is the card " + card28.cardNum);
});

let card29 = new Card("29","card29","Description from card29", function() {
    console.log("Hello Friend... this is the card " + card29.cardNum);
});

let card30 = new Card("30","card30","Description from card30", function() {
    console.log("Hello Friend... this is the card " + card30.cardNum);
});