document.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    const 
        btnOpenModal = document.querySelector("#btnOpenModal"),
        modal = document.querySelector('#modalBlock'),
        closeModal = document.querySelector('#closeModal');


    btnOpenModal.addEventListener('click', ()=>{
        modal.classList.add('d-block');  
    });

    closeModal.addEventListener('click', ()=>{
        modal.classList.remove('d-block'); 
    })
})