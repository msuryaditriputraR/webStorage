import {
    localMaximumAttempField,
    localTotalVictoryField,
    beforeGameDisplay,
    duringGameDisplay,
    afterGameDisplay,
    sessionUserAnswerField,
    sessionUserWrongAnswerField,
    sessionTrueAnswerField,
    sessionUserAttempsField
} from './dom.js';
import {
    sessionAnswerKey,
    sessionUserAttempsKey,
    sessionUserIsPlayingKey,
    localMaximumAttempsKey,
    localTotalVictoryKey
} from './key.js';

//inisialisasi fungsi untuk menghasilkan jawaban permainan
const getAnswer = () => {
    let answer = '123'.split('');
    for (let i = 0; i < answer.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = answer[i];
        answer[i] = answer[j];
        answer[j] = tmp;
    }
    return answer.join('');
};

// function cek Answer
const checkAnswer = userGuess => {
    const answer = sessionStorage.getItem(sessionAnswerKey);
    if (userGuess == answer) {
        duringGameDisplay.setAttribute('hidden', true);
        afterGameDisplay.removeAttribute('hidden');
        sessionTrueAnswerField.innerText = answer;
        updateScore();
    } else {
        const previousAttempAmount = parseInt(
            sessionStorage.getItem(sessionUserAttempsKey)
        );
        sessionStorage.setItem(sessionUserAttempsKey, previousAttempAmount + 1);
        sessionUserAttempsField.innerText = sessionStorage.getItem(
            sessionUserAttempsKey
        );
        sessionUserAnswerField.innerText = '';
        sessionUserWrongAnswerField.innerText = userGuess;
    }
};

// function updateScore
const updateScore = () => {
    const sessionAttempsValue = parseInt(
        sessionStorage.getItem(sessionUserAttempsKey)
    );
    const localAttempsValue = parseInt(
        localStorage.getItem(localMaximumAttempsKey)
    );

    if (sessionAttempsValue > localAttempsValue) {
        localStorage.setItem(localMaximumAttempsKey, sessionAttempsValue);
        localMaximumAttempField.innerText = sessionAttempsValue;
    }

    const previousTotalVictoryAmount = parseInt(
        localStorage.getItem(localTotalVictoryKey)
    );
    localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount + 1);
    localTotalVictoryField.innerText =
        localStorage.getItem(localTotalVictoryKey);
};

const windowOnload = () => {
    if (typeof Storage !== 'undefined') {
        if (sessionStorage.getItem(sessionAnswerKey) === null)
            sessionStorage.setItem(sessionAnswerKey, '');
        if (sessionStorage.getItem(sessionUserAttempsKey) === null)
            sessionStorage.setItem(sessionUserAttempsKey, 0);
        if (sessionStorage.getItem(sessionUserIsPlayingKey) === null)
            sessionStorage.setItem(sessionUserIsPlayingKey, false);
        if (localStorage.getItem(localTotalVictoryKey) === null)
            localStorage.setItem(localTotalVictoryKey, 0);
        if (localStorage.getItem(localMaximumAttempsKey) === null)
            localStorage.setItem(localMaximumAttempsKey, 0);
    } else {
        alert(
            'Browser anda tidak mendukug web storage, silahkan ganti browser anda'
        );
    }

    sessionUserAttempsField.innerText = sessionStorage.getItem(
        sessionUserAttempsKey
    );
    localTotalVictoryField.innerText =
        localStorage.getItem(localTotalVictoryKey);
    localMaximumAttempField.innerText = localStorage.getItem(
        localMaximumAttempsKey
    );
};

const windowBeforeUnload = () => {
    sessionUserAnswerField.innerText = '';
    sessionUserWrongAnswerField.innerText = '';
    sessionStorage.setItem(sessionUserAttempsKey, 0);
    sessionUserAttempsField.innerText = sessionStorage.getItem(
        sessionUserAttempsKey
    );
};

const playButtonOnClick = () => {
    sessionStorage.setItem(sessionAnswerKey, getAnswer());
    beforeGameDisplay.setAttribute('hidden', true);
    duringGameDisplay.removeAttribute('hidden');
};

const answerButton1OnClick = () => {
    sessionUserAnswerField.innerText += '1';
    if (sessionUserAnswerField.innerText.length == 3)
        checkAnswer(sessionUserAnswerField.innerText);
};

const answerButton2OnClick = () => {
    sessionUserAnswerField.innerText += '2';
    if (sessionUserAnswerField.innerText.length == 3)
        checkAnswer(sessionUserAnswerField.innerText);
};

const answerButton3OnClick = () => {
    sessionUserAnswerField.innerText += '3';
    if (sessionUserAnswerField.innerText.length == 3)
        checkAnswer(sessionUserAnswerField.innerText);
};

const destroyDataButtonOnClick = () => {
    sessionStorage.removeItem(sessionAnswerKey);
    sessionStorage.removeItem(sessionUserAttempsKey);
    sessionStorage.removeItem(sessionUserIsPlayingKey);
    localStorage.removeItem(localMaximumAttempsKey);
    localStorage.removeItem(localTotalVictoryKey);
    alert('Mohon reload halaman ini kembali');
};

export {
    getAnswer,
    checkAnswer,
    updateScore,
    windowOnload,
    windowBeforeUnload,
    playButtonOnClick,
    answerButton1OnClick,
    answerButton2OnClick,
    answerButton3OnClick,
    destroyDataButtonOnClick
};
