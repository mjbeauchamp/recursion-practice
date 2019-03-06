const express = require('express');
const recursiveCode = require('./recursiveCode')

const app = express();

const PORT = 4003;

const myNestedObject = {
    dragon1: {
        name: "George",
        gold: 5000,
        diamonds: 500,
        rubies: 250,
        children: {
            child1: {
                name: "Anglicon",
                gold: 500,
                diamonds: 600,
                children: {
                    child1: {
                        name: "Fred",
                        rubies: 350,
                        emeralds: 5000
                    }
                }
            },
            child2: {
                name: "Smaug",
                gold: 400,
                emeralds: 300,
                children: {
                    child1: {
                        name: "Harry",
                        diamonds: 200,
                        emeralds: 3500,
                        sapphires: 6000
                    }
                }
            }
        }
    },
    dragon2: {
        name: "Bob",
        gold: 2000,
        diamonds: 4000,
        rubies: 6000,
        sapphires: 1000000
    },
    dragon3: {
        name: "Billy",
        gold: 10000,
        diamonds: 400,
        emeralds: 300,
        children: {
            child1: {
                name: "Jezebel",
                gold: 500,
                diamonds: 600
            },
            child2: {
                name: "John",
                gold: 400,
                emeralds: 300,
                children: {
                    child1: {
                        diamonds: 200,
                        emeralds: 3500
                    },
                    child2: {
                        name: "Blue",
                        sapphires: 5000
                    }
                }
            }
        }
    },
    dragon4: {
        name: "Buddy",
        gold: 10000,
        diamonds: 400,
        emeralds: 300,
        children: {
            child1: {
                name: "Steve",
                gold: 500,
                diamonds: 600
            },
            child2: {
                name: "Sara",
                gold: 400,
                emeralds: 300,
                children: {
                    child1: {
                        name: "Georgina",
                        diamonds: 200,
                        emeralds: 3500,
                        children: {
                            child1: {
                                name: "Spike",
                                sapphires: 60000
                            }
                        }
                    }
                }
            }
        }
    }
}

let gems = ["ruby", "sapphire", "diamond", "emerald"]
/////////////////////

recursiveCode.findSapphires(myNestedObject)

console.log(recursiveCode.claim(gems))






app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})