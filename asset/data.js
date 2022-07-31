function callRegisterForm(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _adb = document.querySelector('.modal'); // Lỗi khai báo 
    let modal_layout = document.querySelector('.modal');
    var modal_login_form = document.querySelector('#login-form');
    var modal_register_form = document.querySelector('#register-form');

    modal_layout.style.display = "flex";
    modal_register_form.style.display = "block";
    modal_login_form.style.display = "none";
}
function callLoginForm(){
    let modal_layout = document.querySelector('.modal');
    var modal_login_form = document.querySelector('#login-form');
    var modal_register_form = document.querySelector('#register-form');

    modal_layout.style.display = "flex";
    modal_register_form.style.display = "none";
    modal_login_form.style.display = "block";
}


function hideForm(){
    let modal_layout = document.querySelector('#modal__overlay');
    let modal = document.querySelector('.modal');
    
    modal_layout.onclick = function(){
        modal.style.display = "none";
    }

}



function mobileSearchSide(){
    let search = document.querySelector('.search__bar-on-mobile');
    if(search.style.display === "flex"){
        search.style.display = "none";
    }
    else{
        search.style.display = "flex";
    }
    
}
function hideSearchForNotify(){
    let search = document.querySelector('.search__bar-on-mobile');
    let notify_active = document.querySelector('.search__icon--cart');
    
    notify_active.onmouseover = ()=>{
        search.style.zIndex = "-1";
    }
    notify_active.onmouseout = ()=>{
        search.style.zIndex = "3";
    }
}

function tabletCategory(){
    let a = document.querySelector('.tablet-category__overlay');
    let b = document.querySelector('#times-tablet');
    let c = document.querySelector('#category-mobile-btn');
    
    function tabletCategoryShow(){
        let tabletCategory = document.querySelector('.tablet-category');
        tabletCategory.style.display = "block";
    }
    function tabletCategoryHide(){
        let tabletCategory = document.querySelector('.tablet-category');
        tabletCategory.style.display = "none";
    }
    //Hide 
    a.onclick = function (){
        tabletCategoryHide();
    }
    b.addEventListener("click",function(){
        tabletCategoryHide();
    })
    
    //Show
    c.onclick = function(){
        tabletCategoryShow();
    }
}


hideSearchForNotify();
tabletCategory();
hideForm();