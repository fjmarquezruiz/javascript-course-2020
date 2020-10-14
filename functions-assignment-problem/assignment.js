// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello('Pepe');
const DEFAULT_PHRASE = 'Te saludo';

const sayHello = (name) => {
  console.log('Hello '+name);
};

const sayHello2 = (name, phrase = DEFAULT_PHRASE) => {
  console.log(phrase+' '+name);
};

const sayHello3 = () => {
  const phrase = 'Hola';
  const name = 'Raimunda';
  console.log(phrase+' '+name);
};

const sayHello4 = () => {
  const phrase = 'Hi';
  const name = 'Raimond';
  return phrase+' '+name;
};

const checkInput = (cadenasHandler,...cadenas) => {
  let sum = '';
  let isEmpty = false;
  for (const iterator of cadenas) {
    sum += iterator;
  }
  if (sum === '') {
    console.log(sum);
    isEmpty = true;
  } else {
    console.log(sum);
    isEmpty = false;
  }
  if (isEmpty) {
    cadenasHandler();
  }
  
};

const checkCadenas = () => {
  console.log('Cadena vacia!!!!');
};

sayHello('Max');
sayHello2('Maximiliam','Holita');
sayHello3();
console.log(sayHello4());
sayHello2('Alfonsa');

checkInput(checkCadenas,'Lorem','ipsum','dolor');
checkInput(checkCadenas,'');