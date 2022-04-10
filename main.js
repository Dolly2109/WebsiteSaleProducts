    
    alert("Wellcome to Dolly Shop\nI wish you a good day!\n"+ Date("today"));

    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

