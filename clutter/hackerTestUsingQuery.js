const axios = require('axios');
const queryString =process.argv[2];
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

let score = 0;

axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${queryString}&tags=story`)
    .then((response)=>{
        response.data.hits.forEach((element)=>{
            console.log(element.title);

            let result = sentiment.analyze(element.title);
            score=score+result.score;
            console.log(result.score);
            // console.log('Current Score: ', score)
        })
    })
    .then(()=>{
        console.log('Final Score: ', score);
    })
    .catch((error)=>{
        console.log(error);
    })