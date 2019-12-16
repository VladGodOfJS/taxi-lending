
document.querySelector('.header__burger').onclick = function () {
    this.classList.toggle('active');
    let menu = document.querySelector('.header__items');
    menu.classList.toggle('active');


}