searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.add('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    const _header_2 = document.querySelector(".header .header-2");
 
    searchForm.classList.remove('active');

    if(window.scrollY > 80) {
        _header_2.classList.add('active');
    }else {
        _header_2.classList.remove('active'); 
    }
}

window.onload = () => {
    const _header_2 = document.querySelector(".header .header-2");
    console.log(_header_2,2222); 
    if(window.scrollY > 80) {
        _header_2.classList.add('active');
    }else {
        _header_2.classList.remove('active'); 
    }
}

// Cart Product


