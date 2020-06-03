/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}

// Variables
var firstName = $("fname");
var lastName = $("lname");
var email = $("email");
var phone = $("phone");
var otherChoice = $("other");
var address = $("address");
var city = $("city");
var zipCode = $("zip");

// Validation
    var regex1, emailformat, cityformat, zipcodeFormat, phoneFormat;
        regex1 = new RegExp("[^a-z|^A-Z]");
        emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        phoneFormat = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        cityformat = /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;
        zipcodeFormat = /^\d{5}(-\d{4})?$/;
    
function validate() {
	"use strict";
    var nameResult = regex1.test(firstName.value) === true;
    var nameResult = regex1.test(lastName.value) === true;
    var emailResult = emailformat.test(email.value) === true;
    var cityResult = cityformat.test(city.value) === true;
    var zipResult = zipcodeFormat.test(zipCode.value) === true;
    var phoneResult = phoneFormat.test(phone.value) === true;
    
	//NAME 
    if (nameResult) {
        $("errors").innerHTML = "&#10006;";         
        return false;
    } else {
        $("errors").style.display = "none";
		$("errors2").innerHTML = "&#x2714;";
        $("top").innerHTML = "Name: " + firstName.value;
    }
	//LASTNAME 
    if (lastName.value === '') {
        $("errorL").innerHTML = "&#10006;";
        return false;
    } else {
        $("errorL").style.display = "none";
		$("errorL2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>Last Name: " + lastName.value;
    }
	//PHONE 
    if (phoneResult) {
        $("errorP2").innerHTML = "&#x2714;";
		$("errorP").style.display = "none";
        $("top").innerHTML += "<br>Phone: " + phone.value;
    } else {
		$("errorP").innerHTML = "&#10006;";
    }
	//EMAIL 
    if (emailResult) {
		$("errorE").style.display = "none";
		$("errorE2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>Email: " + email.value;
    } else {
        $("errorE").innerHTML = "&#10006;";
    }
	//ADDRESS TYPE 
	if ($("addressDrop").value === "house") {
		$("top").innerHTML += "<br>Address Type: House";
	} else if ($("addressDrop").value === "apartment"){
		$("top").innerHTML += "<br>Address Type: Apartment";
	} else if ($("addressDrop").value === "business"){
		$("top").innerHTML += "<br>Address Type: Business";
	} else if ($("addressDrop").value === "campus"){
		$("top").innerHTML += "<br>Address Type: Campus";
	} else if ($("addressDrop").value === "hotel"){
		$("top").innerHTML += "<br>Address Type: Hotel";
	} else if ($("addressDrop").value === "dorm"){
		$("top").innerHTML += "<br>Address Type: Dorm";
	} else if ($("addressDrop").value === "other"){
		$("top").innerHTML += "<br>Address Type: " + otherChoice.value;
	}
	//ADDRESS 
    if (address.value === false) {
		$("errorA").innerHTML = "&#10006;";
        return false;
	} else {
		$("errorA").style.display = "none";
		$("errorA2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>Address: " + address.value;
	}
	//CITY 
	if (cityResult) {
		$("errorC").style.display = "none";
		$("errorC2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>city: " + city.value;
    } else {
        $("errorC").innerHTML = "&#10006;";
    }
	//ZIPCODE 
	if (zipResult) {
		$("errorZ").style.display = "none";
		$("errorZ2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>zipcode: " + zipCode.value;
    } else {
        $("errorZ").innerHTML = "&#10006;";
	}
}


//OTHER   
$("addressDrop").addEventListener("change", function() {
    "use strict";
    var x = $("otherChoice");
    
    if ($("other").selected == true){
        x.style.display='block';
    } else {
        x.style.display='none';
    }
});

// SHOW "CASH OR CARD"
$("card").addEventListener("click", function() {
    "use strict";
    var x = $("payment");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
});

//HIDE "CASH OR CARD"
$("cash").addEventListener("click", function() {
    "use strict";
    var y = $("payment");
    
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "none";
        
    }
});

//ARRAY TO ADD PRICE 
var pizza_price= new Array();
pizza_price["None"]=0;
pizza_price["Glutten Free"]=null;
pizza_price["New York"]=null;
pizza_price["Thin Crust"]=null;
pizza_price["Hand Tossed"]=null;
pizza_price["Small ($10.99)"]=10.99;
pizza_price["Large ($16.99)"]=16.99;
pizza_price["Extra Large ($19.99"]=19.99;
pizza_price["Medium ($11.99)"]=11.99;
pizza_price["Large ($13.99)"]=13.99;
pizza_price["Small ($9.99)"]=9.99;
pizza_price["Medium ($12.99)"]=12.99;
pizza_price["Large ($14.99)"]=14.99;


//CHOOSING PIZZA
function getPizzaPrice() {
     "use strict";
    var pizzaChoice = 0;
    var theForm = document.forms["myDIV"];
    var selected = theForm.elements["select"];
    pizzaChoice = pizza_price[selected.value];
    return pizzaChoice;
}


//DROPDOWN MENU
$("hand").addEventListener("change", function gluten() {
     "use strict";
    var select = $("select"); 
    var options = ["Hand Tossed","Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"];
    
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

$("thin").addEventListener("change", function gluten() {
     "use strict";
    var select = $("select"); 
    var options = ["Thin Crust", "Medium ($11.99)", "Large ($13.99)"];

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

$("gluten").addEventListener("change", function gluten() {
     "use strict";
    var select = $("select"); 
    var options = ["Gluten Free", "Small ($10.99)"];

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

$("york").addEventListener("change", function gluten() {
     "use strict";
    var select = $("select"); 
    var options = ["New York", "Large ($16.99)", "Extra Large ($19.99"]; 

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

//SAUCE
function getSauce() {
    "use strict";
    var sauce = 0;
    if($("bbq").selected == true){
        sauce = parseFloat($("bbq").value);
        $("totalPrice").innerHTML = "BBQ Sauce: +$1.99";
    }
    if($("tomato").selected == true){
        sauce = parseFloat($("tomato").value);
    }
    return sauce;
}

//CHEESE
function getCheese() {
    "use strict";
    var cheese = 0;
    if($("extra").selected == true){
        cheese = parseFloat($("extra").value);
    }
    if($("double").selected == true){
        cheese = parseFloat($("double").value);
    }
    return cheese;
}

//RETURNING 
function formatDecimal(val, n) {
        n = n || 2;
        var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
        while (str.length <= n) {
            str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0,pt) + "." + str.slice(pt);
    }

//ADDING TOPPINGS
function toppingPrice() {
    "use strict";
    var toppings = 0;
    
    var theForm = document.forms["myDIV"];
    var pepperoni = theForm.elements["pep"];
    var sasauge = theForm.elements["sa"];
    var ham = theForm.elements["ham"];
    var bacon = theForm.elements["bacon"];
    var salami = theForm.elements["salami"];
    var peppers = theForm.elements["peppers"];
    var olives = theForm.elements["olives"];
    var jala = theForm.elements["jala"];
    var mushroom = theForm.elements["mush"];
    var pineapple = theForm.elements["pine"];
    var onions = theForm.elements["onions"];
    
    if (pepperoni.checked === true) {
        toppings += 0.99;
    }
    if (sasauge.checked === true) {
        toppings +=0.99;
    }
    if (ham.checked === true) {
        toppings += 0.99;
    }
    if (bacon.checked === true) {
        toppings += 0.99;
    }
    if (salami.checked === true) {
        toppings +=0.99;
    }
    if (peppers.checked === true) {
        toppings += 0.99;
    }
    if (olives.checked === true) {
        toppings += 0.99;
    }
    if (jala.checked === true) {
        toppings += 0.99;
    }
    if (mushroom.checked === true) {
        toppings += 0.99;
    }
    if (pineapple.checked === true) {
        toppings +=  0.99;
    }
    if (onions.checked === true) {
        toppings += 0.99;
    }
    return toppings;
}


//CASH OPTION TO UNCHECK CARD BUTTON
$("cash").addEventListener("click", function(){
    "use strict";
    $("card").checked = false;
});

//CARD OPTION TO UNCHECK CASH BUTTON
$("card").addEventListener("click", function(){
    "use strict";
    $("cash").checked = false;
});

//AUTOFILL THE CARD ADDRESS INFO 
$("autoFill").addEventListener("click", function() {
    var box = $("autoFill");
    if(box.checked == false) { return; }
    document.myDIV.firstName2.value  += document.myDIV.usr.value;
    document.myDIV.lastName2.value  = document.myDIV.lastName.value;
    document.myDIV.email2.value  = document.myDIV.email.value;
    document.myDIV.city2.value  = document.myDIV.city.value;
    document.myDIV.zip2.value  = document.myDIV.zip.value;
    document.myDIV.address2.value  = document.myDIV.address.value;
});

//TOTAL CALCULATION
function calculateTotal() {
    "use strict";
    var total;
    total =  formatDecimal(toppingPrice() + getPizzaPrice() + getSauce() + getCheese());
    var totalCost = $("totalPrice");
    totalCost.innerHTML = "<br>$ " + total;
    return true;
}

//DISPLAY ALERT BOX ON SUBMIT
$("btn").addEventListener("click", function(){
    alert("Name: " + firstName.value + "\nLast Name: " +  lastName.value + "\nEmail: " + email.value + "\nAddress: " + address.value + "\nZip Code: " + zipCode.value + "\nyour Total: " + Math.abs(toppingPrice() + getPizzaPrice() + getSauce() + getCheese()));
    return this;
});
