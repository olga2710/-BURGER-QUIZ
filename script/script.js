document.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    const 
        btnOpenModal = document.querySelector("#btnOpenModal"),
        modal = document.querySelector('#modalBlock'),
        closeModal = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#guestion'),
        
        
        playTest=()=>{
            const renderQuistion = ()=>{
                questionTitle.textContent = 'Какого цвета бургур Вы хотите?'

            };
            renderQuistion();

        };


    btnOpenModal.addEventListener('click', ()=>{
        modal.classList.add('d-block');  
        playTest();
    });

    closeModal.addEventListener('click', ()=>{
        modal.classList.remove('d-block'); 
    })
})