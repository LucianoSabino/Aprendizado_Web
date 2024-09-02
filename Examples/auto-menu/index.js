const items = Array.from(document.getElementsByClassName("item"));

let interval = undefined;
let timeout = undefined;

autoScroll()

items.forEach((item) => {
    item.addEventListener("click", onItemClick);
    //item.removeEventListener("click", ofItemclick);
});

function onItemClick(event) {
    const selectedAttribute = event.target.getAttribute("data");

    items.forEach((item) => {
        const itemAttribute = item.getAttribute("data")
        if (itemAttribute === selectedAttribute) {
            const cl = item.classList.add("active");
            
            return;
        } 
        
         
    });
}

function handSliderClick() {
    clearInterval(timeout)
    clearInterval(interval)
    interval = undefined
    timeout = setTimeout( () => {
        autoScroll()
    },1000)
}

function autoScroll() {
    if(interval) return;

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
    },1000 /*tempo que o slider vai demora para passa*/);
    
}

