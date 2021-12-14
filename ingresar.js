function verificar ()
{
    
var a = document.getElementById("n1").value
var b = document.getElementById("n2").value
var c = document.getElementById("n3").value
var d = document.getElementById("n4").value
var e = document.getElementById("n5").value

if (a<b){
    max = b
        }
else
{
    max = a
}
 if (max<c){
     max = c
}
else{
    max = max
}

if (max<d){
    max = d
}
else{
   max = max
}
if (max<e){
    max = e
}
else{
   max = max
}


alert ("el valor es " + max)

}

