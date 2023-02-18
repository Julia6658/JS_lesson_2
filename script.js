
//1 задание

function consoleMsg(message) {
    console.log(message);
}
consoleMsg("Я учу JavaScript!");


//2 Задание

function changeImg() {
     let image = document.getElementById('imageOne');
     if (image.getAttribute('src') == 'cat2.jpg') {
        image.src = 'cat1.jpg'
     } else {
        image.src = 'cat2.jpg'
     }
}

//3 Задание

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

console.log(typeof(currentYear));

const messageType1 = "Год является високосным (366 дней)";
const messageType2 = "Год невисокосный";

function checkYear() {
    if (currentYear % 4 == 0) {
        if (currentYear % 100 == 0) { //2
            if (currentYear % 400 == 0)  {//3
                console.log(messageType1);
            }  else {
                console.log(messageType2); // 5
            } 
        } else {
            console.log(messageType1); //4
        }   
    }  else {
        console.log(messageType2); //5 
    }
}

checkYear(currentYear);