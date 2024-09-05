const quotes = [
    {
        text: "The best way to predict the future is to create it.",
        author: "Alan Kay"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Everything seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "The only way to do something is, by doing it",
        author: "Anonymous"
    }
];

//
const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//
const displayNewQuote = () => {
    const quote = getRandomQuote();
    document.getElementById('text').textContent = quote.text;
    document.getElementById('author').textContent = quote.author;
    document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
}

//
document.getElementById('new-quote').addEventListener('click', displayNewQuote);

//
displayNewQuote();
