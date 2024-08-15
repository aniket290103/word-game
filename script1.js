const wordtext = document.querySelector(".word"),
    hinttext = document.querySelector(".hint span"),
    timetext = document.querySelector(".time b"),
    inputfield = document.querySelector("input"),
    refreshbtn = document.querySelector(".refresh"),
    checkbtn = document.querySelector(".check"),
    scoretext = document.querySelector(".score b"), 
    attemptsText = document.querySelector(".attempts b"); 

let correctword, timer;
let score = 0; 
let questionsAttempted = 0; 

const timers = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timetext.innerText = maxTime;
        } else {
            clearInterval(timer);
            alert(`Time's up! The correct word was ${correctword.toUpperCase()}.`);
            game();
        }
    }, 1000);
};

const game = () => {
    timers(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordtext.innerText = wordArray.join("");
    hinttext.innerText = randomObj.hint;
    correctword = randomObj.word.toLowerCase();
    inputfield.value = "";
    inputfield.setAttribute("maxlength", correctword.length);
    questionsAttempted++; 
    attemptsText.innerText = `${questionsAttempted}/100`;
    console.log(randomObj);
};

const checkword = () => {
    let userword = inputfield.value.toLowerCase();
    if (!userword) return alert("Please enter a word to check.");

    if (userword !== correctword) {
        alert(`Oops! ${userword.toUpperCase()} is not the correct word.`);
    } else {
        alert(`Congratulations! ${userword.toUpperCase()} is the correct word.`);
        score++; 
        scoretext.innerText = score;
    }
    game(); 
};

refreshbtn.addEventListener("click", game);
checkbtn.addEventListener("click", checkword);

game();
