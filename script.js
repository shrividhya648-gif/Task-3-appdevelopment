
const quotes = [
    // Indian scientists and innovators
    {
        text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        author: "A. P. J. Abdul Kalam"
    },
    {
        text: "Excellence is a continuous process and not an accident.",
        author: "A. P. J. Abdul Kalam"
    },
    {
        text: "Take up one idea. Make that one idea your life.",
        author: "Swami Vivekananda"
    },
    {
        text: "Arise, awake, and stop not till the goal is reached.",
        author: "Swami Vivekananda"
    },
    {
        text: "Cultivation of mind should be the ultimate aim of human existence.",
        author: "B. R. Ambedkar"
    },
    {
        text: "You can't cross the sea merely by standing and staring at the water.",
        author: "Rabindranath Tagore"
    },
    {
        text: "A country's strength ultimately consists in what it can do on its own.",
        author: "Indira Gandhi"
    },
    {
        text: "Manpower without unity is not a strength unless it is harmonized.",
        author: "Sardar Vallabhbhai Patel"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },

    // Indian business leaders and achievers
    {
        text: "I don't believe in taking right decisions. I take decisions and then make them right.",
        author: "Ratan Tata"
    },
    {
        text: "Power and wealth are not two of my main stakes.",
        author: "Ratan Tata"
    },
    {
        text: "In God we trust. Everybody else, bring data.",
        author: "W. Edwards Deming"
    },
    {
        text: "Progress is often equal to the difference between mind and mindset.",
        author: "N. R. Narayana Murthy"
    },
    {
        text: "If you don't build your dream, someone else will hire you to help build theirs.",
        author: "Dhirubhai Ambani"
    },
    {
        text: "The world is changing very fast. Big will not beat small anymore. It will be the fast beating the slow.",
        author: "Rupert Murdoch"
    },
    {
        text: "I have always believed that the best way to predict the future is to create it.",
        author: "A. P. J. Abdul Kalam"
    },
    {
        text: "Success is not a good teacher; failure makes you humble.",
        author: "Shah Rukh Khan"
    },
    {
        text: "Dreams are not those which come while we are sleeping, but dreams are those when you don't sleep before fulfilling them.",
        author: "A. P. J. Abdul Kalam"
    },
    {
        text: "I never lose. I either win or learn.",
        author: "Nelson Mandela"
    },

    // Indian reformers, writers and humanitarians
    {
        text: "Not all of us can do great things. But we can do small things with great love.",
        author: "Mother Teresa"
    },
    {
        text: "Where the mind is without fear and the head is held high.",
        author: "Rabindranath Tagore"
    },
    {
        text: "A life of sacrifice is the pinnacle of art, and is full of true joy.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        text: "Life should be great rather than long.",
        author: "B. R. Ambedkar"
    },
    {
        text: "Faith is the bird that feels the light when the dawn is still dark.",
        author: "Rabindranath Tagore"
    },
    {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein"
    },
    {
        text: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "Mahatma Gandhi"
    },
    {
        text: "There is no wealth like knowledge, and no poverty like ignorance.",
        author: "Ali ibn Abi Talib"
    },

    // Global innovators and entrepreneurs
    {
        text: "Stay hungry. Stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        text: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        text: "Nothing will work unless you do.",
        author: "Maya Angelou"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },

    // Scientists and thinkers
    {
        text: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
    },
    {
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        text: "The important thing is not to stop questioning.",
        author: "Albert Einstein"
    },
    {
        text: "Nothing in life is to be feared; it is only to be understood.",
        author: "Marie Curie"
    },
    {
        text: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan"
    },
    {
        text: "Science is organized knowledge. Wisdom is organized life.",
        author: "Immanuel Kant"
    },
    {
        text: "The only source of knowledge is experience.",
        author: "Albert Einstein"
    },
    {
        text: "If I have seen further, it is by standing on the shoulders of giants.",
        author: "Isaac Newton"
    },
    {
        text: "Nothing is impossible; the word itself says 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Often attributed to Buddha"
    },

    // Leadership, courage and personal growth
    {
        text: "Alone we can do so little; together we can do so much.",
        author: "Helen Keller"
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Often attributed to Mahatma Gandhi"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "If you can dream it, you can do it.",
        author: "Often attributed to Walt Disney"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Often attributed to Thomas Edison"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Often attributed to Walt Disney"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Often attributed to Confucius"
    },
    {
        text: "Quality is not an act, it is a habit.",
        author: "Often attributed to Aristotle"
    },
    {
        text: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu"
    },
    {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote-btn");
const pageCounter = document.getElementById("page-counter");

let shuffledQuotes = [];
let currentIndex = 0;

function shuffleQuotes() {
    // Make a copy so the original collection stays unchanged.
    shuffledQuotes = [...quotes];

    // Fisher-Yates shuffle.
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledQuotes[i], shuffledQuotes[j]] =
            [shuffledQuotes[j], shuffledQuotes[i]];
    }

    currentIndex = 0;
}


let isTurning = false;

function showRandomQuote() {
    if (isTurning) return;

    isTurning = true;
    newQuoteButton.disabled = true;

    const rightPage = document.querySelector(".right-page");

    rightPage.classList.remove("turning");
    void rightPage.offsetWidth;
    rightPage.classList.add("turning");

    setTimeout(() => {
        if (currentIndex >= shuffledQuotes.length) {
            shuffleQuotes();
        }

        const selectedQuote = shuffledQuotes[currentIndex];

        quoteElement.textContent = `"${selectedQuote.text}"`;
        authorElement.textContent = `— ${selectedQuote.author}`;

        currentIndex++;

        pageCounter.textContent =
            `Page ${currentIndex} of ${shuffledQuotes.length}`;
    }, 350);

    setTimeout(() => {
        rightPage.classList.remove("turning");
        newQuoteButton.disabled = false;
        isTurning = false;
    }, 700);
}



newQuoteButton.addEventListener("click", showRandomQuote);

shuffleQuotes();

quoteElement.textContent = `"${shuffledQuotes[0].text}"`;
authorElement.textContent = `— ${shuffledQuotes[0].author}`;

currentIndex = 1;
pageCounter.textContent = `Page 1 of ${shuffledQuotes.length}`;

// Shuffle and display the first page when the site opens.
shuffleQuotes();
showRandomQuote();
