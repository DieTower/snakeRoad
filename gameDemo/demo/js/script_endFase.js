class EndFase {
    
    constructor() {
        let endPanel = $("#endPanel_id");
        this.attachmentEffect();
    }
    
    attachmentEffect() {
        $("#buttonEndPhase_id",this.endPanel).addEventListener("click",this.changePlayer.bind(this));
    }
    
    changePlayer() {
        let thePlayer = $("#thePlayer");
        
        if(thePlayer.classList.contains('thePlayer1')) {
            localStorage.setItem("playerInGame","player2");
            
        } else if(thePlayer.classList.contains('thePlayer2')) {
            localStorage.setItem("playerInGame","player1");
            
        }
        
        if($("#diceButton").classList.contains('hidden')) {
            $("#diceButton").classList.remove('hidden');
        }
    }
    
}

let endFase = new EndFase();