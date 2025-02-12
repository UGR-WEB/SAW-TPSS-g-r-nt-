const quizContainer = document.getElementById('quiz-container');
const levelInfo = document.getElementById('level-info');
const questionImage = document.getElementById('question-image');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const levelUpContainer = document.getElementById('level-up-container');
const levelUpButton = document.getElementById('level-up-button');
const timerDisplay = document.getElementById('timer');

let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;
let markedPosition = null;
let selectedAnswer = null; // Kullanıcının seçtiği cevabı tutar

const quizData = {
            1: [
                {
                    image: 'images/level1/resim-1.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-2.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-3.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-4.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-5.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-6.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
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
                    answer: 'Bagaj TEMİZ'
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
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-13.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-14.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
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
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-19.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level1/resim-20.png',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
                // Diğer sorular...
            ],

2: [
                {
                    image: 'images/level2/resim-1.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-2.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-3.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-4.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-5.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-6.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-7.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-8.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-9.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-10.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-11.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-12.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-13.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-14.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-15.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
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
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-19.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
{
                    image: 'images/level2/resim-20.jpg',
                    options: ['Bagaj KİRLİ', 'Bagaj TEMİZ', 'Tanımsız Alan BULUNMAKTADIR'],
                    answer: 'Bagaj TEMİZ'
                },
                // Diğer sorular...
            ],

        };
function loadQuestion() {
    const question = quizData[currentLevel][currentQuestion];
    questionImage.src = question.image;
    optionsContainer.innerHTML = '';
    markedPosition = null; // İşaretlemeyi sıfırlıyoruz
    selectedAnswer = null; // Cevap sıfırlanıyor

    // Yeni soruya geçildiğinde, önceki işaretlemeyi temizliyoruz
    clearPreviousMark();

    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-button', 'bg-gray-200', 'hover:bg-blue-400', 'transition', 'p-3', 'rounded-lg', 'cursor-pointer');
        optionButton.textContent = option;

        optionButton.addEventListener('click', () => {
            selectAnswer(optionButton, option);
        });

        optionsContainer.appendChild(optionButton);
    });

    questionImage.addEventListener('click', (event) => markOnImage(event)); // Resme tıklanması durumunda işaretleme yapılacak
    startTimer();
}
const timerButton = document.getElementById('timer-button'); // Zamanlayıcıyı barındıracak buton

function startTimer() {
    timeLeft = 25; // 25 saniye
    updateTimerButton(timeLeft); // Başlangıç zamanını butona yazdırıyoruz

    // Timer'ı her saniye güncelliyoruz
    timer = setInterval(() => {
        timeLeft--; // Zamanı bir azaltıyoruz
        updateTimerButton(timeLeft); // Ekranda gösteriyoruz

        // Son 10 saniye için yanıp sönme efekti
        if (timeLeft <= 10) {
            timerButton.classList.add('flashing'); // Yanıp sönme efekti ekliyoruz
        } else {
            timerButton.classList.remove('flashing'); // Yanıp sönme efekti kaldırıyoruz
        }

        if (timeLeft <= 0) {
            clearInterval(timer); // Zaman bitince timer'ı temizliyoruz
            nextQuestion(); // Otomatik olarak bir sonraki soruya geçiyoruz
        }
    }, 1000); // 1000 ms = 1 saniye
}

// Zamanlayıcıyı buton üzerinde güncelleyen fonksiyon
function updateTimerButton(timeLeft) {
    timerButton.textContent = timeLeft; // Butonun içindeki yazıyı güncelliyoruz

    if (timeLeft <= 10) {
        timerButton.style.backgroundColor = '#e74c3c'; // Kırmızı tonunda bir arka plan
    } else {
        timerButton.style.backgroundColor = '#3498db'; // Normalde mavi
    }
}

