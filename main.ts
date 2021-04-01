let x = 0
let y_increase = 0
let y = 0
// To get this code working I set up 3 variable. I found As long as X changes across and Y changes by 1 every time X changes 5 times then pause every time a line is made then it will work.
input.onButtonPressed(Button.A, function () {
    // Whenever you press the A button it will set the X button to -1 this is because I want the variable to set to 0 when i start of operation and one of the way to do that is to set the x to -1
    x = -1
    // I am making this code to run 10 times so fill out the cascade.
    for (let index = 0; index <= 9; index++) {
        // I realize the normal Y would just be keep on going so I need another variable to keep track of everything.
        y_increase = y_increase + 1
        // So I will just set Y to the other variable
        y = y_increase
        // This just simply re set the X
        x = -1
        // This will fill in the cascade line by line and if I don't put a pause.
        for (let index = 0; index <= 4; index++) {
            x += 1
            // I realize that the X will go up and Y will go down by -1 so I just put that in the code.
            y += -1
            led.toggle(x, y)
        }
        // After filling out the sideline i will need to pause to show the next line
        basic.pause(100)
    }
    // In the end, I will set the "fake" Y to nothing and this why if you press A again it will "uncascade".
    y_increase = 0
})
