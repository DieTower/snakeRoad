class Life {
    
    constructor() {
        let life = $("#playerStatus_id");
        let playerLifeType = "";
        
        if($("#lifePercentagem_id",this.life).classList.contains("player1Life")) {
            playerLifeType = "player1Life";
        } else if($("#lifePercentagem_id",this.life).classList.contains("player2Life")) {
            playerLifeType = "player2Life";
        };
        
        $(".yLife_class",this.life).style.width = localStorage.getItem(playerLifeType) + "%";
        
        setInterval(function() {
            $(".player1Life",this.life).innerHTML = localStorage.getItem('player1Life');
            $(".player2Life",this.life).innerHTML = localStorage.getItem('player2Life');
        }, 1);
        
    }
    
    
    /* Todas as funções a baixo mudam a vida do player que se encontra a jogar */
    plusEffectFor(lessNum) {
        let theLife = $(".yLife_class",this.life);
        let lifeBeforePlus = parseInt($("#lifePercentagem_id",this.life).innerHTML) + parseInt(lessNum);
        
        if(lifeBeforePlus >= 0 && lifeBeforePlus <= 100) {
            theLife.style.width = lifeBeforePlus + "%";
            this.changeLifeFor(lifeBeforePlus);
        } else {
            console.log("The final life before the changes can´t be less of zero and more of hundred");
        };
    }
    
    lessEffectFor(lessNum) {
        let theLife = $(".yLife_class",this.life);
        let lifeBeforeLess = parseInt($("#lifePercentagem_id",this.life).innerHTML) - parseInt(lessNum);
        
        if(lifeBeforeLess >= 0 && lifeBeforeLess <= 100) {
            theLife.style.width = lifeBeforeLess + "%";
            this.changeLifeFor(lifeBeforeLess);
        } else {
            console.log("The final life before the changes can´t be less of zero and more of hundred");
        };
    }
    
    changeLifeFor(number) {
        let num = parseInt(number);
        let playerLife = $("#lifePercentagem_id",this.life);
        
        let playerLifeType = "";
        
        if($("#lifePercentagem_id",this.life).classList.contains("player1Life")) {
            playerLifeType = "player1Life";
        } else if($("#lifePercentagem_id",this.life).classList.contains("player2Life")) {
            playerLifeType = "player2Life";
        };
        
        if(num >= 0 && num <= 100) {
            localStorage.setItem(playerLifeType,num);
            //playerLife.innerHTML = num;
        } else {
            console.log("The numbers has need be more of zero or less of hundred");
        };
    }
    
}

let life = new Life();