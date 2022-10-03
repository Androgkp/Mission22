const Sentiment = require('sentiment');
const sentiment = new Sentiment();


const stringAnalyze='Cats are good.';

const result = sentiment.analyze(stringAnalyze);
console.dir(result);    // Score: -2, Comparative: -0.666