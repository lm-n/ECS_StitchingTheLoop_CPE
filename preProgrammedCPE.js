/*  This code was written for the Stitch the Loop e-textiles curriculum by the
Exploring Computer Science e-textiles team. ECS 2018 GPL V3 for non commercial use.  
ECS 2018 CC- BY NC SA.  
Adapted to JavaScript for Circuit Playground Express MakeCode in 2020.
*/


/*
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
This program is an EXAMPLE of the many possible solutions.  This code will compile as is.
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇


*/
/*  STUDENT META HERE
STUDENT NAME(S)
 Date Written
Brief description of what program does here.
*/


// The first section is where to declare global objects and call up additional files the program needs to use.  
/*NAMING SECTION: We name things to keep track of them easily.
*/

let fadeUp = true
let fadeBrightness = 5
let heartCounter = 1
let blinkCounter = 1

forever(function () {
/* The second section is for things that happen repeatedly in the program loop
while the program is running. The code is executed in the order coded. */
    blinkPattern();
    heartBeat();
    fadex();
    pause(100);
})

// The third section is for functions that are called up by the third section.

function blinkPattern() {
    if (blinkCounter == 1) {
        pins.A7.digitalWrite(true);
    } else if (blinkCounter == 6) {
        pins.A7.digitalWrite(false);
    } else if (blinkCounter > 10) {
        blinkCounter = 0;
    }
    blinkCounter += 1;
}
function heartBeat() {
    if (heartCounter == 1) {
        pins.A4.digitalWrite(true);
    } else if (heartCounter == 3) {
        pins.A4.digitalWrite(false);
    } else if (heartCounter == 5) {
        pins.A4.digitalWrite(true);
    } else if (heartCounter == 7) {
        pins.A4.digitalWrite(false);
    } else if (heartCounter > 15) {
        heartCounter = 0;
    }
    heartCounter += 1;
}
function fadex() {
    if (fadeUp == true) {
        if (fadeBrightness >= 1000) {
            fadeUp = false;
        } else {
            fadeBrightness += 100;
        }
    } else {
        if (fadeBrightness <= 5) {
            fadeUp = true;
        } else {
            fadeBrightness += -100;
        }
    }
    pins.A2.analogWrite(fadeBrightness);
}

function twinkle() {
    let brightx = Math.floor(Math.random() * 100);
    pins.A1.analogWrite(brightx);
}