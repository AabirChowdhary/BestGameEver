// Ultimate April Fools Meme Game (Fully Fixed, No TextSprite)

// FAKE PARKOUR MINI-GAME
game.splash("Loading Ultra Hack...", "Please wait")
game.splash("Welcome to Parkour Pro!", "Level 1: Jump the block")

let runner = sprites.create(img`
    . . 2 2 . .
    . 2 2 2 2 .
    . 2 1 1 2 .
    . 2 2 2 2 .
    . . 2 2 . .
    . . . . . .
`, SpriteKind.Player)

let block = sprites.create(img`
    . . . . .
    . 5 5 5 .
    . 5 5 5 .
    . 5 5 5 .
    . . . . .
`, SpriteKind.Enemy)

runner.setPosition(20, 90)
block.setPosition(120, 90)
block.vx = -40
runner.ay = 300

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    runner.vy = -120
})

pause(1500)
game.splash("ERROR:", "Parkour engine failed")
pause(500)
game.splash("Switching to backup system...")

// SECRET COMBO (A → B → A → B)
let combo = 0

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (combo == 0 || combo == 2) combo++
    else combo = 0
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (combo == 1 || combo == 3) combo++
    else combo = 0

    if (combo == 4) {
        combo = 0
        forbiddenSequence()
    }
})

function forbiddenSequence() {
    game.splash("u shouldn't have done dat...", "")
    pause(500)
    skibidiMode()
}

function skibidiMode() {
    game.splash("SKIBIDI", "DOB DOB DOB YA YA")
    for (let i = 0; i < 20; i++) {
        scene.setBackgroundColor(Math.randomRange(1, 15))
        music.playTone(Math.randomRange(300, 2000), 80)
        game.splash("SKIBIDI", "YA YA")
    }
}

// MAIN CHAOS
pause(1500)
game.splash("APRIL FOOLS!", "You got RICKROLLED")

game.splash("Never gonna... oh wait")
game.splash("Something's wrong...")
game.splash("SYSTEM GLITCH DETECTED")

music.playMelody("E G C5 B A A B G E E F D", 120)

// OIOAIOIAOI MODE
pause(1000)
game.splash("ACTIVATING...", "OIOAIOIAOI MODE")

for (let i = 0; i < 8; i++) {
    scene.setBackgroundColor(Math.randomRange(1, 15))
    music.playTone(Math.randomRange(200, 1200), 100)
    game.splash("OIOAIOIAOI", "AIOIOAIOI")
}

// CHIPI CHIPI CHAPA MODE
pause(500)
game.splash("FINAL FORM:", "CHIPI CHIPI CHAPA MODE")

for (let i = 0; i < 12; i++) {
    scene.setBackgroundColor(Math.randomRange(1, 15))
    music.playTone(Math.randomRange(300, 1500), 80)
    game.splash("CHIPI CHIPI", "CHAPA CHAPA")
}

// GIANT 67 MODE
pause(500)
game.splash("6 7", "67 67 67")

let giant67 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . 6 6 6 6 . . . 7 7 7 7 7 . . .
    . 6 . . . . . . . . . 7 . . . .
    . 6 6 6 6 . . . . . . 7 . . . .
    . 6 . . . . . . . . . 7 . . . .
    . 6 6 6 6 . . . . . . 7 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
giant67.setPosition(80, 60)

for (let i = 0; i < 20; i++) {
    scene.setBackgroundColor(Math.randomRange(1, 15))
    music.playTone(Math.randomRange(200, 2000), 80)
    pause(50)
}

// CONFUSED MODE
pause(500)
scene.setBackgroundColor(2)
pause(100)
scene.setBackgroundColor(0)
pause(100)
scene.setBackgroundColor(2)
pause(200)
game.splash("waiiiit a minuuute...", "whooo rr yuuu")

// FAKE VIRUS ALERT
pause(800)
scene.setBackgroundColor(2)
game.splash("⚠ SYSTEM ALERT ⚠", "UNAUTHORIZED MEME DETECTED")
pause(500)
game.splash("ERROR 67-CHIPI-OIOA", "MEME OVERLOAD")
pause(500)
game.splash("CRITICAL FAILURE", "INITIATING AUTO-DESTRUCTION")
pause(500)
game.splash("3...", "")
pause(500)
game.splash("2...", "")
pause(500)
game.splash("1...", "")
pause(500)
game.splash("JUST KIDDING LOL", "FAKE VIRUS 😅")

// FINAL APRIL FOOLS ENDING
pause(500)
game.splash("APRIL", "FOOOOOOOOLS")
game.splash("APRIL", "FOOOOOOOOLS")
game.splash("APRIL", "FOOOOOOOOLS")
