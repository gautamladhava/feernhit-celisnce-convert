function ffunction(){
var cvalue = document.getElementById("cvalue")
var fvalue = document.getElementById("fvalue")
cvalue.value = (fvalue.value-32)/1.8


}
function cfunction(){
var fvalue = document.getElementById("fvalue");
var cvalue = document.getElementById("cvalue")
fvalue.value = (cvalue.value*1.8)+32
}