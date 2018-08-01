'use strict';

const filter = (function () {
    const parent = document.getElementById('dashboard-head__sort'),
        item = document.querySelectorAll('.dashboard-head__date');

    item[0].classList.add("dashboard-head__date_active");

    function activeMenuElement(event) {
        let $this = event.target;

        if ($this.classList.contains('dashboard-head__date_active') || !$this.classList.contains('dashboard-head__date')) return;
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('dashboard-head__date_active');
        }
        $this.classList.add('dashboard-head__date_active');
    }

    return {
        init: () => parent.addEventListener('click', activeMenuElement)
    };
})();
export default filter;