



const navLinks = document.querySelectorAll('.link a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});





// function changeBg(){
//     var navbar = document.getElementById('navbar');
//     var aboutImg = document.getElementById('aboutimg');
//     var scrollValue = window.scrollY;
//     console.log(scrollValue);

//     if(scrollValue < 50){
//         navbar.classList.remove('bgColor');

//     }else if(scrollValue >= 880){
//         aboutImg.style.borderTop('10px solid #f54b64');
//         aboutImg.style.borderBottom('10px solid #f54b64');
//     }
//     else{
//         navbar.classList.add('bgColor');
//     }

// }

// window.addEventListener('scroll',changeBg);



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      
      entry.target.classList.remove('show');
    }


  });
});

const homapage = document.querySelectorAll('.hiddenhome');
homapage.forEach((el) => observer.observe(el));



const hiddenElementss = document.querySelectorAll('.hiddenhomeright');
hiddenElementss.forEach((el) => observer.observe(el));

const hiddenabout = document.querySelectorAll('.hiddenabout');
hiddenabout.forEach((el) => observer.observe(el));

const hiddenskill = document.querySelectorAll('.hiddenskill');
hiddenskill.forEach((el) => observer.observe(el));

const hiddenproj = document.querySelectorAll('.hiddenproj');
hiddenproj.forEach((el) => observer.observe(el));

const hiddenprojL = document.querySelectorAll('.hiddenprojL');
hiddenprojL.forEach((el) => observer.observe(el));
const hiddenprojR = document.querySelectorAll('.hiddenprojR');
hiddenprojR.forEach((el) => observer.observe(el));




const hiddenprojects = document.querySelectorAll('.hiddenprojects');
hiddenprojects.forEach((el) => observer.observe(el));
