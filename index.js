#!/usr/bin/env node
const {exec} = require('child_process')

// All emoji
const emoji = ['🥰', '😘', '😍', '💋', '❤️']

let times = 1
const timeId = setInterval(() => {
    // Stops at 3000
    if (times === 3001) {
        clearInterval(timeId)
    }
    // Print out love you
    console.log(`Love you ${times} ~ ${emoji[getRandomInt(emoji.length)]}`)
    // Say love you
    exec('say love you', () => {
        times += 1
    })
}, 1200)

// Random function
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

