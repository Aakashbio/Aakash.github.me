var nav = document.querySelector('#nav');

var contain = document.querySelector('.container');

contain.addEventListener('click',function(){
    nep();
});
function nep(){
    nav.classList.toggle('changew');
    contain.classList.toggle('change');
}