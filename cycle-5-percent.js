// Varies the duty cycle, up and down, between 5% and 95%, in steps of 5%

basic.forever(function () 
{
    for (let i = 10; i < 190; i += 10) // For Loop: to increase cycle in steps of 5%, up to 95%
    { 
        basic.pause(100)//pause 

       pins.servoSetPulse(AnalogPin.P0, i) // increases duty cycle
    }

    for (let i = 190; i > 10; i += -10) // For Loop: to decrease cycle in steps of 5% 
    {
        basic.pause(100)//pause 

       pins.servoSetPulse(AnalogPin.P0, i)//decreases duty cycle
    }

})