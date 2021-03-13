// declare questions to be asked
const questions = [{
            q: "What is Sourabh's favourite fast food?",
            options: ['Samosa', 'Chaat Papdi', 'Dosa', 'French Fries'],
            correct: 'Dosa'
        },
        {
            q: "If there's one thing that irritates Sourabh, what could that be most probably?",
            options: ['Neighbours', 'The Education System', 'Attending a party', 'Inability to write'],
            correct: 'The Education System'
        },
        {
            q: "Suppose that Sourabh has to bribe someone in order to obtain a driving license. Will Sourabh go ahead?",
            options: ['Yes', 'No', 'Can\'t say', 'Depends on his mood'],
            correct: 'No'
        },
        {
            q: "Does Sourabh love to listen to very loud music?",
            options: ['Yes', 'No', 'Can\'t say', 'Depends on his mood'],
            correct: 'No'
        },
        {
            q: "Is Sourabh short-tempered?",
            options: ['Yes', 'No', 'Little bit', 'Only when he feels down'],
            correct: 'Only when he feels down'
        },
        {
            q: "What is Sourabh's date of birth?",
            options: ['16 Dec', '15 Dec', '5 Jan', '23 Nov'],
            correct: '16 Dec'
        },
        {
            q: "If Sourabh was asked to stay alone at home for an entire day, how would he react?",
            options: ['Refuse bluntly', 'Accept happily', 'Request his friends to come', 'Frown his face'],
            correct: 'Accept happily'
        },
        {
            q: "Is Sourabh hygiene-conscious?",
            options: ['Too much', 'Little bit', 'Not at all', 'Can\'t say'],
            correct: 'Too much'
        },
        {
            q: "What does Sourabh value the most among all these?",
            options: ['Money', 'Relationships', 'Status', 'Knowledge'],
            correct: 'Knowledge'
        },
        {
            q: "If Sourabh plans to settle abroad, where is he mostly likely to go?",
            options: ['US', 'Britain', 'Canada', 'Australia'],
            correct: 'US'
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