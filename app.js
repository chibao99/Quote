var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
    '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32",
    "#BDBB99", "#77B1A9", "#73A857"];
let bao = [
    { quote: 'Better safe than sorry', author: 'John wick' },
    { quote: 'The grass are always green on the other side of the fence', author: 'John Bao' },
    { quote: 'Honesty is the best policy', author: 'Tony stark' },
    { quote: 'No rose without a thorn', author: 'Thor' },
    { quote: 'A friend in need is a friend indeed', author: 'Hulk' }
];
function randomName() {
    return bao[Math.floor(Math.random() * bao.length)];
}
function randonColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
const newQuote = document.querySelector('#new-quote');
const text = document.querySelector('.text');
const tweet = document.querySelector('#tweet-quote');
const fa = document.querySelector('#facebook-quote');
const i = document.querySelector('.fa.fa-quote-left');
const author = document.querySelector('#author');
newQuote.addEventListener('click', function () {
    create();
})
function create() {
    let e = randomName();
    text.style.opacity = 0;
    setTimeout(function () {
        text.innerHTML = `
        <p class="addText">${e.quote}<p/>
    `
        author.innerHTML = `
        <p>- ${e.author}</p>
    `
        let color = randonColor();
        document.body.style.backgroundColor = color;
        text.style.color = color;
        text.style.opacity = 1;
        newQuote.style.backgroundColor = color;
        tweet.style.backgroundColor = color;
        fa.style.backgroundColor = color;
        i.style.color = color;
        author.style.color = color;
    }, 1000);
}