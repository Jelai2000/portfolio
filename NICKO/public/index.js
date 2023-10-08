function changeBg() {
    var navbar = document.getElementById('navbar');
    var aboutImg = document.getElementById('aboutimg');
    var scrollValue = window.scrollY;
    console.log(scrollValue);

    if (scrollValue < 50) {
        navbar.classList.remove('bgColor');
    } else if (scrollValue >= 880) {
        aboutImg.style.borderTop = '10px solid #f54b64';
        aboutImg.style.borderBottom = '10px solid #f54b64';
        aboutImg.style.transition = 'all .3s ease-out'
    } else {
        navbar.classList.add('bgColor');
        aboutImg.style.borderTop = '0'; // Reset the border
        aboutImg.style.borderBottom = '0'; // Reset the border
    }
}

window.addEventListener('scroll', changeBg);





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




