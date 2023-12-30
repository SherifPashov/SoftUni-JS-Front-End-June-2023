function solve(speed, area) {
    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - ${logSpeeding(speeding)}`);
    }
    else{
        console.log(`Driving ${speed} km/h in a ${allowedSpeeds[area]} zone`);
    }
 
    function logSpeeding(speeding) {
        if (speeding <= 20) {
            return('speeding');
        } else if (speeding <= 40) {
            return('excessive speeding');
        } else {
            return('reckless driving');
        }
    }
}
solve([21, 'residential' ]);