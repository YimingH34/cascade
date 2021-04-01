let x = 0
let y = 0
let y_increase = 0
input.onButtonPressed(Button.A, function () {
    x = -1
    for (let index = 0; index <= 10; index++) {
        for (let index = 0; index <= 4; index++) {
            x += 1
            y += -1
            led.toggle(x, y)
        }
        basic.pause(100)
        y_increase = y_increase + 1
        y = y_increase
        x = -1
    }
    y_increase = 0
})
