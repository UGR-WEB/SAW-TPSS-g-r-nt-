const quizContainer = document.getElementById('quiz-container');
const levelInfo = document.getElementById('level-info');
const questionImage = document.getElementById('question-image');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const levelUpContainer = document.getElementById('level-up-container');
const levelUpButton = document.getElementById('level-up-button');
const timerButton = document.getElementById('timer-button'); // Zamanlayıcı butonu
const finishQuizButton = document.getElementById('finish-quiz'); // Sınavı bitir butonu

let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;
let markedPosition = null;
let selectedAnswer = null;

const quizData = {
            1: [
                {
                    image: 'images/level1/resim-1.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-2.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-3.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-4.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-5.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-6.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-7.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-8.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-9.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-10.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-11.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-12.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-13.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-14.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-15.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-16.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-17.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-18.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-19.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level1/resim-20.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
                // Diğer sorular...
            ],

2: [
                {
                    image: 'images/level2/resim-1.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-2.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-3.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-4.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-5.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-6.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-7.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-8.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-9.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-10.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-11.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-12.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-13.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-14.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-15.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-16.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-17.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-18.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
{
                    image: 'images/level2/resim-19.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-20.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj KİRLİ'
                },
                // Diğer sorular...
            ],

        };
function loadQuestion() {
    clearInterval(timer);
    const question = quizData[currentLevel][currentQuestion];
    questionImage.src = question.image;
    optionsContainer.innerHTML = '';
    markedPosition = null;
    selectedAnswer = null;
    clearPreviousMark();

    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-button', 'bg-gray-200', 'hover:bg-blue-400', 'transition', 'p-3', 'rounded-lg', 'cursor-pointer');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectAnswer(optionButton, option));
        optionsContainer.appendChild(optionButton);
    });
const progressCounter = document.getElementById('progress-counter');
    progressCounter.textContent = `${currentQuestion + 1}/${quizData[currentLevel].length} tamamlandı`; // İlerleme sayacını güncelle

    questionImage.addEventListener('click', markOnImage);
    startTimer();
}

function startTimer() {
    timeLeft = 25;
    updateTimerButton(timeLeft);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerButton(timeLeft);
        if (timeLeft <= 10) {
            timerButton.classList.add('flashing');
        } else {
            timerButton.classList.remove('flashing');
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function updateTimerButton(timeLeft) {
    timerButton.textContent = timeLeft;
    if (timeLeft <= 10) {
        timerButton.style.backgroundColor = '#e74c3c';
    } else {
        timerButton.style.backgroundColor = '#3498db';
    }
}

function selectAnswer(button, answer) {
    selectedAnswer = answer;
    button.style.backgroundColor = '#FFA500';

    const correctAnswer = quizData[currentLevel][currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score += 5; // Puan sistemine göre artır
        nextQuestion();
    } else {
        Swal.fire('İşaretleme Yapınız', 'Lütfen resim üzerinde doğru alanı işaretleyin!', 'info');
    }
}

function markOnImage(event) {
    if (!selectedAnswer) {
        return;
    }

    const rect = questionImage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (markedPosition) {
        markedPosition.remove();
    }

    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.style.position = 'absolute';
    marker.style.width = '20px';
    marker.style.height = '20px';
    marker.style.borderRadius = '50%';
    marker.style.backgroundColor = '#c0392b';
    marker.style.transform = 'translate(-50%, -50%)';
    marker.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    questionImage.parentElement.style.position = 'relative';
    questionImage.parentElement.appendChild(marker);

    markedPosition = marker;

    nextQuestion();
}

function clearPreviousMark() {
    const markers = document.querySelectorAll('.marker');
    markers.forEach(marker => marker.remove());
}

function nextQuestion() {
    currentQuestion++;
    setTimeout(() => {
        if (currentQuestion < quizData[currentLevel].length) {
            loadQuestion();
        } else {
            showLevelUpButton();
        }
    }, 1400);
}

function showLevelUpButton() {
    levelUpContainer.innerHTML = ''; 
    Swal.fire(`Puanınız: ${score}`, `Seviyeyi geçmek için en az 70 puan gerekli.`, 'info');

    if (score >= 70) {
        Swal.fire('Seviye Geçildi!', 'Başarıyla bu seviyeyi tamamladınız!', 'success');
        const levelUpButton = document.createElement('button');
        levelUpButton.textContent = 'Sonraki Seviye';
        levelUpButton.classList.add('level-up-button', 'bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
        levelUpButton.addEventListener('click', levelUp);
        levelUpContainer.appendChild(levelUpButton);
    } else {
        Swal.fire('Başarısız!', 'Bu seviyeyi geçemediniz, tekrar deneyin.', 'error');
        const tryAgainButton = document.createElement('button');
        tryAgainButton.textContent = 'Tekrar Dene';
        tryAgainButton.classList.add('try-again-button', 'bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
        tryAgainButton.addEventListener('click', () => {
            currentQuestion = 0;
            score = 0; // Yeniden başladığında puanı sıfırla
            loadQuestion();
        });
        levelUpContainer.appendChild(tryAgainButton);
    }
    levelUpContainer.classList.remove('hidden');
}

questionImage.addEventListener('click', markOnImage);

loadQuestion();

function levelUp() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    levelInfo.textContent = `Seviye: ${currentLevel}`;
    levelUpContainer.classList.add('hidden');
    loadQuestion();
}

// Sınavı Bitir Butonu İşlevselliği
finishQuizButton.addEventListener('click', () => {
    clearInterval(timer);
    Swal.fire('Sınav Bitirildi!', 'Sınavı başarıyla tamamladınız!', 'info').then(() => {
        window.location.href = "thankyou.html"; // Başka bir sayfaya yönlendir
    });
});

loadQuestion();
