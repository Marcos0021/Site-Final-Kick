let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } 
        /*(o else serve para ele fazer a animação sempre)

        else {
            element.classList.remove("animate");
            
        }*/
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})
