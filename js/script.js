// declare questions to be asked
const questions = [{
            q: "What is 10 + 10 equal to?",
            options: ['25', '30', '20', '40'],
            correct: '20'
        },
        {
            q: "What is Athena's favorite animal?",
            options: ['Dog', 'Cat', 'Squirrel', 'Parrot'],
            correct: 'Dog'
        }
    ]
    // track score and the question currently in view
let score = 0
let currentQues = 0
    // load question when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion()
})

function loadQuestion() {
    // insert question
    document.querySelector('#question').innerText = questions[currentQues].q
    const optionArea = document.querySelector('#options')
    optionArea.innerHTML = ''
    for (const option of questions[currentQues].options) {
        const button = document.createElement('button')
        button.innerText = option
        button.onclick = checkAnswer
        optionArea.append(button)
    }
}

function checkAnswer() {
    // compare the text content of the button clicked with the correct answer    
    if (this.textContent === questions[currentQues].correct) {
        // increment the score
        score++
    }
    // increment the question pointer
    currentQues++
    // update the score shown
    document.querySelector('#correct').innerText = score + ' of ' + currentQues
        // load the next ques if the quiz is not complete
    if (currentQues < questions.length) {
        loadQuestion()
    }
    // else show the final result
    else {
        document.querySelector('#question').innerText = 'Score: ' + score + '/' + currentQues
        document.querySelector('#options').innerHTML = ''
    }
}