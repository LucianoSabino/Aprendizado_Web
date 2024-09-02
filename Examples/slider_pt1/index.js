/*fazendo a conexão entre html e js */
const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');

/*add o vento quando clicar */       /*chamando uma função */
previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)

/*função para avançar o slider */
function onPreviousClick() {

    /*isso calcula o tamanho 
    que dizer que toda vez que eu diminoir as demeção do slider ele vai calcular altomaticamente  'offsetWidth'*/
    const sliderWidth = sliderEl.offsetWidth;

    /*atribuindo a ação */
    sliderEl.scrollLeft -= sliderWidth;

    /*toda vez que o usuario clicar ele calcula a tamanho da tela com 
    const sliderWidth = sliderEl.offsetWidth; e depois fai ação 
    sliderEl.scrollLeft -= sliderWidth;
    a mesma coisa acontece com o debaixo so que muda que add nao diminui += */
}

function onNextClick() {
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
}