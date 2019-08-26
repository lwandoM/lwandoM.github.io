

var color = document.getElementById("color");
color.innerHTML="";
selectedColor = document.getElementById("selectedColor");

var counter = document.getElementById("badge");
counter.innerHTML = 0;

var currentNumItems = document.getElementById("current-items"); 
currentNumItems.innerHTML =0;

var addToCart = document.getElementById("cart");
addToCart.innerHTML = "Add to Cart";

colors = ["Crimson","indigo","Black","white","Eletric red","yellow","blue","grey","back","red","LawnGreen","green","salmon","white","orange","blue","grey","Silver"];



for(var i =0; i<18; i++){
    var element = document.createElement("span");
    element.setAttribute("class", "dot");
    element.style.backgroundColor = colors[i];
    
    
    var parent = document.getElementById("circles");
    parent.appendChild(element);
}

var myVar = document.getElementsByClassName("dot");
for (var j=0; j<myVar.length; j++){
    var var1 = myVar[j];
    var1.setAttribute("onclick", "colorSelect(this)");
    var1.setAttribute("white-space","15px");

}

function colorSelect(obj){
    var clr = obj.style.backgroundColor;
    var string = clr.charAt(0).toUpperCase();
    
    for (var i=1; i<clr.length;i++){
        string += clr.charAt(i);    
        }
    color.innerHTML = string;
    selectedColor.innerHTML = color.innerHTML;
    }

function active(obj){
    obj.style.border= "solid";
    obj.style.borderColor = "lightgrey"; 
}

function inactive(obj){
    
    
}
function incrementValue()
{
    if (color.innerHTML != ""){
         currentNumItems.innerHTML++;
    }
   
}

function decrementValue()
{
    var value = currentNumItems.innerHTML;
    if (value>0 && color.innerHTML != ""){
         value--;
    }
    currentNumItems.innerHTML = value;
}


function checkOut(){
    
    counter.innerHTML = currentNumItems.innerHTML;
    currentNumItems.innerHTML = "";
    if(counter.innerHTML>0){
        addToCart.innerHTML = "Checkout Now";
        
    }
}




