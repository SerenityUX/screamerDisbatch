const express = require('express');
const app = express();
const port = 3000;

let screamCount = 0; 

let screams = [];

app.use(express.json());

app.get('/getNewScreams', (req, res) => {
    
    const hasBeenPlayedNot = screams.filter((scream) => !scream.hasBeenPlayed)

    screams.forEach((scream) => {
        scream.hasBeenPlayed = true;
    });
    
    res.send({ screams: hasBeenPlayedNot });
    
});

app.post('/createScream', (req, res) => {
    const randomID = Math.random() * 100000;
    screams.push({
        name: "zombie",
        hasBeenPlayed: false,
        id: randomID
    });
    res.send(screams);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
