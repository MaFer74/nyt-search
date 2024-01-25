const API_KEY = '4qIrG8IwpOAITA91lclpYC8Zla2dpj2k'

function search() {
    const query = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`;
    console.log(query);
}

search();