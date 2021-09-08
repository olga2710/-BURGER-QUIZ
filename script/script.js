document.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    const 
        btnOpenModal = document.querySelector("#btnOpenModal"),
        modal = document.querySelector('#modalBlock'),
        closeModal = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#question'),
        formAnswers = document.querySelector('#formAnswers'),
        
        playTest=()=>{
            const renderQuistion = ()=>{
                questionTitle.textContent = 'Какого цвета бургер Вы хотите?'

                formAnswers.innerHTML= `
                <div class="answers-item d-flex flex-column">
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="./image/burger.png" alt="burger">
                    <span>Стандарт</span>
                    </label>
                </div>
                <div class="answers-item d-flex justify-content-center">
                    <input type="radio" id="answerItem2" name="answer" class="d-none">
                    <label for="answerItem2" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="./image/burgerBlack.png" alt="burger">
                    <span>Черный</span>
                    </label>`

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