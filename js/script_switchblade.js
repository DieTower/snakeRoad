function $(item, contextItem) {
    if(contextItem) {
        return contextItem.querySelector(item);
    } else {
        return document.querySelector(item);
    };
}

function contain(element, itemClass) {
    return element.classList.contains(itemClass);
}

function toggleClass(el,classNum1,classNum2) {
    let element = el.classList;
    if(contain(el,classNum1)) {
        element.add(classNum2);
        element.remove(classNum1);
    } else if(contain(el,classNum2)) {
        element.add(classNum1);
        element.remove(classNum2);
    } else {
        console.log("None of these classes exists");
    }
}