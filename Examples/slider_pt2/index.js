/*fazendo a conexão entre html e js */
const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');

let interval = undefined;
let timeout = undefined;

/*add o vento quando clicar */       /*chamando uma função */
previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)

autoScroll(); /*chamada para função */

/*função para avançar o slider */
function onPreviousClick() {

    /*isso calcula o tamanho 
    que dizer que toda vez que eu diminoir as demeção do slider ele vai calcular altomaticamente  'offsetWidth'*/
    const sliderWidth = sliderEl.offsetWidth;

    /*atribuindo a ação */
    sliderEl.scrollLeft -= sliderWidth;
    handSliderClick()

    /*toda vez que o usuario clicar ele calcula a tamanho da tela com 
    const sliderWidth = sliderEl.offsetWidth; e depois fai ação 
    sliderEl.scrollLeft -= sliderWidth;
    a mesma coisa acontece com o debaixo so que muda que add nao diminui += */
}

function onNextClick() {
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth;
    handSliderClick()
}


/* isso quando o usuario clicar ele da um intevalo i depois de um tempo ele volta */
function handSliderClick() {
    clearInterval(timeout)
    clearInterval(interval)
    interval = undefined
    timeout = setTimeout( () => {
        autoScroll();
    },10000/* deffinição de tempo*/)
}

/* é preciso saber a possição dos slider para ele ternar ao inicio
para saber a posição: 'console.log(slider.acrollLeft/sliderWidth)' 
que foi usado "const selectedImage = (sliderEl.scrollLeft/sliderWidth) + 1;"*/

function autoScroll() {
    if(interval) return;

    /*uma ero function*/
    interval = setInterval( () => {
        const sliderWidth = sliderEl.offsetWidth;
        const numberOfImages = sliderEl.childElementCount; /* "childElementCount" ele da o munero de elemento filho */
        const selectedImage = (sliderEl.scrollLeft/sliderWidth) + 1;
        
        //se for a ultima => volta para 
        if(numberOfImages === selectedImage) {
            sliderEl.scrollLeft = 0
            return
        }

        // se não
        sliderEl.scrollLeft += sliderWidth;
    },3000 /*tempo que o slider vai demora para passa*/);
}