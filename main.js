window.addEventListener('DOMContentLoaded', init);


function init(e){
    const [slideA, slideB] = [document.querySelector('.slide_a'), document.querySelector('.slide_b')];

    const [btnA, btnB] = [document.querySelector('.btns').firstElementChild, document.querySelector('.btns').lastElementChild]


    btnA.addEventListener('click', function(e){
        slideA.classList.remove('hide');
        slideB.classList.add('hide')
    })

    btnB.addEventListener('click', function(e){
        slideB.classList.remove('hide');
        slideA.classList.add('hide');
    })

}