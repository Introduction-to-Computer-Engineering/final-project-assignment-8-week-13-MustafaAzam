// A short program to read a number from the Accelerometer (Unsigned) 

basic.forever(function () {
    let value = pins.i2cReadNumber(0x19, NumberFormat.UInt8LE, false) // Address 0X19, number format, false (repetition)
    basic.showNumber(value) // Display value
    basic.pause(200) // pause
})