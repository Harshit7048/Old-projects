// let textarea = document.getElementById('textarea');
// let button = document.getElementById('button')

// let button2 = document.getElementById('start-first');


// function texttospeech(text) {
//     let utterance = new SpeechSynthesisUtterance(text);
//     speechSynthesis.speak(utterance)
// };


// button2.addEventListener('click', startVoiceRecognition);

// function startVoiceRecognition() {
//     let recognition = new webkitSpeechRecognition();
//     recognition.lang = "en-GB";
//     console.log('This is working');
//     console.log(recognition)
//     recognition.onresult = function (value) {
//         console.log(value)
//         // console.log(value.results[0][0].transcript)
//     };
//     recognition.onsoundstart = (value) => {
//         console.log(value)
//     }


//     recognition.start();
//     // recognition.SpeechRecognition()
// }




// button.addEventListener('click', () => {
//     texttospeech(textarea.value);
// })
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let button2 = document.getElementById('start-first');
let innermost1 = document.getElementById('inner-most-1')
let parentcontainer = document.getElementById('parent-container')
let a;



function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
innermost1.addEventListener('click', () => {

    textToSpeech('Starting Jarvis AI');

    parentcontainer.style.zIndex = '1';
    parentcontainer.classList.add('remove')

})


textarea.value = '';

button2.addEventListener('click', startVoiceRecognition);

function startVoiceRecognition() {

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
        let transcript = event.results[0][0].transcript;
        console.log(event);
        console.log('This is working after speech');
        console.log(transcript)
        textarea.value = transcript;
        if (textarea.value == 'hello Jarvis') {
            console.log('the value is hello')
            textToSpeech('hello sir this is your friendly jarvis, What can I do for you')


        }
        else {

            textToSpeech('Looking' + textarea.value)
            window.open(`https://search.brave.com/search?q= ${textarea.value}`, '_blank');
        }



    };

    recognition.onsoundstart = function (event) {
        console.log(event);
        console.log('this is soundstart')
    };
    recognition.start();
}


