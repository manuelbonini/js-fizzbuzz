// variabili
var numero= 1;

for( i = 0 ; i < 100 ; i++) {
    if(numero % 3 == 0 && numero % 5 == 0) {
        console.log('FizzBuzz');
    }else if(numero % 3 == 0) {
        console.log('Fizz');
    }else if(numero % 5 == 0) {
        console.log('Buzz');
    }else {
        console.log(numero);
    }
    numero++;
}