// Soruları yüklerken eski zamanlayıcıyı temizleme
function loadQuestion() {
    clearInterval(timer); // Eski zamanlayıcıyı temizliyoruz
    const question = quizData[currentLevel][currentQuestion];
    questionImage.src = question.image;
    optionsContainer.innerHTML = '';
    markedPosition = null; // İşaretlemeyi sıfırlıyoruz
    selectedAnswer = null; // Cevap sıfırlanıyor

    // Yeni soruya geçildiğinde, önceki işaretlemeyi temizliyoruz
    clearPreviousMark();

    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-button', 'bg-gray-200', 'hover:bg-blue-400', 'transition', 'p-3', 'rounded-lg', 'cursor-pointer');
        optionButton.textContent = option;

        optionButton.addEventListener('click', () => {
            selectAnswer(optionButton, option);
        });

        optionsContainer.appendChild(optionButton);
    });

    questionImage.addEventListener('click', (event) => markOnImage(event)); // Resme tıklanması durumunda işaretleme yapılacak
    startTimer(); // Yeni soruya başlamadan önce zamanlayıcıyı başlatıyoruz
}

// Cevap seçim fonksiyonu
function selectAnswer(button, answer) {
    selectedAnswer = answer; // Seçilen cevabı kaydediyoruz

    // Seçilen cevabın butonunun rengini turuncuya çeviriyoruz
    button.style.backgroundColor = '#FFA500'; // Turuncu rengi

    // Eğer "Bagaj TEMİZ" seçildiyse, hemen sonraki soruya geçiyoruz
    if (selectedAnswer === 'Bagaj TEMİZ') {
        nextQuestion();
    } else {
        // Diğer seçeneklerde işaretleme yapılması gerektiğini bildiriyoruz
        Swal.fire({
            title: 'İşaretleme Yapınız',
            text: 'Lütfen resim üzerinde doğru alanı işaretleyin!',
            icon: 'info',
            showCancelButton: false,
            confirmButtonText: 'Tamam'
        });
    }
}

// Resim üzerine işaretleme yapılacak
function markOnImage(event) {
    // Eğer cevap seçilmemişse, işaretleme yapılmasın
    if (!selectedAnswer) {
        return;
    }

    // Resmin iç koordinatlarını almak
    const rect = questionImage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Eğer önceki işaret varsa onu kaldırıyoruz
    if (markedPosition) {
        markedPosition.remove();
    }

    // Yeni işaret ekliyoruz
    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.style.position = 'absolute';
    marker.style.width = '20px';
    marker.style.height = '20px';
    marker.style.borderRadius = '50%';
    marker.style.backgroundColor = '#c0392b'; // Koyu kırmızı
    marker.style.transform = 'translate(-50%, -50%)';
    marker.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    questionImage.parentElement.style.position = 'relative';
    questionImage.parentElement.appendChild(marker);

    markedPosition = marker;

    // İşaretleme yapıldığında, sonraki soruya geçiyoruz
    nextQuestion();
}

// Önceki işaretlemeleri temizleme
function clearPreviousMark() {
    // Yeni soru yüklendiğinde, önceki işaretlemeyi temizliyoruz
    const markers = document.querySelectorAll('.marker');
    markers.forEach(marker => marker.remove()); // Var olan tüm işaretlemeleri kaldırıyoruz
}

// Sonraki soruya geçme fonksiyonu
function nextQuestion() {
    currentQuestion++;
    setTimeout(() => {
        if (currentQuestion < quizData[currentLevel].length) {
            loadQuestion(); // Yeni soruyu yükle
        } else {
            showLevelUpButton();
        }
    }, 1500); // 1.5 saniye sonra yeni soru
}

// Seviye geçişi için buton gösterme
function showLevelUpButton() {
    if (score >= 70) {
        Swal.fire('Seviye Geçildi!', 'Başarıyla bu seviyeyi tamamladınız!', 'success');
        levelUpButton.disabled = false;
        levelUpButton.addEventListener('click', levelUp);
    } else {
        Swal.fire('Başarısız!', 'Bu seviyeyi geçemediniz, tekrar deneyin.', 'error');
        levelUpButton.disabled = true;
    }
    levelUpContainer.classList.remove('hidden');
}

// Seviye atlama fonksiyonu
function levelUp() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    levelInfo.textContent = `Seviye: ${currentLevel}`;
    levelUpContainer.classList.add('hidden');
    loadQuestion();
}

loadQuestion(); // İlk soruyu yükle
