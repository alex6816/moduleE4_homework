'use strict';

const firstObj = {
  alfa: 345,
  beta: 'stroka',
  gamma: true,  
};

const testStr = 'alfa';

// функция проверяет есть ли в объекте такой ключ

function checkKey(sample, obj) {
   let result = false;
   for (let key in obj) {
     if (key === sample) {
       result = true;
     }  
   }
  return result;
}  

console.log(checkKey(testStr, firstObj));