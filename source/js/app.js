'use strict';

import openModal from './component/open-modal';
import closeModal from './component/close-modal';
import activeMenu from './component/active-menu';
import filter from './component/filter';
import closest from './component/closest';

(() => {
    document.addEventListener('DOMContentLoaded', ready);

    function ready() {
        svg4everybody();
        openModal.init();
        closeModal.init();
        activeMenu.init();
        filter.init();
    }
})();