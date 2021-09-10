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
        OkBtn = document.querySelector('#ok'),
        //Объект с вопросами и ответами
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
        //функция начала тестирования
        playTest=()=>{

            //Объект ответов пользователей
            const finalAnswers=[];

            let indexQuestion =0;

            //функция перебора масива с вопросаи и ответами и выводит их на экран
            const renderAnswers =(i) =>{
                questions[i].answers.forEach((answer )=>{
                    const answerItem = document.createElement('div');
                    answerItem.classList.add('answers-item','d-flex', 'justify-content-center');
                    answerItem.innerHTML= `
                    <input type="${questions[i].type}" id="${answer.name}" name="answer" class="d-none" value="${answer.name}"> 
                    <label for="${answer.name}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${answer.img}" alt="burger">
                    <span>${answer.name}</span>
                    </label> 
                    `;
                    formAnswers.appendChild(answerItem);
                   
                }
            )};


            //функции проверки последней и первой кнопки вопросов    
            const disablePrevBtn=()=>{
                if(indexQuestion<1){
                    prevBtn.classList.add('d-none')
                } else {
                    prevBtn.classList.remove('d-none')
                };};
    
             const disableNextBtn=()=>{
                 switch(indexQuestion){
                     case questions.length-1:
                            nextBtn.classList.add('d-none');
                            sendBtn.classList.remove('d-none');
                            OkBtn.classList.add('d-none');
                     break;

                    case questions.length:
                            nextBtn.classList.add('d-none');
                            sendBtn.classList.add('d-none');
                            prevBtn.classList.add('d-none');
                            OkBtn.classList.remove('d-none');
                    break;
                    case questions.length+1:
                            nextBtn.classList.add('d-none');
                            sendBtn.classList.add('d-none');
                            prevBtn.classList.add('d-none');
                            OkBtn.classList.add('d-none');
                    break;

                    default:
                            nextBtn.classList.remove('d-none');
                            sendBtn.classList.add('d-none');
                            OkBtn.classList.add('d-none');
                }          
                };
         //Конец проверок

            // выводит вопрос на экран и запускает функцию перебора ответов
            const renderQuistion = (i)=>{  
                disablePrevBtn();
                disableNextBtn(); 
                formAnswers.innerHTML='';


                switch (indexQuestion){
                    case questions.length:
                        formAnswers.innerHTML=`
                        <div class = "form-group>"
                            <label for ="numberPhone">Enter your Phone</label>
                            <input type = "phone" class = "form-control" id="numberPhone">
                        </div>
                        `;
                    break;

                    case questions.length+1:
                        clearModal();
                        OkBtn.classList.add('d-none');
                        formAnswers.textContent = 'Спасбо за пройденный тест!';
                        setTimeout(()=>{
                            modalBlock.classList.remove('d-block');
                        }, 2000);
                    break;

                    default: 
                        questionTitle.textContent = `${questions[i].question}`;
                        renderAnswers(i);
                }


                

                };


            


            renderQuistion(indexQuestion);


            //функция занесения ответов в объект
            const checkAnswer = ()=>{
                const obj={};


                const inputs = [...formAnswers.elements].filter((input)=> input.checked|| input.id ==='numberPhone');

                inputs.forEach((input,index)=>{
                     if ((indexQuestion>=0) && (indexQuestion<= questions.length-1)){
                        obj[`${index}_${questions[indexQuestion].question}`] = input.value;
                    };
                    if (indexQuestion===questions.length){
                        obj[`Номер телефона`] = input.value;   
                    }
                });
                finalAnswers.push(obj);              

            };


            //обработчики событий кнопок вперед и назад
            nextBtn.addEventListener('click', ()=>{
                checkAnswer();
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

            sendBtn.addEventListener('click', ()=>{
                checkAnswer();
                clearModal();
                indexQuestion++;
                disablePrevBtn();
                disableNextBtn();
                renderQuistion(indexQuestion);
            });
            OkBtn.addEventListener('click', ()=>{
                checkAnswer();
                indexQuestion++;
                renderQuistion(indexQuestion);
                console.log(finalAnswers);
                
                
            })
        },
        //функция очитски модального окна
        clearModal = ()=>{
            formAnswers.innerHTML='';
            questionTitle.textContent = ``;
        };
        
    
//конец объявления переменных

    btnOpenModal.addEventListener('click', ()=>{
        modal.classList.add('d-block');  
        playTest();
    });

    closeModal.addEventListener('click', ()=>{
        modal.classList.remove('d-block'); 
        clearModal();
    });
})