import {
    answerButton1,
    answerButton2,
    answerButton3,
    destroyDataButton,
    playButton
} from './dom.js';
import {
    answerButton1OnClick,
    answerButton2OnClick,
    answerButton3OnClick,
    destroyDataButtonOnClick,
    playButtonOnClick,
    windowBeforeUnload,
    windowOnload
} from './function.js';

window.addEventListener('load', windowOnload);

window.addEventListener('beforeunload', windowBeforeUnload);

playButton.addEventListener('click', playButtonOnClick);

answerButton1.addEventListener('click', answerButton1OnClick);

answerButton2.addEventListener('click', answerButton2OnClick);

answerButton3.addEventListener('click', answerButton3OnClick);

destroyDataButton.addEventListener('click', destroyDataButtonOnClick);
