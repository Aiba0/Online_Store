const tab = document.querySelectorAll('.tab'),
      tabContents = document.querySelectorAll('.tabs-content');

tab.forEach(elem => elem.addEventListener('click', (event) => {
    event.preventDefault() 
    const element = event.target;
    const parent = element.parentElement;
    let childIds = [];

    [...parent.children].forEach(item => {
        item.classList.remove('tab--active')
        childIds.push(item.getAttribute('href'))

    })

    element.classList.add('tab--active');
    
    tabContents.forEach(el => {
         if (childIds.includes('#' + el.getAttribute('id'))) el.classList.remove('tabs-content--active')
    })

    document.querySelector(element.getAttribute('href'))
        .classList.add('tabs-content--active');
}))


