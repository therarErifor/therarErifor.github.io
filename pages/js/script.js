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

function run(num){
	if (num == 0){
		let name = 'Ильшат';
   		alert('Привет, '+ name);
	}else 
	if (num == 1){
		let name = prompt("Как вас зовут?");
   		alert('Привет, '+ name);
	}else
	if (num == 2.2){
		let name = prompt("Как вас зовут?");
		let age = prompt("Сколько вам лет?");
   		alert('Имя: '+ name + '\n'+
   			'Возраст: ' + age);
	}else
	if (num == 3){
		let a = prompt("Введите первое число");
		let b = prompt("Введите второе число");
	}else
	if (num == 3.1){
		let a = prompt('Введите первое число');
		let b = prompt('Введите второе число');
		let s = +a + +b;
		let v = a - b;
		let u = a * b;
		let d = a / b;
		alert("Сложение: " + s + "\n" +
			"Вычитание : " + v + "\n" +
			"Умножение : " + u + "\n" +
			"Деление : " + d);
	}else
	if (num == 3.2){
		let a = prompt("Введите число а");
		let b = prompt("Введите второе число b");
		let c =(a > b);
		let d =(a < b);
		let e =(a == b);
		let f =(a != b);
		let h =(a >= b);
		alert("а больше b - "+ c +"\n"+
		"а меньше b - "+ d + "\n"+
		"а равен b - "+ e + "\n"+
		"а неравен b - "+ f + "\n"+
		"а больше или равен b - " + h);
	}else
	if (num == 4.1){
		let a = prompt("Первое число");
		let b =	prompt("Второе число");
		if(a>b){
			a = a * 2;
			alert("Первое число больше"+"\n" + "результат: " + a);
		}else if(a < b){
			b = +b + 10;
			alert("Второе число больше"+"\n" + "результат: " + b);
		}else alert("Оба числа равны");
	}else
	if(num == 4.21){		//необходимо заполнить!!

	}else
	if(num == 4.22){

	}else
	if(num == 5.11){
		let hour = 8;
		if (hour < 9 || hour > 17) {
  		alert( 'Офис закрыт.' );
		}
	}else
	if(num == 5.12){
		let userName = prompt("Введите логин?", '');
		if (userName == 'Админ') {
  		let pass = prompt('Пароль?', '');
  		if (pass == 'Я главный') {
    		alert( 'Здравствуйте!' );
  		} else if (pass == '' || pass == null) {
    		alert( 'Отменено' );
  		} else {
    		alert( 'Неверный пароль' );
  		}
		} else if (userName == '' || userName == null) {
  		alert( 'Отменено' );
		} else {
  		alert( "Неверный логин" );
		}
	}


}


