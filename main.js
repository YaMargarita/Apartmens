/* Фильтр на мобильных устройствах */
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".sidebar");
const menyIcon = document.querySelector(".menu-icon");

sidebarToggleBtn.onclick = function () {
    menyIcon.classList.toggle("menu-icon-active");
    menuIcon.classList.toggle("sidebar--mobile-active");
}

/* Показать еще карточки */
const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");
btnShowMoreCards.addEventListener('click', function() {
    hiddenCards.forEach(function (item){
        item.classList.remove("card-link--hidden");
    })
})

/* скрыть/показать виджеты */
const widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget){
    widget.addEventListener("click", function (e){
        let target = e.target;
        if (target.classList.contains('widget__title')) {
            target.classList.toggle('widget__title--active');
            target.nextElementSibling.classList.toggle("widget__body--hidden");
        }
    })
})

/* Близость к метро */
const btn_metro = document.querySelector("#location-05");
const buttonsMetroTop = document.querySelectorAll("[data-losation-param]");
btn_metro.addEventListener("change", function (){
    if(btn_metro.checked){
        buttonsMetroTop.forEach(function(btn){
            btn.checked = false;
        });
    }
})

buttonsMetroTop.forEach(function(btn){
    btn.addEventListener('change',function (){
        btn_metro.checked = false;
    })
});


/* Показать еще элементы */
const showMoreOptions = document.querySelector(".widget__show-hidden");
const hiddenCheckBoxes = document.querySelectorAll(".checkbox__hidden");
showMoreOptions.addEventListener("click", function (e){
    e.preventDefault();
    hiddenCheckBoxes.forEach(function(item){
        if(item.classList.contains("checkbox__hidden")){
            item.classList.remove("checkbox__hidden");
            showMoreOptions.innerHTML = "Скрыть элементы";
        } else {
            item.classList.add("checkbox__hidden");
            showMoreOptions.innerHTML = "Показать ещe";
        }
    });
});

// Сбросить все фильтры
const resetBtn = document.querySelector(".reset-btn");
const inputsAll = document.querySelectorAll("input");
resetBtn.addEventListener('click', function (e){
    e.preventDefault();
    inputsAll.forEach(function (item){
        item.checked = false;
    })
})