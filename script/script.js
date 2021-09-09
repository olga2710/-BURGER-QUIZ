document.addEventListener('DOMContentLoaded',()=>{
    'use strict';
    const 
        btnOpenModal = document.querySelector("#btnOpenModal"),
        modal = document.querySelector('#modalBlock'),
        closeModal = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#question'),
        formAnswers = document.querySelector('#formAnswers'),
        nextBtn = document.querySelector('#next'),
        prevBtn = document.querySelector('#prev'),
        sendBtn = document.querySelector('#send'),
        questions = [
            {
                question: "Какого цвета бургер?",
                answers: [
                    {
                        name: 'Стандарт',
                        img: './image/burger.png'
                    },
                    {
                        name: 'Черный',
                        img: './image/burgerBlack.png'
                    }
                ],
                type: 'radio'
            },
            {
                question: "Из какого мяса котлета?",
                answers: [
                    {
                        name: 'Курица',
                        img: './image/chickenMeat.png'
                    },
                    {
                        name: 'Говядина',
                        img: './image/beefMeat.png'
                    },
                    {
                        name: 'Свинина',
                        img: './image/porkMeat.png'
                    }
                ],
                type: 'radio'
            },
            {
                question: "Дополнительные ингредиенты?",
                answers: [
                    {
                        name: 'Помидор',
                        img: './image/tomato.png'
                    },
                    {
                        name: 'Огурец',
                        img: './image/cucumber.png'
                    },
                    {
                        name: 'Салат',
                        img: './image/salad.png'
                    },
                    {
                        name: 'Лук',
                        img: './image/onion.png'
                    }
                ],
                type: 'checkbox'
            },
            {
                question: "Добавить соус?",
                answers: [
                    {
                        name: 'Чесночный',
                        img: './image/sauce1.png'
                    },
                    {
                        name: 'Томатный',
                        img: './image/sauce2.png'
                    },
                    {
                        name: 'Горчичный',
                        img: './image/sauce3.png'
                    }
                ],
                type: 'radio'
            }
        ],
        
        playTest=()=>{
            let indexQuestion =0;
            const renderAnswers =(i) =>{
                questions[i].answers.forEach((answer )=>{
                    const answerItem = document.createElement('div');
                    answerItem.classList.add('answers-item','d-flex', 'flex-column');
                    answerItem.innerHTML= `
                    <input type="${questions[i].type}" id="${answer.name}" name="answer" class="d-none">
                    <label for="${answer.name}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${answer.img}" alt="burger">
                    <span>${answer.name}</span>
                    </label> 
                    `;
                    formAnswers.appendChild(answerItem);
                   
                }
            )};
            const renderQuistion = (i)=>{ 
                questionTitle.textContent = `${questions[i].question}`;
                renderAnswers(i);

            };
            renderQuistion(indexQuestion);

            const disablePrevBtn=()=>{
            if(indexQuestion<1){
                prevBtn.classList.add('d-none')
            } else {
                prevBtn.classList.remove('d-none')
            };};

            const disableNextBtn=()=>{
                if (indexQuestion==(questions.length-1)){
                    nextBtn.classList.add('d-none');
                    sendBtn.classList.remove('d-none');
                } else {
                    nextBtn.classList.remove('d-none');
                    sendBtn.classList.add('d-none');

                }
            };
            
            disablePrevBtn();
            disableNextBtn();


            nextBtn.addEventListener('click', ()=>{
                clearModal();
                indexQuestion++;
                disablePrevBtn();
                disableNextBtn();
                renderQuistion(indexQuestion);

            });

            prevBtn.addEventListener('click', ()=>{
                clearModal();
                indexQuestion--;
                disablePrevBtn();
                disableNextBtn();
                renderQuistion(indexQuestion);


            });
        },
        clearModal = ()=>{
            formAnswers.innerHTML='';
            questionTitle.textContent = ``;
        }


    btnOpenModal.addEventListener('click', ()=>{
        modal.classList.add('d-block');  
        playTest();
    });

    closeModal.addEventListener('click', ()=>{
        modal.classList.remove('d-block'); 
        clearModal();
    })
})