
let menuicon=document.getElementById('menuicon');
let navbar=document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

function myalert(){
    Toastify({
        text: "This project is still in development!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#ff914d"
        },
        onClick: function(){} 
      }).showToast();
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
ScrollReveal().reveal('.SKILLS, .about-dp, .footer-social', {origin: 'left',delay:300});
ScrollReveal().reveal('.QUALI', {origin: 'right',delay:300});


const typed=new Typed('.multi',{
    strings:['FrontEnd Developer...', 'Programmer...', 'Student...'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
});


function sendMail(){
    let param={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value,
    };


    if(param.name!="" && param.email!="" && param.message!="" && param.number!=""){
    let serviceID="service_jhf61wa";
    let templateID="template_0ln1l0f";
    emailjs.send(serviceID,templateID,param).then(res=>{
        Toastify({
            text: "Your Message was sent Succesfully!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#ff914d"
            },
            onClick: function(){} 
          }).showToast();
        document.getElementById('name').value=''
        document.getElementById('email').value=''
        document.getElementById('number').value=''
        document.getElementById('message').value=''
        res.preventDefault()
    }).catch((err)=> console.log(err));
}
    else{
        Toastify({
            text: "Please complete the form before submitting!!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#ff914d"
            },
            onClick: function(){} 
          }).showToast();
    }
}



