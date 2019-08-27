

var color = document.getElementById("color");
color.innerHTML="";
selectedColor = document.getElementById("selectedColor");

var counter = document.getElementById("badge");
counter.innerHTML = 0;

var currentNumItems = document.getElementById("current-items"); 
currentNumItems.innerHTML =0;

var addToCart = document.getElementById("cart");
addToCart.innerHTML = "Add to Cart";

colors = ["Crimson","indigo","Black","white","DarkOrange","yellow","blue","grey","SandyBrown","SkyBlue","LawnGreen","DeepPink","Wheat","SeaGreen","RosyBrown","SaddleBrown","LightSkyBlue","Silver"];



for(var i =0; i<18; i++){
    var element = document.createElement("span");
    element.setAttribute("class","dot")
    element.style.backgroundColor = colors[i];
    
    var space = document.createElement("p");
    space.setAttribute("id","space-p")
    space.innerHTML= "##";
    
    var parent = document.getElementById("circle-container");
    parent.appendChild(element);
    parent.appendChild(space);
}

var myVar = document.getElementsByClassName("dot");
for (var j=0; j<myVar.length; j++){
    var var1 = myVar[j];
    var1.setAttribute("onclick", "colorSelect(this)");
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
    currentNumItems.innerHTML = 0;
    if(counter.innerHTML>0){
        addToCart.innerHTML = "Checkout Now";
        var label = document.getElementById("button");
        label.removeAttribute("data-toggle")
        label.removeAttribute("data-target")
        
    }
}




