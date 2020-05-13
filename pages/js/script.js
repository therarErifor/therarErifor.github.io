"use strict"
menu.onclick = function myFunction(){
	let x = document.getElementById("myTopnav");

	if(x.className ==="topnav"){
		x.className += " responsive";
	}	else {
		x.className = "topnav";
	}
}

$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });

function plus(){
	let a, b, c;
	a = document.getElementById('n1').value;
	a = parseInt(a);

	b = document.getElementById('n2').value;
	b = parseInt(b);
	c = +a + +b;
	document.getElementById('out').value = c;
}
function minus(){
	let a, b, d;
	a = document.getElementById('n1').value;
	a = parseInt(a);

	b = document.getElementById('n2').value;
	b = parseInt(b);
	d = a - b;
	document.getElementById('out').value = d;
}
function multiplication(){
	let a, b, e;
	a = document.getElementById('n1').value;
	a = parseInt(a);

	b = document.getElementById('n2').value;
	b = parseInt(b);
	e = a * b;
	document.getElementById('out').value = e;
}
function division(){
	let a, b, f;
	a = document.getElementById('n1').value;
	a = parseInt(a);

	b = document.getElementById('n2').value;
	b = parseInt(b);
	f = a / b;
	document.getElementById('out').value = f;
}

function windopen(){
	let wind = window.open('test.html', 'test', 'width=500px,height=450px')
}


