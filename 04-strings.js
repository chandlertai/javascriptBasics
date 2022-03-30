// Strings in JavaScript
let userName = 'oakgibbon12';
const stateName = 'Indiana';
let currentLanguage = "JavaScript";
let phrase = "The quick brown fox over the lazy dog";
let emptyString = '';

//Escaped Sequences
let escapeString = 'I just can\'t believe it\'s not  butter!';
let withAQuote = "The doctor said, \"Where is the patient?\", while he ran out the door.";

//Template Strings
let firstName = 'Jane';
let cartItems = 5;
let greeting = `Welcome, ${ firstName }! You have ${ cartItems } units in your cart.`;

//String Methods

//Index
const daysOfTheWeek = "MTWRF";
let firstDay = daysOfTheWeek[0];

//Replace All
const oldMarkup = "The Apples are the best fruit. Apples will domiate other fruits!";
let newMarkup = oldMarkup.replaceAll("Apples", "Oranges");

//Includes
let stockChoices = 'AAPL, MSFT, GOOG, AMZN, FB';
let containsNetflixStock = stockChoices.includes('NFLX');

//Uppercase/Lowercase
let userEmail = 'MyCoolMail@MailService.NET';
let allUpperCase = userEmail.toUpperCase();
let allLowerCase = userEmail.toLowerCase();