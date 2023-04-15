const menu = document.querySelector('.menu-lines');
const menuContent = document.querySelector('.menu');
const span = document.querySelectorAll('.menu-lines span')

// window.addEventListener('resize', () => {
//     menuContent.style.display = window.innerWidth >= 800 ? 'block' : 'none';
// })


// const ul = document.querySelector('.menu ul');
menu.addEventListener('click', () => {

    span.forEach(span => {
        if(span.classList.contains('effects')){
            span.classList.remove('effects');
            // menuContent.style.display = 'none'
            span.style.backgroundColor = '#cdc';
            return;
        }
        span.classList.add('effects');
        // menuContent.style.display = 'block'
        span.style.backgroundColor = '#333';
    });
})

function positionPage() {
    document.getElementById('close-menu').checked = false;
    if(window.innerWidth >= 800) return;
    // menuContent.style.display = 'none'
    span.forEach(element => {
        element.style.backgroundColor = '#cdc';
        element.classList.remove('effects');
    })
}