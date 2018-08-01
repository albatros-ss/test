'use strict';

const modalClose = (function () {
    const modal = document.getElementById('modal'),
        btn = document.getElementById('modal__btn'),
        form = document.getElementById('form');

    function closeModalWindows(event) {
        let $this = event.target
        if (!$this.closest(".modal-box") || $this == btn) {
            modal.classList.remove("modal_active");
            form.reset();
        }
    }

    return {
        init: () => modal.addEventListener('click', closeModalWindows)
    };
})();
export default modalClose;