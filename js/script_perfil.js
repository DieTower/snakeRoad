class Perfil {
    
    constructor() {
        const perfil = $(".developersPerfil");
        this.perfil1 = $(".devNum1",this.perfil);
        this.perfil2 = $(".devNum2",this.perfil);
        this.perfil3 = $(".devNum3",this.perfil);
        
        this.events();
    }
    
    events() {
        $("#arrowPerfilButton1",this.perfil).addEventListener("click",this.buttonBefore.bind(this));
        $("#arrowPerfilButton2",this.perfil).addEventListener("click",this.buttonNext.bind(this));
    }
    
    buttonBefore() {
        let perfil1Vanish = contain(this.perfil1,"vanish2");
        let perfil2Vanish = contain(this.perfil2,"vanish2");
        let perfil3Vanish = contain(this.perfil3,"vanish2");
        
        if(!perfil1Vanish) {
            console.log("Not exist a before image");
        } else if(!perfil2Vanish) {
            this.changeForPerfil(1);
            
        } else if(!perfil3Vanish) {
            this.changeForPerfil(2);
            
        }
    }
    
    buttonNext() {
        let perfil1Vanish = contain(this.perfil1,"vanish2");
        let perfil2Vanish = contain(this.perfil2,"vanish2");
        let perfil3Vanish = contain(this.perfil3,"vanish2");
        
        if(!perfil1Vanish) {
            this.changeForPerfil(2);
            
        } else if(!perfil2Vanish) {
            this.changeForPerfil(3);
            
        } else if(!perfil3Vanish) {
            console.log("Not exist a next image");
        }
    }
    
    changeForPerfil(perfilNum) {
        let perfil1 = this.perfil1;
        let perfil2 = this.perfil2;
        let perfil3 = this.perfil3;
        
        if(perfilNum === 1) {
            if(contain(perfil1,"vanish2")) { perfil1.classList.remove("vanish2"); };
            if(!contain(perfil2,"vanish2")) { perfil2.classList.add("vanish2"); };
            if(!contain(perfil3,"vanish2")) { perfil3.classList.add("vanish2"); };
            
        } else if(perfilNum === 2) {
            if(contain(perfil2,"vanish2")) { perfil2.classList.remove("vanish2"); };
            if(!contain(perfil1,"vanish2")) { perfil1.classList.add("vanish2"); };
            if(!contain(perfil3,"vanish2")) { perfil3.classList.add("vanish2"); };
            
        } else if(perfilNum === 3) {
            if(contain(perfil3,"vanish2")) { perfil3.classList.remove("vanish2"); };
            if(!contain(perfil1,"vanish2")) { perfil1.classList.add("vanish2"); };
            if(!contain(perfil2,"vanish2")) { perfil2.classList.add("vanish2"); };
            
        }
        
    }
    
}

let perfil = new Perfil();