const menuToggle = document.getElementById('header_menu_btn')
const menu = document.getElementById('barNavigation')

if(menuToggle && menu){
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open')
    })

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
}