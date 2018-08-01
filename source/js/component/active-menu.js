'use strict';

const menu = (function () {
    const nav = document.getElementById('nav'),
        item = document.querySelectorAll('.nav__item');

    item[0].classList.add("nav__item_active");

    function activeMenuElement(event) {
        let $this = event.target,
            itemParent = $this.closest('.nav__item');

        if (itemParent.classList.contains('nav__item_active')) return;
        for (let i = 0; i < item.length; i++) {
            item[i]
                .closest('.nav__item')
                .classList.remove('nav__item_active');
        }
        itemParent.classList.add('nav__item_active');
    }

    return {
        init: () => nav.addEventListener('click', activeMenuElement)
    };
})();
export default menu;