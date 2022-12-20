document.querySelector('.c-hambg').addEventListener('click', function (e){
    e.preventDefault();
   // this.classList.toggle('is-active');
    if (this.classList.contains('is-active')){
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.body.classList.remove('body-active');
    }
    else{
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('body-active');
    }
})
let clock = document.querySelector('.clock');

function time(){
let date = new Date();
let hour = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
let minute = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();
let sec = date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds();

clock.innerHTML = `${hour}:${minute}:${sec}`
}

setInterval(time,1000);

