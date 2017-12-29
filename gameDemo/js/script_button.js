function $(element, context) {
    if(context) {
        return context.querySelector(element);
    } else {
        return document.querySelector(element);
    }
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
        localStorage.setItem('player1Life','100');
        localStorage.setItem('player2Life','100');
    }
    
}

let button = new Button();