radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        servos.P0.run(50)
        servos.P0.run(-52)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (receivedNumber == 1) {
        servos.P0.run(-52)
        servos.P0.run(50)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (receivedNumber == 2) {
        servos.P0.run(0)
        servos.P0.run(0)
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
