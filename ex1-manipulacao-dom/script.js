// Selecionando o botão via JS (Vamos usar ID "MyButton")
const button = document.getElementById('myButton');
// const button = document.querySelector('#myButton');

// Selecionando o botão via JS (Vamos usar ID "MyText")
const text = document.getElementById('myText');
// const text = document.getElementsByClassName('p');

// Adicionando um "ouvinte" de evento para disparar uma ação
button.addEventListener('click', () => {
  // Troca o texto para "Olá, Mundo!"
  text.textContent = 'Olá, Mundo!';
});
