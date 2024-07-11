import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'animate.css';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/js/all.min';

const HackHuntQuiz = () => {
    const questions = [
        { question: "What is the main circuit board in a computer?", answer: "Motherboard", keyword: "Proclub123" },
        { question: "Which device is used to input text into a computer?", answer: "Keyboard", keyword: "Proclub234" },
        { question: "What is the brain of the computer called?", answer: "CPU", keyword: "Proclub345" },
        { question: "What is the permanent memory called?", answer: "ROM", keyword: "Proclub456" },
        { question: "What is a computer network’s unique address called?", answer: "IP", keyword: "Proclub567" },
        { question: "What does ‘USB’ stand for?", answer: "Universal Serial Bus", keyword: "Proclub678" },
        { question: "Which type of computer memory is used to store data temporarily?", answer: "RAM", keyword: "Proclub789" },
        { question: "What is a set of instructions that a computer follows to perform a task?", answer: "Algorithm", keyword: "Proclub891" },
        { question: "What is a wireless networking technology standard?", answer: "Wi-Fi", keyword: "Proclub910" },
        { question: "What is a graphical representation of data using symbols and charts?", answer: "Graph", keyword: "Proclub101" },
        { question: "What is a programming language known for its simplicity and readability?", answer: "Python", keyword: "Proclub111" },
        { question: "What is a device used to display output from a computer?", answer: "Monitor", keyword: "Proclub112" }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 3;

    useEffect(() => {
        document.addEventListener('contextmenu', (e) => e.preventDefault());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
            }
        });
    }, []);

    const showQuestion = (index) => {
        setCurrentQuestionIndex(index);
        setAttempts(0);
        document.getElementById('answer-input').value = '';
        document.getElementById('keyword-container').classList.add('hidden');
        document.getElementById('keyword-container').classList.remove('animate__fadeInDown');
    };

    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };

    const handleSubmit = () => {
        const userAnswer = document.getElementById('answer-input').value.trim();
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            document.getElementById('keyword').textContent = currentQuestion.keyword;
            const keywordContainer = document.getElementById('keyword-container');
            keywordContainer.classList.remove('hidden');
            keywordContainer.classList.add('animate__fadeInDown');

            if (attempts === 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Excellent!',
                    text: 'You nailed it on the first try!',
                    showClass: { popup: 'animate__animated animate__heartBeat' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' }
                });
            } else if (attempts === 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Well Done!',
                    text: 'Got it on the second try!',
                    showClass: { popup: 'animate__animated animate__bounceIn' },
                    hideClass: { popup: 'animate__animated animate__fadeOut' }
                });
            }
            setAttempts(0);
        } else {
            setAttempts(attempts + 1);
            if (attempts >= maxAttempts - 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'That was your third attempt! The correct answer remains a secret for now. Try again with the same question!',
                    footer: '<a href="www.tinobritty.tech">Summa Inga thottu Paaren :)</a>',
                    showClass: { popup: 'animate__animated animate__bounceIn' },
                    hideClass: { popup: 'animate__animated animate__bounceOut' }
                });
                setAttempts(0);
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Try Again!',
                    text: `Incorrect answer. You have ${maxAttempts - attempts - 1} attempt(s) left.`,
                    showClass: { popup: 'animate__animated animate__shakeX' },
                    hideClass: { popup: 'animate__animated animate__fadeOut' }
                });
            }
        }
    };

    const handleCopy = () => {
        copyToClipboard(document.getElementById('keyword').textContent);
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Keyword has been copied to clipboard.',
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
        });
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Temple of Knowledge</h1>
            <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Hack Hunt!</h1>
                <div id="question-container" className="mb-4">
                    <p id="question-number" className="text-lg font-semibold mb-2">Question {currentQuestionIndex + 1}</p>
                    <p id="question" className="text-lg font-semibold">{questions[currentQuestionIndex].question}</p>
                </div>
                <div className="mb-4">
                    <input type="text" id="answer-input" className="w-full p-2 border rounded-lg" placeholder="Type your answer here" />
                </div>
                <button id="submit-button" className="w-full bg-blue-500 text-white p-2 rounded-lg mb-4" onClick={handleSubmit}>Submit Answer</button>
                <div id="keyword-container" className="mt-4 text-center hidden animate__animated">
                    <p className="text-lg font-bold">Keyword:</p>
                    <div className="flex justify-center items-center space-x-4">
                        <p id="keyword" className="text-2xl font-semibold text-green-500"></p>
                        <button id="copy-button" className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600" onClick={handleCopy}>Copy</button>
                    </div>
                </div>
                <div id="navigation-buttons" className="mt-4 flex justify-center flex-wrap">
                    {questions.map((_, index) => (
                        <button
                            key={index}
                            className="m-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
                            onClick={() => showQuestion(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HackHuntQuiz;
