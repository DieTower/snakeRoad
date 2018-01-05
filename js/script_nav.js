class Nav {
    
    constructor() {
        const nav = $("#bar");
        this.firstButton = new FirstButton();
        this.event();
    }
    
    event() {
        $(".item1",this.nav).addEventListener("click",this.showOrHidden.bind(this));
        
        $(".item2",this.nav).addEventListener("click",this.showLogin.bind(this));
        $(".secondItem2",this.nav).addEventListener("click",this.showLogin.bind(this));
        $("#closeLoginButton",this.nav).addEventListener("click",this.hiddenLogin.bind(this));
        
        $(".item3",this.nav).addEventListener("click",this.showRegister.bind(this));
        $(".secondItem3",this.nav).addEventListener("click",this.showRegister.bind(this));
        $("#closeRegisterButton",this.nav).addEventListener("click",this.hiddenRegister.bind(this));
        
        /* trigged when it is srolled */
        window.addEventListener("scroll",this.scrollForShow.bind(this));
        window.addEventListener("scroll",this.scrollForHidden.bind(this));
    }
    
    showLogin() {
        let logOrReg = $("#logOrReg");
        let container = $("#containerLogOrReg",logOrReg);
        let login = $("#login",container);
        let containerLogin = $("#containerLogin",login);
        
        logOrReg.classList.remove("vanish");
        container.classList.add("darken");
        login.classList.remove("vanish");
        containerLogin.classList.add("slowDown");
    }
    
    hiddenLogin() {
        let logOrReg = $("#logOrReg");
        let container = $("#containerLogOrReg",logOrReg);
        let login = $("#login",container);
        let containerLogin = $("#containerLogin",login);
        
        containerLogin.classList.add("slowDownReverse");
        container.classList.toggle("darkenReverse");
        
        setTimeout(function() {
            containerLogin.classList.remove("slowDownReverse");
            login.classList.add("vanish");
            container.classList.remove("darkenReverse");
            logOrReg.classList.add("vanish");
        },500);
    }
    
    showRegister() {
        let logOrReg = $("#logOrReg");
        let container = $("#containerLogOrReg",logOrReg);
        let register = $("#register",container);
        let containerRegister = $("#containerRegister",register);
        
        logOrReg.classList.remove("vanish");
        container.classList.add("darken");
        register.classList.remove("vanish");
        containerRegister.classList.add("slowDown");
    }
    
    hiddenRegister() {
        let logOrReg = $("#logOrReg");
        let container = $("#containerLogOrReg",logOrReg);
        let register = $("#register",container);
        let containerRegister = $("#containerRegister",register);
        
        containerRegister.classList.add("slowDownReverse");
        container.classList.toggle("darkenReverse");
        
        setTimeout(function() {
            containerRegister.classList.remove("slowDownReverse");
            register.classList.add("vanish");
            container.classList.remove("darkenReverse");
            logOrReg.classList.add("vanish");
        },500);
    }
    
    scrollForShow() {
        if(document.documentElement.scrollTop > 400 && document.documentElement.scrollTop <= 500) {
            if(!contain($(".item2"),"forLeftAnimation") && !contain($(".item2"),"forRightAnimation")) {
                this.showOrHidden();
            } else if(contain($(".item2"),"forLeftAnimation")) {
                this.showOrHidden();
            };
        }
    }
    
    scrollForHidden() {
        if(document.documentElement.scrollTop > 2100 && document.documentElement.scrollTop <= 2200) {
            if(!contain($(".item2"),"forLeftAnimation") && !contain($(".item2"),"forRightAnimation")) {
                this.showOrHidden();
            } else if(contain($(".item2"),"forRightAnimation")) {
                this.showOrHidden();
            };
        }
    }
    
    showOrHidden() {
        this.firstButton.leftOrRight();
        this.toggle();
    }
    
    toggle() {
        if(contain($(".item2"),"forLeftAnimation") || contain($(".item2"),"forRightAnimation")) {
            toggleClass($(".item2"),"forRightAnimation","forLeftAnimation");
            toggleClass($(".item3"),"forRightAnimation","forLeftAnimation");
            toggleClass($(".item4"),"forRightAnimation","forLeftAnimation");
            toggleClass($(".item5"),"forRightAnimation","forLeftAnimation");
        } else {
            this.show();
        }
    }
    
    show() {
        if(contain($(".item2"),"forLeftAnimation")) {
            let cont;
            for(cont=2; cont<=5; cont++) {
                let itemNum = ".item" + cont;
                $(itemNum).classList.remove("forLeftAnimation");
                $(itemNum).classList.add("forRightAnimation");
            }
        } else {
            let cont;
            for(cont=2; cont<=5; cont++) {
                let itemNum = ".item" + cont;
                $(itemNum).classList.add("forRightAnimation");
            }
        }
    }
    
    hidden() {
        if(contain($(".item2"),"forRightAnimation")) {
            let cont;
            for(cont=2; cont<=5; cont++) {
                let itemNum = ".item" + cont;
                $(itemNum).classList.remove("forRightAnimation");
                $(itemNum).classList.add("forLeftAnimation");
            }
        } else {
            let cont;
            for(cont=2; cont<=5; cont++) {
                let itemNum = ".item" + cont;
                $(itemNum).classList.add("forLeftAnimation");
            }
        }
    }
    
}

let nav = new Nav();