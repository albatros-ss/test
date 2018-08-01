'use strict';

const modal = (function () {
    const modal = document.getElementById('modal'),
        btn = document.getElementById('dashboard__btn');

    function openModalWindows() {
        modal.classList.toggle("modal_active");
    }

    return {
        init: () => btn.addEventListener('click', openModalWindows)
    };
})();
export default modal;