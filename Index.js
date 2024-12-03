//Temperature conversion program

const textBox = document.getElementById("textbox");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result= document.getElementById("result");
const alert = document.getElementById("alert");
let temp;

function convert(){
    if(!checkValidInput()){
        return;
    }
    if (from.value === "fahrenheit" && to.value === "celcius") {
        toCelcius();
    } else if (from.value === "celcius" && to.value === "fahrenheit") {
        toFahrenheit();
    }

} 

function checkValidInput(){
    if(from.value !== "fahrenheit" && from.value !== "celcius"){
        alert.textContent = "No 'From' unit selected";
        return false;
    }
    else if(to.value !== "fahrenheit" && to.value !== "celcius"){
        alert.textContent = "No 'To' unit selected";
        return false;
    }
    else if(from.value === to.value){
        result.textContent = textBox.value;
        return false;
    }
    alert.textContent = ""; 
    return true;
}

function toFahrenheit(){
    temp = Number(textBox.value);
    temp = temp *9 /5 + 32;
    result.textContent = temp.toFixed(1) + "°F";

}
function toCelcius(){
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C";
}