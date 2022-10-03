/*
    Flow:
        1. save all id's in an idArray
        2. API call for each element idArray and store post in postArray
        3. Check if post includes requested string and store the on including in requiredArray
        4. Sentimental analysis and score generation for each element in requiredArray.

*/


const axios = require('axios');

const idArray = [];
const postArray=[];
const requiredArray = [];


const base='https://hacker-news.firebaseio.com/v0';

axios.get(`${base}/newstories.json`)
    .then((response) => {

        //Step: 1
        console.log("Fetching id's .....")
        response.data.forEach((element) => {

            idArray.push(element);
        });
    })
    .then(()=>{ //Fetching post from ID
        console.log("Analyzing id's .....")
        console.log(idArray);
        idArray.forEach((element) => {
            axios.get(`${base}/item/${element}.json`)
                .then((resp)=>{

                    //Step: 2
                    postArray.push(resp.data.title);
                })
                .then(()=>{
                    // console.log(postArray);
                    
                    //Step: 3
                    // postArray.forEach((e) => {
                    //     if(e.includes(process.argv[2])){
                    //         requiredArray.push(e);
                    //     }
                    // })
                })
                .then(()=>{
                    // console.log(requiredArray);
                })
                .catch(error=>{
                    console.log(error);
                })
        })
    })
    .catch(error => {
        console.log(error);
    });



