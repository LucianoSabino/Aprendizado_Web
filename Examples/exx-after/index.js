const items = Array.from(document.getElementsByClassName("item"));

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



