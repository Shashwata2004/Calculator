let prev_num = null;   // outer scope
let oprator = null; 

document.querySelector('.keys').addEventListener("click" , (e) => {

    let display = document.querySelector('.display');
    
    if(e.target.classList.contains("key-num")) {

        if(display.textContent === "0" || display.textContent === "00") {
            display.textContent = e.target.textContent;
        }
        else if(display.textContent.length <= 9) {
            display.textContent += e.target.textContent;
        }
    }

    else if(e.target.classList.contains("key-op")) {
        prev_num = display.textContent;
        oprator = e.target.textContent;

        display.textContent = "";
    }

    else if(e.target.classList.contains("equals")) {
        let curr_num = display.textContent;
        if(oprator === "+") {
            display.textContent = parseFloat(prev_num) + parseFloat(curr_num);
        }

        else if(oprator === "-") {
            display.textContent = parseFloat(prev_num) - parseFloat(curr_num);
        }

        else if(oprator === "*") {
            display.textContent = parseFloat(prev_num) * parseFloat(curr_num);
        }

        else if(oprator === "/") {
            display.textContent = parseFloat(prev_num) / parseFloat(curr_num);
        }
    }

    else if(e.target.classList.contains("key-fn")) {
        if(e.target.textContent === "%") {
            display.textContent = parseFloat(display.textContent) / 100;
        }

        else if(e.target.textContent === "AC") {
            display.textContent = "0";
        }

        else if(e.target.textContent === "DEL") {
            if(display.textContent.length === 1) {
                display.textContent = "0";
            }

            else {
                display.textContent = display.textContent.slice(0 , -1);
            }
        }
    }
});