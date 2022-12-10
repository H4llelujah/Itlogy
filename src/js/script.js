document.getElementById("promo-action").onclick = function (){
    document.getElementById('cars').scrollIntoView({behavior: "smooth"});
};
const buttons = document.querySelectorAll('.car-button');
buttons.forEach(item => {
    item.onclick = function (){
        document.getElementById('order').scrollIntoView({behavior: "smooth"});
    };
});

document.getElementById('order-action').onclick = function (){
    if (document.getElementById('name').value === ""){
        alert('Заполните поле имя!')
    }else if(document.getElementById('phone').value === ""){
        alert('Заполните поле номера телефона!')
    }else if(document.getElementById('car').value === ""){
        alert("Заполните поле с автомобилем!")
    }else {
        alert("Ваш заказ успешно обработан! Ожидайте, скоро с вами свяжется наш оператор!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.order-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".promo");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});