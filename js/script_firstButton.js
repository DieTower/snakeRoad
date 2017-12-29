class FirstButton {
    
    constructor() {
        let firstButton = $("#bar");
    }
    
    events() {
        
    }
    
    leftOrRight() {
        let item1 = $(".item1 a",this.firstButton);
        if(contain(item1,"arrowCompleteForLeftAnimation")) {
            this.arrowRight();
        } else {
            this.arrowLeft();
        }
    }
    
    arrowUp() {
        let item1 = $(".item1 a",this.firstButton);
        if(contain(item1,"arrowUpForLeftAnimation") || contain(item1,"arrowCompleteForLeftAnimation")) {
            this.removeAllClasses(item1);
            item1.classList.add("arrowLeftForUpAnimation");
            
        } else {
            this.removeAllClasses(item1);
            item1.classList.add("arrowRightForUpAnimation");
            
        };
    }
    
    arrowLeft() {
        let item1 = $(".item1 a",this.firstButton);
        if(contain(item1,"arrowRightForUpAnimation")) {
            this.removeAllClasses(item1);
            item1.classList.add("arrowUpForLeftAnimation");
            
        } else {
            this.removeAllClasses(item1);
            item1.classList.add("arrowCompleteForLeftAnimation");
            
        };
    }
    
    arrowRight() {
        let item1 = $(".item1 a",this.firstButton);
        if(contain(item1,"arrowLeftForUpAnimation")) {
            this.removeAllClasses(item1);
            item1.classList.add("arrowUpForRightAnimation");
            
        } else {
            this.removeAllClasses(item1);
            item1.classList.add("arrowCompleteForRightAnimation");
            
        }
    }
    
    removeAllClasses(item) {
        item.classList.remove("arrowRightForUpAnimation",
                              "arrowUpForLeftAnimation",
                              "arrowLeftForUpAnimation",
                              "arrowUpForRightAnimation",
                              "arrowCompleteForRightAnimation",
                              "arrowCompleteForLeftAnimation");
    }
    
}