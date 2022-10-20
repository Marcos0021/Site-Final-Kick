var btn = document.getElementById("button");
var lista = document.getElementById("menu")

btn.addEventListener('click', function() {
    if (this.classList.contains("mobile-active")) {
        this.classList.remove("mobile-active")
        this.classList.add('not-active')
        lista.style.display = 'none'

    } else {
        this.classList.add("mobile-active")
        lista.style.display = 'flex'
        this.classList.remove('not-active')
    }
});
