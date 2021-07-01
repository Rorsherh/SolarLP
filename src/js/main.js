document.addEventListener('DOMContentLoaded', () => {
    const tabsBox = document.querySelector('.info__tabs-list');
    const tabs = tabsBox.querySelectorAll('.info__tab');
    const tabContent = document.querySelectorAll('.info__tab-content-item');

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.style.display = 'none';
        });

        tabs.forEach((item) => {
            item.classList.remove('info__tab--active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';

        tabs[i].classList.add('info__tab--active');
    }

    hideTabContent();
    showTabContent();

    tabsBox.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('info__tab')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});