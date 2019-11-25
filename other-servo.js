//  A small program to demo the operation of the other servo function

basic.forever(function () 
{

    for (let i = 4; i <= 220; i += 5) //For Loop: i incremented by 5 
    {
        pins.servoWritePin(AnalogPin.P1, 180); //Setting the shaft angle to 180% on a servo
        basic.pause(200)//pause

        pins.servoSetPulse(AnalogPin.P1, i); //sets the servo pulse to i microseconds
        basic.pause(200); //pause
    }
})
