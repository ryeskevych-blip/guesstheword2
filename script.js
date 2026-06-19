const themedDictionaries = {
    it: {
        ua: {
            5: [
                { word: "екран", hint: "Плоска поверхня монітора чи смартфона, де відображається картинка." },
                { word: "мишка", hint: "Маленький ручний маніпулятор для керування курсором на комп'ютері." },
                { word: "робот", hint: "Автоматичний пристрій, що виконує роботу за заздалегідь закладеною програмою." }
            ],
            7: [
                { word: "монітор", hint: "Пристрій для візуального відображення інформації з системного блоку." },
                { word: "ноутбук", hint: "Портативний персональний комп'ютер, який можна легко носити з собою." },
                { word: "браузер", hint: "Програма для перегляду вебсторінок та навігації в мережі Інтернет." }
            ],
            10: [
                { word: "алгоритм", hint: "Чітка послідовність дій або команд, що веде до вирішення поставленої задачі." },
                { word: "програміст", hint: "Фахівець, який займається створенням та налагодженням коду для програмного забезпечення." },
                { word: "інтерфейс", hint: "Сукупність засобів і правил взаємодії між користувачем і комп'ютерною системою." },
                { word: "інформація", hint: "Будь-які дані, відомості чи знання, що передаються, обробляються або зберігаються в ПК." },
                { word: "технологія", hint: "Сукупність методів і процесів, які використовуються у сфері розробки та виробництва." },
                { word: "абстракція", hint: "Один із принципів ООП, що дозволяє виділити головні характеристики об'єкта без деталей." },
                { word: "компілятор", hint: "Програма, яка перекладає весь вихідний код високого рівня в машинний код." },
                { word: "базаданих", hint: "Впорядкована сукупність структурованих даних, які зберігаються в комп'ютерній системі." },
                { word: "архітектура", hint: "Загальна структура, компоненти та взаємозв'язки всередині програмної системи." }
            ]
        },
        ru: {
            5: [
                { word: "экран", hint: "Плоская поверхность монитора или смартфона, где отображается картинка." },
                { word: "мышка", hint: "Маленький ручной манипулятор для управления курсором на компьютере." },
                { word: "робот", hint: "Автоматическое устройство, выполняющее работу по заданной программе." }
            ],
            7: [
                { word: "монитор", hint: "Устройство для визуального отображения информации из системного блока." },
                { word: "ноутбук", hint: "Портативный персональный компьютер, который можно легко носить с собой." },
                { word: "браузер", hint: "Программа для просмотра веб-страниц и навигации в сети Интернет." }
            ],
            10: [
                { word: "алгоритм", hint: "Четкая последовательность действий или команд, ведущая к решению задачи." },
                { word: "программист", hint: "Специалист, который занимается написанием и отладкой кода программного обеспечения." },
                { word: "интерфейс", hint: "Совокупность средств и правил взаимодействия между пользователем и системой." },
                { word: "информация", hint: "Любые данные, сведения или знания, которые передаются, обрабатываются или хранятся в ПК." },
                { word: "технология", hint: "Совокупность методов и процессов, используемых в сфере разработки и производства." },
                { word: "абстракция", hint: "Один из принципов ООП, позволяющий выделить важные свойства объекта без деталей." },
                { word: "компилятор", hint: "Программа, переводящая исходный код высокого уровня в машинные команды." },
                { word: "базаданных", hint: "Упорядоченная совокупность структурированных данных, хранящихся в компьютерной системе." },
                { word: "архитектура", hint: "Общая структура, компоненты и взаимосвязи внутри программной системы." }
            ]
        },
        en: {
            5: [
                { word: "screen", hint: "The flat surface of a monitor or smartphone where the picture is displayed." },
                { word: "mouse", hint: "A small handheld manipulator for controlling the cursor on a computer." },
                { word: "robot", hint: "An automatic device that performs work according to a pre-set program." }
            ],
            7: [
                { word: "monitor", hint: "A device for visual display of information from the system unit." },
                { word: "laptop", hint: "A portable personal computer that can be easily carried around." },
                { word: "browser", hint: "A program for viewing web pages and navigating the Internet." }
            ],
            10: [
                { word: "algorithm", hint: "A clear sequence of actions or commands leading to the solution of a task." },
                { word: "programmer", hint: "A specialist who writes, develops, and debugs computer software code." },
                { word: "technology", hint: "A collection of techniques, skills, methods, and processes used in production." },
                { word: "encryption", hint: "The process of converting information or data into a secret code to prevent unauthorized access." },
                { word: "connection", hint: "A link or channel between two or more computing devices for data exchange." },
                { word: "repository", hint: "A central location where data or software development code is stored and managed." },
                { word: "javascript", hint: "A popular programming language primarily used to create interactive web pages." },
                { word: "controller", hint: "A component or device that manages and directs the flow of data between systems." },
                { word: "deployment", hint: "The process of distributing and installing a software application into environment." }
            ]
        }
    }
};

