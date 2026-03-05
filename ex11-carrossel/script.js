// Seleciona todos os slides e os botões de navegação
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0; // Índice do slide atual
let autoSlideInterval; // Variável para armazenar o intervalo de transição automática

// Função para exibir um slide específico
function showSlide(index) {
  slides.forEach((slide, i) => {
    // Adiciona a classe "active" ao slide atual e remove dos outros
    slide.classList.toggle('active', i === index);
  });
}

// Função para avançar para o próximo slide
function nextSlide() {
  // calcula o índice do próximo slide
  currentSlide = (currentSlide + 1) % slides.length;
  // Exibe o próximo slide
  showSlide(currentSlide);
}

// Função para voltar ao slide anterior
function prevSlide() {
  // calcula o índice do slide anterior
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  // Exibe o slide anterior
  showSlide(currentSlide);
}

// Função para iniciar a transição automática de slides
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos
}

// Função para parar a transição automática de slides
function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Limpa o intervalo
}

// Adiciona um evento de clique ao botão "Anterior"
prevButton.addEventListener('click', () => {
  prevSlide(); // Exibe o slide anterior
  stopAutoSlide(); // Pausa a transição automática
  startAutoSlide(); // Reinicia a transição automática
});


// Adiciona um evento de clique ao botão "Próximo"
nextButton.addEventListener('click', () => {
  nextSlide(); // Exibe o próximo slide
  stopAutoSlide(); // Pausa a transição automática
  startAutoSlide(); // Reinicia a transição automática
});

// Inicializa o carrossel com a primeira imagem visível
showSlide(currentSlide);
startAutoSlide(); // Inicia a transição automática de slides

