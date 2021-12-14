function cuantasA(){

 x =  $("#cuadro").val()
 cant = 0




 for (i=0; i<x.length; i++)
   
{
   if (x[i] == "a")   
           {
            cant = cant+1;
           }    
}


alert ("la cantidad de a son " + cant);

}
