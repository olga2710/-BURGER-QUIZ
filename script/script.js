document.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    const 
        btnOpenModal = document.querySelector("#btnOpenModal"),
        modal = document.querySelector('#modalBlock'),
        closeModal = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#question'),
        formAnswers = document.querySelector('#formAnswers'),
        standartBurger = {
            name: 'Стандарт',
            img: './image/burger.png',
        },
        blackBurger = {
            name: 'Черный',
            img: './image/burgerBlack.png',
        }
        
        playTest=()=>{
            const renderQuistion = ()=>{
                questionTitle.textContent = 'Какого цвета бургер Вы хотите?'

                formAnswers.innerHTML= `
                <div class="answers-item d-flex flex-column">
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${standartBurger.img}" alt="burger">
                    <span>${standartBurger.name}</span>
                    </label>
                </div>
                <div class="answers-item d-flex justify-content-center">
                    <input type="radio" id="answerItem2" name="answer" class="d-none">
                    <label for="answerItem2" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${blackBurger.img}" alt="burger">
                    <span>${blackBurger.name}</span>
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