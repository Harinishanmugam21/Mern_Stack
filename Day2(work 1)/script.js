function clearScreen(){
    document.getElementById("result").value="";

}
function display(value){
    var v = document.getElementById("result");
    v.value+=value;

}
function Result(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}