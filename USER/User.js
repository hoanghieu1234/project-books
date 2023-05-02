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

// Thư viện swipper
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// cart

let btn_add = document.querySelectorAll("#btn-add");

let product = [
  {
    name:'book-1',
    tag: 'book-1',
    price:'$15.00',
    inCart: 0
  },
  {
    name:'book-2',
    tag: 'book-2',
    price:'$25.00',
    inCart: 0
  },
  {
    name:'book-3',
    tag: 'book-3',
    price:'$35.00',
    inCart: 0
  },
  {
    name:'book-4',
    tag: 'book-4',
    price:'$45.00',
    inCart: 0
  },
  {
    name:'book-5',
    tag: 'book-5',
    price:'$45.00',
    inCart: 0
  },
  {
    name:'book-6',
    tag: 'book-6',
    price:'$45.00',
    inCart: 0
  },
  {
    name:'book-7',
    tag: 'book-7',
    price:'$45.00',
    inCart: 0
  },
  {
    name:'book-8',
    tag: 'book-8',
    price:'$45.00',
    inCart: 0
  },
  {
    name:'book-9',
    tag: 'book-9',
    price:'$45.00',
    inCart: 0
  },
  {
    name:'book-10',
    tag: 'book-10',
    price:'$45.00',
    inCart: 0
  },
]

for(let i = 0; i < btn_add.length; i++) {
    btn_add[i].addEventListener("click", () =>{
        cartNumber(product[i]);
    })
}

// Load lại trang sản phẩm không mất
function onLoadCartNumber() {
    let productNumber = localStorage.getItem("cartNumbers"); 

    if (productNumber) {
      document.querySelector(".shopping .quantity").textContent = productNumber;
    }
}

// Thêm sản phẩm, sản phẩm sẻ nhảy lên icon card
function cartNumber(product) {

    console.log(product);
    let productNumber = localStorage.getItem("cartNumbers");

    productNumber = parseInt(productNumber);
    
    if(productNumber) {
      localStorage.setItem("cartNumbers",productNumber + 1);
      document.querySelector(".shopping .quantity").textContent = productNumber + 1;
    }else {
      localStorage.setItem("cartNumbers",1);
      document.querySelector(".shopping .quantity").textContent = 1;
    }

    setItems(product);
}

function setItems() {
  let cartItem = localStorage.getItem("productsInCart");
  cartItem = JSON.parse(cartItem);

  if(cartItem != null) {
 
      if (cartItem[product.tag] == undefined) {
        cartItem = {
            ...cartItem,
            [product.tag]: product
        }
      }
      cartItem[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItem = {
      [product.tag]: product
    }
  }

  localStorage.setItem("productsInCart",JSON.stringify(cartItem));
}

onLoadCartNumber();








