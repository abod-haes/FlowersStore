/*          show     menu     */
let search = document.querySelector("header .container .megamenu i");
search.addEventListener("click", () => {
    document.querySelector(".secound").classList.toggle("open");
})

window.onscroll = () => {
    let header = document.querySelector("header");
    if (scrollY > 180) {
        header.style.position = 'fixed';
        header.style.background = 'white';
    } else {
        header.style.position = 'relative';
        header.style.background = 'transparent';
    }
}