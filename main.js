const navCurtain = document.querySelector('.curtain');

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navCurtain.classList.toggle('active');
}

