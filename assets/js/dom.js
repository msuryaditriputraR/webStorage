//inisialiasi variabel untuk menampung elemen dokumen
const localTotalVictoryField = document.getElementById(
    'local-total-victory-field'
);
const localMaximumAttempField = document.getElementById(
    'local-maximum-attemp-field'
);
const destroyDataButton = document.getElementById('destroy-data-button');
const playButton = document.getElementById('play-button');
const beforeGameDisplay = document.getElementById('before-game-display');
const duringGameDisplay = document.getElementById('during-game-display');
const afterGameDisplay = document.getElementById('after-game-display');
const answerButton1 = document.getElementById('answer-1-button');
const answerButton2 = document.getElementById('answer-2-button');
const answerButton3 = document.getElementById('answer-3-button');
const sessionUserAnswerField = document.getElementById(
    'session-user-answer-field'
);
const sessionUserWrongAnswerField = document.getElementById(
    'session-user-wrong-answer-field'
);
const sessionTrueAnswerField = document.getElementById(
    'session-true-answer-field'
);
const sessionUserAttempsField = document.getElementById(
    'session-user-attemps-amount-field'
);

export {
    localMaximumAttempField,
    localTotalVictoryField,
    destroyDataButton,
    playButton,
    beforeGameDisplay,
    duringGameDisplay,
    afterGameDisplay,
    answerButton1,
    answerButton2,
    answerButton3,
    sessionUserAnswerField,
    sessionUserWrongAnswerField,
    sessionTrueAnswerField,
    sessionUserAttempsField
};
