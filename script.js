let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

let btnArray = Array.from(buttons);

btnArray.forEach(btn => {
    btn.addEventListener('click',(event) => {
        if(event.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            display.value = string;
            
        }
        else if(event.target.innerHTML == "AC"){
            string = "";
            display.value = string;
        }
        else if(event.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        }
        else{
            string += event.target.innerHTML;
            display.value = string;
        }
        
        
        
    });
});

// console.log(btnArray);