const menuEl = document.getElementById('menu');
const lateralMenuEl = document.getElementById('lateral-menu');

menuEl.addEventListener('click', handleMenu);

function handleMenu() {
  const lateralMenuClassList = Array.from(lateralMenuEl.classList); // para quando clicar saber qual é a classe / tem um array pala listar todas as classe "Array.from"
  const isActive = lateralMenuClassList.find(el => el === 'active'); // verifica se o menu ja tem a classe ativa / "find" precura 
  
  if(isActive) {
    lateralMenuEl.classList.remove('active'); // se for actve ele romover a classe
    return;
  }
  
  lateralMenuEl.classList.add('active');
   
}
// agora era parte do css