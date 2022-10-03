const axios = require('axios');

const Bearer_Token='AAAAAAAAAAAAAAAAAAAAAMRNfQEAAAAA1QrYccosBF4U0F0QGLvrPkGNnco%3D491pDLAlCwh5rjfx5jSRlTBFaZE5cizKFucywgHOrFdQ0p4O3P';




axios.get('https://api.twitter.com/2/tweets/search/recent?query=java', {
    headers:{
        Authorization: `Bearer ${Bearer_Token}`
    }
})
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{
        console.log(err);
    })