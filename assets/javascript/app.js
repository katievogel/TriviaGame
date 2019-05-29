//Variables needed for timer, correct answers, incorrect answers, unanswered questions, questions, possible answers choices, correct answer choice, 

var timeLeft = 0;
var correctlyAnswerwed = 0;
var incorrectlyAnswered = 0;
var unanswered = 0;

var qAndA = {
    questions: {
        ques1: "Which of these is not a noble gas?",
        ques2: "Which of the following is the rate of acceleration due to gravity?",
        ques3: "Our Sun currently creates energy through the nuclear fusion of what elements?",
        ques4: "Osmosis is the diffusion of particles across a semi-permeable membrane.",
        ques5: "Which of these clouds are associated with Thunderstorms?",
        ques6: "Which is the next closest star to our solar system?",
        ques7: "Polonium was discovered by this person.",
        ques8: "Newton's first law of motion, referred to as the law of inertia states that an object at rest will stay at rest and an object in motion will stay in motion with the same speed and in the same direction unless acted upon by an unbalanced force."
        ques9: "Which os the largest organ of the human body?",
        ques10: "This is the deepest known place in the ocean."
    }
    possible: {
        ques1: ["Xenon", "Hydrogen", "Sulfide", "Methane"],
        ques2: ["5 mph", "9.8m/s^2", "300m/s", "78ft/s^2"],

    }
    correct: {
        ques1: "Xenon",
        ques2: "9.8m/s^2",
    }
}

function startGame () {
    
}