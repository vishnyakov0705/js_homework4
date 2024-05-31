function checkProTheory(count) 
{
  let evenCount = 0;
  let oddCount = 0;

  // випадкові числа та підраховуємо кількість парних та непарних
  for (let i = 0; i < count; i++) 
  {
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNumber % 2 === 0) 
    {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // відсоткове співвідношення
  let evenPercentage = (evenCount / count) * 100;
  let oddPercentage = (oddCount / count) * 100;

  // виводимо інформацію
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Не парних чисел: ${oddCount}`);
  console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
  console.log(`Відсоток не парних чисел: ${oddPercentage.toFixed(2)}%`);
}

// приклад:
checkProTheory(1000);