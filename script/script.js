document.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    const 
        btnOpenModal = document.querySelector("#btnOpenModal"),
        modal = document.querySelector('#modalBlock');


    btnOpenModal.addEventListener('click', ()=>{
        modal.classList.add('d-block'); 
    
})
})