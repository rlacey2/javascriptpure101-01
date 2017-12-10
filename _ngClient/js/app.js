// put your JavaScript here, rather than inline in index.html

function updateDiv01() {
    document.getElementById("div01").innerHTML = "I was put here by clicking the button Div 01";
	document.getElementById("div01").style.color = "red";
	document.getElementById("div01").style.backgroundColor = "yellow";
}

function updateDiv02() {
	var div02 = document.getElementsByName("div02")[0];
    div02.innerHTML = "I was put here by clicking the button Div 02";
	div02.style.color = "red";
	div02.style.backgroundColor = "green";
}


document.write("<br/>Hi, I am put here from app.js when the script file loaded - discuss document ready issues for busy pages? ");


document.getElementById("div01").innerHTML = "I am replacement text for the original contents of div01 by id";

alert("Page Reloaded");