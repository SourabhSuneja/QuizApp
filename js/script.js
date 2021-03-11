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
        // create buttons for options
    const optionArea = document.querySelector('#options')
    for (const option of questions[currentQues].options) {
        const button = document.createElement('button')
        button.innerText = option
        optionArea.append(button)
    }
}