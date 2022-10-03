/*
    Flow:
        1. save all id's in an idArray
        2. API call for each element idArray and store post in postArray
        3. Check if post includes requested string and store the on including in requiredArray
        4. Sentimental analysis and score generation for each element in requiredArray.

*/


const axios = require('axios');

const idArray = [];
const postArray = [];
const requiredArray = [];
const Sentiment = require('sentiment');

const sentiment = new Sentiment();

const base = 'https://hacker-news.firebaseio.com/v0';

let finalScore = 0;

axios.get(`${base}/newstories.json`)
    .then(async (response) => {

        //Step: 1
        console.log("Fetching id's .....")
        await response.data.forEach(async (element) => {

            await axios.get(`${base}/item/${element}.json`)
                .then((response2) => {
                    if (response2.data.title.includes(process.argv[2])) {
                        let result = sentiment.analyze(response2.data.title);
                        console.log(response2.data.title);
                        console.log(result);
                        finalScore = finalScore + result.score;
                        console.log(finalScore)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        });
    })
    .catch(error => {
        console.log(error);
    });



