input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 5; index++) {
        pins.servoWritePin(AnalogPin.P1, 130)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P1, 110)
        basic.pause(500)
    }
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showIcon(IconNames.Heart)
