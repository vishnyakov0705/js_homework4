function pad(str, char, count, addToStart) 
{
  // кількість символів, які потрібно додати
  let paddingLength = Math.max(count - str.length, 0);
  let padding = '';

  // рядок з необхідною кількістю символів
  for (let i = 0; i < paddingLength; i++) 
  {
    padding += char;
  }

  // символи на початок або кінець рядка в залежності від аргументу addToStart
  if (addToStart) 
  {
    return padding + str;
  } else {
    return str + padding;
  }
}