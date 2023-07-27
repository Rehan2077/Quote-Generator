const url = 'https://api.quotable.io/quotes/random'
let quoteText = document.getElementById('quote')
let quoteAuthor = document.getElementById('author')

let newQuoteBtn = document.getElementById('btn-1')
let tweetBtn = document.getElementById('btn-2')

async function getQuote(){
    let response = await fetch(url);
    let value = await response.json();
    console.log(value);
    quoteText.innerHTML = value[0].content;
    quoteAuthor.innerHTML = value[0].author;

    console.log(quote, author);
}

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${quoteText.innerHTML} ----- By ${quoteAuthor.innerHTML}`, 'Tweet Window', 'width=600px, height=300px');
}

newQuoteBtn.addEventListener('click',() => getQuote())
tweetBtn.addEventListener('click',() => tweet())

getQuote();