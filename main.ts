bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    sbrick.drive(255, SBPort.A, SBDirection.Forward)
    basic.pause(1000)
    sbrick.brake(SBPort.D)
})
sbrick.onConnected(function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . . # . .
        . . . # .
        . # # # .
        `)
})
let pressed = false
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `)
sbrick.connect("Duck")
loops.everyInterval(100, function () {
    pressed = input.buttonIsPressed(Button.B)
    if (pressed) {
        sbrick.drive(255, SBPort.A, SBDirection.Forward)
    } else {
        sbrick.brake(SBPort.C)
    }
})
