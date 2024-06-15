function addToDisplay(value){
    document.getElementById('display').value += value;
}

function calculate(){
    var expresion = document.getElementById('display').value;
    
    var result = eval(expresion);
    document.getElementById('display').value = result;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}
