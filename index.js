const express = require('express');

const port = 5000;

const app = express();

app.get('/api/frameworks', (req,res) => {
    const frameworks = [
        {
            id: 1,
            name: 'React',
            description: 'React is a JavaScript library for building user interfaces.',
            link: "https://reactjs.org/"

            
        },
        {
            id: 2,
            name: 'Vue',
            description: 'Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications',
            link: "https://vuejs.org/"
        },
        {
            id: 3,
            name: 'Angular',
            description: 'Angular is a platform for building mobile and desktop web applications.',
            link: "https://angular.io/"
        },
    ]
    res.json(frameworks);
})

app.listen(port, () => {console.log(`App is listening on port: ${port}`)})