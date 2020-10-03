document.querySelectorAll('.aside-filter__accordion-title').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode
        item.classList.toggle('aside-accordion--active')
        console.log(parent);

        if (parent.querySelector('.aside-filter__accordion-content')) {
        parent.querySelector('.aside-filter__accordion-content')
            .classList.toggle('aside-accordion-content--active');

        }

        if (parent.querySelector('.js-irs-0')) {
            parent.querySelector('.js-irs-0').classList.toggle('js-irs-0--active')
        }


    })
})

document.querySelectorAll('.product-item__favorite').forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.classList.toggle('product-item__favorite--active')
    })

})

console.log( document.querySelector('.catalog__filter-btngrid'));
document.querySelector('.catalog__filter-btngrid').addEventListener('click', function() {
    document.querySelector('.catalog__filter-btnline').classList.remove('catalog__filter-btn--active')
    this.classList.add('catalog__filter-btn--active')
})

document.querySelector('.catalog__filter-btnline').addEventListener('click', function() {
    document.querySelector('.catalog__filter-btngrid').classList.remove('catalog__filter-btn--active')
    this.classList.add('catalog__filter-btn--active')
})

$(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        max_prefix: "+",
    });
});





