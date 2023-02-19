# JS_lesson_2

1) Function Expression, Function Declaration и стрелочные функции <br>

2) Примеры вызова: <br>
   // Function Declaration <br>
    function sayHiOne() {    <br>         
      console.log( "Hi!" ); <br>
    }
   // Function Expression <br>
    let sayHiTwo = function() {     
      console.log( "Hi!" ); 
    };
   // Стрелочная функция <br>
    let sayHiThree = () => console.log("Hi!");    


    sayHiOne(); <br>
    sayHiTwo(); <br>
    sayHiThree();
3) Тестирование и дебаггинг - устранение ошибок в скрипте с помощью Dev Tools. Логирование - вывод в консоль кода с применением функции console.log.
4)
5)
6)
7) Область видимости вне любых функций. Переменные, объявленные в ней, видны везде.

8) function showX(x) <br>
  { 
    return x; <br>
  }
  console.log(showX(28)); // 28 

9) function sum(x, y=0) { <br>
    return x+y; <br>
  } 
  console.log(sum(5)); // 5

10) console.log(foo); //undefined <br>

   let foo = "Cat"; <br>
   console.log(foo); // Cat
