const buttons = document.querySelectorAll('#sound-controls button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
     // Remove a classe 'button-active' de todos os botões
     buttons.forEach(btn => btn.classList.remove('button-active'));
     // Adiciona a classe 'button-active' ao botão clicado
     this.classList.add('button-active');
  });
 });