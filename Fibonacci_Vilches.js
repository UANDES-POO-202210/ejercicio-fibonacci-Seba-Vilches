function calculator(number){
    var n = 1, m = 0, aux;
    while (number >= 0){
      aux = n;
      n = n + m;
      m = aux;
      number-=1;
    }
    return m;
  }

const fs = require('fs');
var data;

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});
  

console.log(calculator(data))
console.log(calculator(6))