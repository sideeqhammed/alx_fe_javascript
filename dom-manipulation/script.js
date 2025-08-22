let quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    category: "inspirational"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    category: "technology"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    category: "inspirational"
  },
  {
    text: "The best way to predict the future is to invent it.",
    category: "technology"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    category: "inspirational"
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    category: "inspirational"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    category: "inspirational"
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    category: "success"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    category: "inspirational"
  },
  {
    text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    category: "wisdom"
  },
  {
    text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    category: "change"
  }
];
const saveQuotes = () => {
  localStorage.setItem('quotesArr', JSON.stringify(quotes))
}


if (localStorage.getItem('quotesArr')) {
  quotesJson = localStorage.getItem('quotesArr');
  quotes = JSON.parse(quotesJson)
}

const displayQuote = document.getElementById('quoteDisplay');
const button1 = document.getElementById('newQuote');
const addNewQuote = document.getElementById('addNewQuote');
const body = document.querySelector('body');


const showRandomQuote = () => {
  const rand = Math.floor(Math.random() * quotes.length);
  displayQuote.innerHTML = quotes[rand].text;
}

const addQuote = () => {
  const newQuoteText = document.getElementById('newQuoteText');
  const newQuoteCategory = document.getElementById('newQuoteCategory');
  if (newQuoteText.value && newQuoteCategory.value) {
    const newQuote = {
      text: `${newQuoteText.value}`,
      category: `${newQuoteCategory.value}`
    };
    quotes.push(newQuote);
    console.log(quotes);
    alert("Your new quote has been added");
    newQuoteText.value = ''; newQuoteCategory.value = '';
    saveQuotes();
  } else {
    alert('Incomplete information');
  }
}


const createAddQuoteForm = () => {
  const div = document.createElement('div');
  const input1 = document.createElement('input');
  input1.id="newQuoteText"; input1.type="text"; input1.placeholder="Enter a new quote";
  const input2 = document.createElement('input');
  input2.id="newQuoteCategory"; input2.type="text"; input2.placeholder="Enter quote category";
  const button = document.createElement('button');
  button.onclick=function() {
    addQuote()
  }; button.innerText = "Add Quote"

  div.appendChild(input1);
  div.appendChild(input2);
  div.appendChild(button);
  body.appendChild(div)


  // <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
  //   <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
  //   <button onclick="addQuote()">Add Quote</button>
}

addNewQuote.addEventListener('click', (createAddQuoteForm))

console.log(quotes);

button1.addEventListener('click', showRandomQuote);

// localStorage.clear()
