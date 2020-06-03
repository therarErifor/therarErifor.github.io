"use strict"
		function check(num){

		if(num == 0){ 
		
			document.getElementById('option1').style.display='block';
			document.getElementById('option2').style.display='block';
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			document.getElementById('question').style.display='block';

			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];
			
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='inline';
			document.getElementById('forward').style.display='inline';
			let intervalID = setInterval(sec, 1000);

		}else{
			

			if( num ==  data_array[cur_answer][5]){
				plus++;
		
			}

			if(num == 6){
			cur_answer--;
			}else{
			cur_answer++;
			}
			if(cur_answer < count_answer){
			
				document.getElementById('option1').innerHTML=data_array[cur_answer][1];
				document.getElementById('option2').innerHTML=data_array[cur_answer][2];
				document.getElementById('option3').innerHTML=data_array[cur_answer][3];
				document.getElementById('option4').innerHTML=data_array[cur_answer][4];
				document.getElementById('question').innerHTML=data_array[cur_answer][0];
				
			}else{
				
				
				document.getElementById('option1').style.display='none';
				document.getElementById('option2').style.display='none';
				document.getElementById('option3').style.display='none';
				document.getElementById('option4').style.display='none';
				document.getElementById('question').style.display='none';
				document.getElementById('end').style.display='inline';
				
				document.getElementById('back').style.display='none';
				document.getElementById('forward').style.display='none';

				let percent =  Math.round(plus/count_answer*100);				
				let res = 'Плохо!';
				if(percent>70) res = 'Хорошо!';
				if(percent==100) res = 'Отлично!';
				
				document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
			}
		}
			if(cur_answer == 0){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			}else if(cur_answer == 1){	
			document.getElementById('back').style.display='inline';
			document.getElementById('option3').style.display='none';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 2){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 3){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 4){
			document.getElementById('option3').style.display='none';
			document.getElementById('option4').style.display='none';	
			}else if(cur_answer == 5){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			}else if(cur_answer == 6){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			}else if(cur_answer == 7){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 8){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 9){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 10){
			document.getElementById('option3').style.display='none';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 11){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			}else if(cur_answer == 12){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 13){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 14){
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='none';
			}else if(cur_answer == 15){
			document.getElementById('option3').style.display='none';
			document.getElementById('option4').style.display='none';
			}
			/*else if(cur_answer > 10){
			document.getElementById('option3').style.display='none';
			
			}*/
		
	}

