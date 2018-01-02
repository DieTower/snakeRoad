class Dice {
    
    constructor() {
        let dice = $("#dice");
        this.events();
    }
    
    events() {
        $("#diceButton",this.dice).addEventListener("click",this.throwDices.bind(this));
    }
    
    throwDices() {
        $("#diceButton",this.dice).classList.add('hidden'); // Esconde o botão até ao próximo turno
        let diceNum1 = this.throwDice(1);
        let diceNum2 = this.throwDice(2);
        let sum = parseInt(diceNum1) + parseInt(diceNum2);
        
        let player = "." + getPlayerType() + "_class";
        
        setTimeout(function() {
            let intervalo = setInterval(function() { jump(1,player,"true"); }, 300);
            let totalTime = 300 * sum;
            
            setTimeout(function() {
                clearInterval(intervalo);
                trigedHouses(); // verifica se o player ficou numa casa especial e executa o determinado efeito da mesma
            },totalTime);
        }, 2000);
        
    }
    
    throwDice(diceNum) {
        let that = this;
        let theDice = ".diceNum" + diceNum;
        let infDice = $(theDice,this.dice);
        
        let theNumber = this.changeForAnyFace(diceNum);
        this.changeEffect(diceNum);
        
        setTimeout(function(){
            that.removeAll(diceNum);
            let theFace = "face" + theNumber;
            infDice.classList.add(theFace);
        }, 2000);
        
        return theNumber;
    }
    
    getDiceNum(diceNum) {
        let theDice = ".diceNum" + diceNum;
        let infDice = $(theDice,this.dice);
        
        let cont;
        for(cont=1; cont<=6; cont++) {
            let diceFace = "face" + cont;
            if(infDice.classList.contains(diceFace)) { return cont; }
        }
    }
    
    changeEffect(diceNum) {
        let that = this;
        
        // Controla o numero de mudanças que ocorrem num determinado periodo de tempo
        let process = setInterval(function() { that.changeForAnyFace(diceNum); }, 200);
        
        // Controla durante quanto tempo a mudança deve ocorrer
        setTimeout(function() { clearInterval(process) },2000);
        
    }
    
    changeForAnyFace(diceNum) {
        let theDice = ".diceNum" + diceNum;
        let infDice = $(theDice,this.dice);
        
        this.removeAll(diceNum);
        
        let randomNum = randomBetween(1,7);
        let randomFace = "face" + randomNum;
        infDice.classList.add(randomFace);
        
        return randomNum;
    }
    
    removeAll(diceNum) {
        let theDice = ".diceNum" + diceNum;
        let infDice = $(theDice,this.dice);
        
        let cont;
        for(cont=1; cont<=6; cont++) {
            let theFace = "face" + cont;
            infDice.classList.remove(theFace);
        }
    }
    
}

let dice = new Dice();