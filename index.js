const express = require('express');
require('dotenv').config()


const app = express();

const port = 4040

const githubData = {
    "login": "kumarsachinkain01",
  "id": 138963538,
  "node_id": "U_kgDOCEhqUg",
  "avatar_url": "https://avatars.githubusercontent.com/u/138963538?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kumarsachinkain01",
  "html_url": "https://github.com/kumarsachinkain01",
  "followers_url": "https://api.github.com/users/kumarsachinkain01/followers",
  "following_url": "https://api.github.com/users/kumarsachinkain01/following{/other_user}",
  "gists_url": "https://api.github.com/users/kumarsachinkain01/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kumarsachinkain01/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kumarsachinkain01/subscriptions",
  "organizations_url": "https://api.github.com/users/kumarsachinkain01/orgs",
  "repos_url": "https://api.github.com/users/kumarsachinkain01/repos",
  "events_url": "https://api.github.com/users/kumarsachinkain01/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kumarsachinkain01/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sachin kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 75,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-08T06:13:53Z",
  "updated_at": "2025-02-04T05:54:09Z"
}


app.get('/', (req,res)=>{
    res.send('Hello Everyone welcome to the world of ExpressJS')
});

app.get('/twitter', (req,res)=>{
    res.send('Check out Twitter @ExpressJS')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Login to your ExpressJS account</h1>')
});

app.get('/youtube',(req,res)=>{
    res.send('<a href="https://www.youtube.com" target="_blank">Click To Youtube</a>')
})

app.get('/github', (req,res)=>{
    res.send(`
        <h1>Welcome to GitHub</h1>
        <img src="${githubData.avatar_url}" alt="GitHub Profile Pic">
        <p>Name: ${githubData.name}</p>
        <p>Company: ${githubData.company}</p>
        <p>Followers: ${githubData.followers}</p>
        <p>Following: ${githubData.following}</p>
        <p>Public Repos: ${githubData.public_repos}</p>
        <p>Public Gists: ${githubData.public_gists}</p>
        <p>Created At: ${githubData.created_at}</p>
        <p>Updated At: ${githubData.updated_at}</p>
    `)
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})