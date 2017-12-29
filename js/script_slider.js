class Slider {
    
    constructor() {
        const slider = $("#slider");
        this.img1 = $(".sliderImgNum1",this.slider);
        this.img2 = $(".sliderImgNum2",this.slider);
        this.img3 = $(".sliderImgNum3",this.slider);
        
        this.events();
    }
    
    events () {
        $("#sliderButtonNum1",this.slider).addEventListener("click",this.buttonBefore.bind(this));
        $("#sliderButtonNum2",this.slider).addEventListener("click",this.buttonNext.bind(this));
    }
    
    buttonBefore() {
        let img1Vanish = contain(this.img1,"vanish");
        let img2Vanish = contain(this.img2,"vanish");
        let img3Vanish = contain(this.img3,"vanish");
        
        if(!img1Vanish) {
            console.log("Not exist a before image");
        } else if(!img2Vanish) {
            this.changeForImg(1);
            
        } else if(!img3Vanish) {
            this.changeForImg(2);
            
        }
    }
    
    buttonNext() {
        let img1Vanish = contain(this.img1,"vanish");
        let img2Vanish = contain(this.img2,"vanish");
        let img3Vanish = contain(this.img3,"vanish");
        
        if(!img1Vanish) {
            this.changeForImg(2);
            
        } else if(!img2Vanish) {
            this.changeForImg(3);
            
        } else if(!img3Vanish) {
            console.log("Not exist a next image");
        }
    }
    
    changeForImg(imgNum) {
        let img1 = this.img1;
        let img2 = this.img2;
        let img3 = this.img3;
        
        if(imgNum === 1) {
            if(contain(img1,"vanish")) { img1.classList.remove("vanish"); };
            if(!contain(img2,"vanish")) { img2.classList.add("vanish"); };
            if(!contain(img3,"vanish")) { img3.classList.add("vanish"); };
            
        } else if(imgNum === 2) {
            if(contain(img2,"vanish")) { img2.classList.remove("vanish"); };
            if(!contain(img1,"vanish")) { img1.classList.add("vanish"); };
            if(!contain(img3,"vanish")) { img3.classList.add("vanish"); };
            
        } else if(imgNum === 3) {
            if(contain(img3,"vanish")) { img3.classList.remove("vanish"); };
            if(!contain(img1,"vanish")) { img1.classList.add("vanish"); };
            if(!contain(img2,"vanish")) { img2.classList.add("vanish"); };
            
        }
        
    }
    
}

let slider = new Slider();

