const button = document.getElementById('buttonId');
const Div= document.getElementById('output');
let contadorNumero = 0; 

button.addEventListener('click', function (event) {
      contadorNumero++;
      Div.textContent = `Você clicou ${contadorNumero} vezes`;
});