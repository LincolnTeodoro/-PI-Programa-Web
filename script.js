// Contador de caracteres da mensagem
const mensagem = document.getElementById('mensagem')
const contador = document.getElementById('contador')

// esconde no início
contador.style.display = 'none'

// Envio do formulário
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()

  alert('Mensagem enviada com sucesso!')

  // Limpa todos os campos do formulário
  this.reset()

  // Zera o contador e esconde após enviar
  contador.textContent = ''
  contador.style.display = 'none'
})

// Carrossel
const carousel = document.getElementById('carousel')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

nextBtn.onclick = () => {
  carousel.scrollBy({ left: 260, behavior: 'smooth' })
}

prevBtn.onclick = () => {
  carousel.scrollBy({ left: -260, behavior: 'smooth' })
}

mensagem.addEventListener('input', () => {
  const max = mensagem.getAttribute('maxlength')
  const atual = mensagem.value.length

  // Mostra o contador só quando o usuário digitar algo
  if (atual > 0) {
    contador.style.display = 'block'
  } else {
    contador.style.display = 'none'
  }

  contador.textContent = `${atual}/${max} Caracteres`
})
