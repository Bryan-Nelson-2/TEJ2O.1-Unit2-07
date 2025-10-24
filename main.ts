/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Bryan
* Created on: Oct 2025
* This program is like cookie clicker
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookiesPressed = 0

// add 1
input.onButtonPressed(Button.A, function () {
    cookiesPressed += 1
    basic.clearScreen()
    basic.showNumber(cookiesPressed)
})
