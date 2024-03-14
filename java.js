function raiseToDegree() {

  var sms = "Не вводите буквы!"

    const number = prompt('Введите число:');  
    console.log(number);
    if (isNaN(number)) {
      alert('Не вводите буквы!');
      console.log(sms);
      
    }

    var sms2 = "Не вводите 0!"
    if (number == 0) {
      alert("Не вводите 0!")
      console.log(sms2);
    }
    
      
  
    
    const degree = prompt('Введите степень:');
  console.log(degree);
    
    if (isNaN(degree)) {
      alert('Не вводите буквы!');
      return;
    }
    if (degree == 0) {
      alert("Не вводите 0!")
      console.log(sms2);
    }

  
    
    const num = Number(number);
    const deg = Number(degree);
  
   
    const result = Math.pow(num, deg);
  
   
    alert(`Результат: ${result}`);
    console.log("Результат: " + result);
  }


  
  raiseToDegree();

 

  do {
    var Numbers = +prompt('Введите количество ступенек')
} while (isNaN(Numbers) || Numbers == 0);


do {
    var First = prompt('Введите первый символ')
} while (!isNaN(First) || First == '');
do


{

  
    var Second = prompt('Введите второй символ')



} while (!isNaN(Second) || Second == '');
var Fer = First
console.log(Second);


for (let i = 1; i < Numbers; i++) {
    console.log( First + Second);
    First = First + Fer

}
