// Writes to an arbitrary I2C address.

basic.forever(function () {
    pins.i2cWriteNumber(0x07, 2055, NumberFormat.Int8LE)// writes to address 0x07, value: 2055, number format
    basic.pause(100) //pause
}) 