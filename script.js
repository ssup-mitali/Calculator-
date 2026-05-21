let display = document.getElementById("display")
display.value = 8;
console.log(display.value);

let buttons = document.querySelectorAll("button")
console.log(buttons);

buttons.forEach((button)=>{
    button.addEventListener('click' , function(){
        let textContent = button.textContent;

        if(this.textContent === "AC"){
            display.value = "";
        }
        else if(textContent === "DEL"){
            display.value = display.value.slice(0 , -1);
        }
        else if(textContent === "="){
            display.value = eval(display.value)
        }
        else{
             display.value += textContent;
        } 
        
    })
})

