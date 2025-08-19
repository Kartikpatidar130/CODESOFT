let result = document.getElementById("result")
function appendvalue(val) {
    if(result.innerHTML === "0"){
        result.innerHTML = val
    }
   else{
    result.innerHTML += val
   }
    
}
function calculate() {
    result.innerHTML = eval(result.innerHTML)
    
}
function cleardisplay() {
    result.innerHTML = "0"
    console.log("done")
    
}