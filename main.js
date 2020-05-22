window.addEventListener('DOMContentLoaded', init);


function init(e){

    const [slideA, slideB] = [document.querySelector('.slide_a'), document.querySelector('.slide_b')];
    const [btnA, btnB, btnC, btnD] = [document.querySelector('#btn-a'), document.querySelector('#btn-b'), document.querySelector('#btn-c'), document.querySelector('#btn-d')];
    
    btnA.addEventListener('click', previous);
    btnB.addEventListener('click', next);
    btnC.addEventListener('click', previous);
    btnD.addEventListener('click', next);


    function next(e){
        slideA.classList.add('hide');
        slideB.classList.remove('hide');
    }

    function previous(e){
        slideB.classList.add('hide');
        slideA.classList.remove('hide');
    }
}