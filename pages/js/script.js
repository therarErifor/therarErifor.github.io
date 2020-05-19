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
	let wind = window.open('test.html', 'test', 'width=850px,height=500px')
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
		let g =(a <= b)
		alert("а больше b - "+ c +"\n"+
		"а меньше b - "+ d + "\n"+
		"а равен b - "+ e + "\n"+
		"а неравен b - "+ f + "\n"+
		"а больше или равен b - " + h +"\n"+
		"а меньше или равен b - " + g );
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
	if (num == 4.11){
		let age = prompt('Сколько вам лет?', '');
		if (age < 18) {
  		alert('Вы не достигли совершеннолетия');
		} else {
  		alert('Вы достигли совершеннолетия');
		}
	}else
	if(num == 4.21){	
		let age = prompt('Сколько вам лет?', '');
		(age < 18) ? alert('Вы не достигли совершеннолетия') : alert('Вы достигли совершеннолетия');
	}else
	if(num == 4.22){
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
	}else
	if(num == 5.2){
		let t = prompt("Введите время (в часах): ");
		let x = (t < 9) || (t > 17);
		if (x == true){
		alert("Колледж закрыт!");
		} else {
			alert("Колледж открыт!");
		}
	}else
	if(num == 6.11){
		let i = 0;
		while (i < 3) { // выводит 0, затем 1, затем 2
  		alert( i );
  		i++;
		}
	}else
	if(num == 6.12){
		alert('Бочка опорожнится наполовину через 59 минут');
	}else
	if(num == 6.31){
		for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  		alert(i);
		}
	}else
	if(num == 6.32){
	alert("Через 12 минут выльется 36 литров")
	}else
	if(num == 7.11){
		let arr = ['1', '2', '3'];
		alert(arr); 
		alert(arr[1]);
	}else
	if(num == 7.12){
		let arr = [
  			"Яблоко",
  			"Апельсин",
  			"Слива",
			];
alert(arr);
	}else
	if(num == 7.13){
		let matrix = [
  		[1, 2, 3],
  		[4, 5, 6],
  		[7, 8, 9]
		];
		alert( matrix[1][1] );
	}else
	if(num == 8.1){
		function showMessage() {
  		alert( 'Привет мир!' );
		}
	}else
	if(num == 8.11){
		let styles = ["Яблоко", "Апельсин"];
		alert(styles);
		styles.push("Груша");
		alert(styles);
		styles[Math.floor((styles.length - 1) / 2)] = "Слива";
		alert(styles);
		alert( styles.shift() );
		alert(styles);
		styles.unshift("Персик", "Гранат");
		alert(styles);
	}else
	/*if(num == 8.22){
		
	}else


		if(num == 8.23){
		document.getElementById('primer').style.display="none";
		document.getElementById('btn2').style.display="block";
		}else
*/

	if (num == 55){
		alert('Тест');
		alert('Пройден');
	}else
	if (num == 56){
		alert('Сложение');
		alert('Вычитание');
		alert('Умножение');
		alert('Деление');
	}
}

function resh(){
	let a = document.getElementById('textareaId').value;
	eval(a);
	
	
}

function op(){
	document.getElementById('primer').style.display="block";
	document.getElementById('btn2').style.display="block";
	document.getElementById('btn1').style.display="none";
}

function cl(){
	document.getElementById('primer').style.display="none";
	document.getElementById('btn2').style.display="none";
	document.getElementById('btn1').style.display="block";
}