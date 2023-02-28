
let menuicon=document.getElementById('menuicon');
let navbar=document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menuicon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content h2', {origin: 'top'});
ScrollReveal().reveal('.home-dp, .contact form, .projCont, .about-content', {origin: 'bottom'});
ScrollReveal().reveal('.SKILLS, .about-dp', {origin: 'left',delay:300});
ScrollReveal().reveal('.QUALI', {origin: 'right',delay:300});


const typed=new Typed('.multi',{
    strings:['FrontEnd Developer...', 'Coder...', 'Student...'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
});






