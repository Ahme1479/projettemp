
 const SIZE = 565;
window.addEventListener('resize', (el) =>{
    const width = window.innerWidth;
    if(width < SIZE){
        document
        .querySelector('footer') &&
        document
        .querySelector('footer')
        .querySelector('.footer--body_nav-links ')
        .querySelectorAll('button').forEach((item) =>{
            item.removeAttribute('disabled')
        });
        document
        .querySelector('footer') &&
        document
        .querySelector('footer')
        .querySelectorAll('.accordion-collapse').forEach((item) =>{
            item.classList.remove('show')
        })
    }else{
        document
        .querySelector('footer') &&
        document
        .querySelector('footer')
        .querySelector('.footer--body_nav-links ')
        .querySelectorAll('button').forEach((item) =>{
            item.setAttribute('disabled', true)
        });
        document
    .querySelector('footer') &&
        document
        .querySelector('footer')
        .querySelectorAll('.accordion-collapse').forEach((item) =>{
            item.classList.add('show')
        })
    }
})
if(window.screen.width < SIZE){
    document
    .querySelector('footer') &&
    document
        .querySelector('footer')
        .querySelector('.footer--body_nav-links ')
        .querySelectorAll('button').forEach((item) =>{
            item.removeAttribute('disabled')
        });
        document
    .querySelector('footer') &&
        document
        .querySelector('footer')
        .querySelectorAll('.accordion-collapse').forEach((item) =>{
            item.classList.remove('show')
        })
}else{
    document
    .querySelector('footer') &&
    document
    .querySelector('footer')
    .querySelector('.footer--body_nav-links ')
    .querySelectorAll('button').forEach((item) =>{
        item.setAttribute('disabled', true)
    });
    document
    .querySelector('footer') &&
    document
    .querySelector('footer')
    .querySelectorAll('.accordion-collapse').forEach((item) =>{
        item.classList.add('show')
    })
}