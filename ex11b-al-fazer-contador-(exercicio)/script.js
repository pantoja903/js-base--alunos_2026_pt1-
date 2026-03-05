// Array de citações
const quotes = [
  " Na pressa, pensar vira atraso.– Gordo Lennon",
  "No mundo da escuridão qualquer faisca vira sol– Gordo da Vinci",
  "No mundo do bobo, só o bobo é bobo. – gordo einstein",
  "No mundo de surdo qualquer susurro é fofoca. – Gordo Socrates",
  "No mundo do perdido, qualquer caminho parece certo. – Gordo Aristoteles",
];

// Seleciona os elementos do DOM
const quoteDisplay = document.getElementById('quote');
const newQuoteButton = document.getElementById('newQuoteButton');

// Função para gerar uma citação aleatória
function generateRandomQuote() {
  // Gera um índice aleatório baseado no tamanho do array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Exibe a citação selecionada
  quoteDisplay.textContent = quotes[randomIndex];
}

// Adiciona evento de clique ao botão
newQuoteButton.addEventListener('click', generateRandomQuote);