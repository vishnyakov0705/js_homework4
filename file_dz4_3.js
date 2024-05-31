function isNaN(val) 
{
  // Перевіряємо, чи val дорівнює самому собі.
  // NaN - єдине значення у JS, яке не дорівнює самому собі.
  return val !== val;
}

console.log(isNaN(NaN));        
console.log(isNaN(123));        
console.log(isNaN('123'));