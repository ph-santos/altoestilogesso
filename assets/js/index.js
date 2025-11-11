const chk = document.getElementById('chk')
const main = document.getElementById('main')

chk.addEventListener('change', () => {
  main.classList.toggle('dark')
})
