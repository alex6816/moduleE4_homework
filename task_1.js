'use strict';

const firstObj = {
  alfa: 345,
  beta: 'stroka',
  gamma: true,  
};

// функция выводит собственные ключи и значения объекта
function showAll(obj) {
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
       console.log(key + ': ' + obj[key]);
     }
   }  
}  

showAll(firstObj);