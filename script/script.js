let grade1 = document.getElementById('grade grade1');
let grade2 = document.getElementById('grade grade2');
let grade3 = document.getElementById('grade grade3');
let grade4 = document.getElementById('grade grade4');
let grade5 = document.getElementById('grade grade5');
let grade6 = document.getElementById('grade grade6');
let grade7 = document.getElementById('grade grade7');
let grade8 = document.getElementById('grade grade8');
let grade9 = document.getElementById('grade grade9');
let grade10 = document.getElementById('grade grade10');

let unit = document.getElementById('unit');
let unit1 = document.getElementById('unit unit1');
let unit2 = document.getElementById('unit unit2');
let unit3 = document.getElementById('unit unit3');
let unit4 = document.getElementById('unit unit4');
let unit5 = document.getElementById('unit unit5');
let unit6 = document.getElementById('unit unit6');
let unit7 = document.getElementById('unit unit7');
let unit8 = document.getElementById('unit unit8');
let unit9 = document.getElementById('unit unit9');
let unit10 = document.getElementById('unit unit10');

let total1  = document.getElementById('total total1');
let total2  = document.getElementById('total total2');
let total3  = document.getElementById('total total3');
let total4  = document.getElementById('total total4');
let total5  = document.getElementById('total total5');
let total6  = document.getElementById('total total6');
let total7  = document.getElementById('total total7');
let total8  = document.getElementById('total total8');
let total9  = document.getElementById('total total9');
let total10  = document.getElementById('total total10');

let totalOfUnits = document.getElementById('totalOfUnits');
let sumOfAB = document.getElementById('sumOfAB');
let SWA = document.getElementById('SWA');

let result = document.querySelector('#result');

unit1.value = 0
   unit2.value= 0
   unit3.value= 0
   unit4.value= 0
   unit5.value= 0
   unit6.value= 0
   unit7.value= 0
   unit8.value= 0
   unit9.value= 0
   unit10.value = 0

result.addEventListener('click', function(){
   total1.value = grade1.value * unit1.value;
   total2.value = grade2.value * unit2.value;
   total3.value = grade3.value * unit3.value;
   total4.value = grade4.value * unit4.value;
   total5.value = grade5.value * unit5.value;
   total6.value = grade6.value * unit6.value;
   total7.value = grade7.value * unit7.value;
   total8.value = grade8.value * unit8.value;
   total9.value = grade9.value * unit9.value;
   total10.value = grade10.value * unit10.value;

   
   
   
   totalOfUnits.value = parseInt(unit1.value) + parseInt(unit2.value) + parseInt(unit3.value) + parseInt(unit4.value) + parseInt(unit5.value) + parseInt (unit6.value) + parseInt(unit7.value) + parseInt(unit8.value) + parseInt(unit9.value) + parseInt(unit10.value);
   sumOfAB.value = parseInt(total1.value) + parseInt(total2.value) + parseInt(total3.value) + parseInt(total4.value) + parseInt(total5.value) + parseInt(total6.value) + parseInt(total7.value) + parseInt(total8.value) + parseInt(total9.value) + parseInt(total10.value);
   
   

   sumOfAB.innerText = sumOfAB.value;
   totalOfUnits.innerText = totalOfUnits.value;
   SWA.value = sumOfAB.value / totalOfUnits.value;

   SWA.innerText = SWA.value;
})