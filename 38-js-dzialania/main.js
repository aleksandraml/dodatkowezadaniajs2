function math(x, y) {
  let sum = x + y;
 if (sum > 0) {
    console.log('Wynik dodawania wynosi ' + sum);
  } else {
    console.log('Wynik jest nieprawidłowy!');
  }
  let multiply = x * y;
  if (multiply > 0) {
    console.log('Wynik mnożenia wynosi ' + multiply);
  } else {
    console.log('Wynik jest nieprawidłowy!');
  }

  let subtraction = x - y;
  if (subtraction > 0) {
    console.log('Wynik odejmowania wynosi ' + subtraction);
  } else {
    console.log('Wynik jest nieprawidłowy!');
  }

}


console.log(math(4, 5))
