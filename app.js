// select sidebar-toggle, sidebar, and close-btn
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// add click el to sidebar-toggle,
toggleBtn.addEventListener('click', function () {
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar');
});

// add click el to close-btn
closeBtn.addEventListener('click', () => {
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar');
});
