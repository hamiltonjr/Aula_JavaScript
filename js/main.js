/* código básico 
// popup
alert('Olá!');

// variáveis
var nome = 'Hamilton';
alert('Olá ' + nome);
console.log('Olá' + nome);

var idade = prompt('Idade');
alert('Idade: ' + idade);
console.log('Idade: ' + idade);

// declaração de variável
var counter;

// loop while
counter = 0;
alert('Contando até 10 com while...');
console.log('Contando até 10 com while...');
while (counter < 10) {
    counter++; 
    console.log(counter);
}

// loop for
alert('Contando até 10 com for...');
console.log('Contando até 10 com for...');
for (counter = 0; counter < 10; counter++) {
    console.log(counter + 1);
}

// datas
var d = new Date();
alert('Hoje é ' + 
    d.getDate() + '/' +
    (d.getMonth() + 1) + '/' +
    d.getFullYear());

// função que soma dois números
function soma(n1, n2) {
    return n1 + n2;
}

alert('2 + 3 = ' + soma(2, 3));

*/

function clicou(elem) {
    elem.innerHTML = "Obrigado por clicar!";
}