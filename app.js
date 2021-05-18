const navbar = document.querySelector('.wrapper');
const first = document.querySelector('.first')
const second  = document.querySelector('.second')
const third  = document.querySelector('.third')
const mobileNavbar = document.querySelector('.mobileNavbar')

const body = document.querySelector('body')
let navbarStatus = false;

navbar.addEventListener('click',()=>{
    if(navbarStatus == false){
        first.style.transform = 'translate(0px,11px) rotate(45deg)';
        second.style.opacity= '0'
        third.style.transform = 'translate(0px,-11px) rotate(-45deg)';
        navbarStatus = true;
        body.style.overflow="hidden"
        mobileNavbar.style.display="flex"
    }else{
        first.style.transform = 'none';
        second.style.opacity= '100%'
        third.style.transform = 'none';
        navbarStatus = false;
        mobileNavbar.style.display="none"
        body.style.overflow="scroll"
    }
})