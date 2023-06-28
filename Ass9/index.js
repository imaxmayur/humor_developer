const clickFunction = document.querySelector(".button")

clickFunction.addEventListener("click", () => {
    // clickFunction.classList.toggle("change-color")
    if ( clickFunction.classList.contains("change-color")) {
        clickFunction.classList.remove("change-color");
        
    }
    else {
        clickFunction.classList.add("change-color");

    }
});