const alphabets = {
    ua: "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ",
    ru: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
    en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

let currentWord = "";
let guessedLetters = [];
let score = 0;
let lives = 3; 
let wordLength = 5;
let currentLang = "ua";
let chosenTheme = "it";

// Екрани
const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const gameoverScreen = document.getElementById("gameover-screen");

// Елементи управління
const enterBtn = document.getElementById("enter-btn");
const restartBtn = document.getElementById("restart-btn");
const exitGameBtn = document.getElementById("exit-game-btn");
const buyLetterBtn = document.getElementById("buy-letter-btn");

// Текстові поля
const scoreView = document.getElementById("score-view");
const livesView = document.getElementById("lives-view");
const finalScore = document.getElementById("final-score");
const gameoverTitle = document.getElementById("gameover-title");
const gameoverResult = document.getElementById("gameover-result");

const wordContainer = document.getElementById("word-container");
const keyboardContainer = document.getElementById("keyboard-container");
const questionContainer = document.getElementById("question-container");
const langSelect = document.getElementById("language-select");
const diffSelect = document.getElementById("difficulty-select");

function showScreen(screenToShow) {
    welcomeScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    gameoverScreen.classList.add("hidden");
    screenToShow.classList.remove("hidden");
}

function initRound() {
    currentLang = langSelect.value;
    wordLength = parseInt(diffSelect.value);
    
    const wordsList = themedDictionaries[chosenTheme][currentLang][wordLength];
    const randomPair = wordsList[Math.floor(Math.random() * wordsList.length)];
    
    currentWord = randomPair.word.toUpperCase();
    questionContainer.innerText = `[ПИТАННЯ]: ${randomPair.hint}`;
    
    guessedLetters = Array(currentWord.length).fill(false);
    
    lives = 3;
    if (livesView) livesView.innerText = lives;
    
    renderWord();
    renderKeyboard();
    updateScoreView();
}

enterBtn.addEventListener("click", () => {
    score = 0;
    initRound();
    showScreen(gameScreen);
});

function renderWord() {
    wordContainer.innerHTML = "";
    for (let i = 0; i < currentWord.length; i++) {
        const box = document.createElement("div");
        box.classList.add("letter-box");
        if (currentWord[i] === "'") {
            box.innerText = "'";
            guessedLetters[i] = true;
        } else {
            box.innerText = guessedLetters[i] ? currentWord[i] : "";
        }
        wordContainer.appendChild(box);
    }
}

function renderKeyboard() {
    keyboardContainer.innerHTML = "";
    const alphabet = alphabets[currentLang];
    
    for (let char of alphabet) {
        const btn = document.createElement("button");
        btn.classList.add("key-btn");
        btn.innerText = char;
        
        btn.addEventListener("click", () => {
            btn.disabled = true;
            handleLetterGuess(char);
        });
        
        keyboardContainer.appendChild(btn);
    }
}

function handleLetterGuess(letter) {
    let found = false;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter && !guessedLetters[i]) {
            guessedLetters[i] = true;
            found = true;
            score += 25;
        }
    }
    
    if (found) {
        renderWord();
        updateScoreView();
        checkWin();
    } else {
        lives--;
        if (livesView) livesView.innerText = lives;
        
        if (lives <= 0) {
            setTimeout(() => {
                if (gameoverTitle) gameoverTitle.innerText = "ДОСТУП ЗАБЛОКОВАНО";
                if (gameoverResult) gameoverResult.innerText = "[ПОМИЛКА]: Ви програли. Спроби вичерпано, систему захищено.";
                
                finalScore.innerText = score;
                showScreen(gameoverScreen);
            }, 300);
        }
    }
}

buyLetterBtn.addEventListener("click", () => {
    if (score >= 50) {
        let closedIndexes = [];
        for (let i = 0; i < guessedLetters.length; i++) {
            if (!guessedLetters[i]) closedIndexes.push(i);
        }
        
        if (closedIndexes.length > 0) {
            score -= 50;
            let randomIndex = closedIndexes[Math.floor(Math.random() * closedIndexes.length)];
            guessedLetters[randomIndex] = true;
            
            renderWord();
            updateScoreView();
            checkWin();
        }
    }
});

function updateScoreView() {
    scoreView.innerText = score;
    buyLetterBtn.disabled = score < 50;
}

function checkWin() {
    if (!guessedLetters.includes(false)) {
        setTimeout(() => {
            if (wordLength === 5) {
                alert(getTranslation("winLevel1") + ` ${currentWord}. ` + getTranslation("nextLevel") + " 2!");
                diffSelect.value = "7"; 
                initRound();            
            } else if (wordLength === 7) {
                alert(getTranslation("winLevel2") + ` ${currentWord}. ` + getTranslation("nextLevel") + " 3!");
                diffSelect.value = "10"; 
                initRound();             
            } else {
                if (gameoverTitle) gameoverTitle.innerText = "СИСТЕМУ УСПІШНО ЗЛАМАНО";
                if (gameoverResult) gameoverResult.innerText = "[УСПІХ]: Вітаємо! Ви пройшли гру та завершили тестування з максимальним результатом.";
                
                finalScore.innerText = score;
                showScreen(gameoverScreen);
            }
        }, 300);
    }
}

exitGameBtn.addEventListener("click", () => {
    score = 0;
    diffSelect.value = "5";
    showScreen(welcomeScreen);
});

restartBtn.addEventListener("click", () => {
    diffSelect.value = "5";
    showScreen(welcomeScreen);
});

function getTranslation(key) {
    const translations = {
        ua: {
            winLevel1: "Правильно! Ви відгадали слово:",
            winLevel2: "Чудово! Слово розгадано:",
            nextLevel: "Ви перейшли на наступний рівень"
        },
        ru: {
            winLevel1: "Правильно! Вы отгадали слово:",
            winLevel2: "Отлично! Слово разгадано:",
            nextLevel: "Вы перешли на следующий уровень"
        },
        en: {
            winLevel1: "Correct! You guessed the word:",
            winLevel2: "Great! The word is solved:",
            nextLevel: "You have moved to the next level"
        }
    };
    return translations[currentLang][key];
}
