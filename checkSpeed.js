export function checkSpeed(speed){
    const speedLimit = 70;
    const points = 0;
    let exceededSpeedLimit = 0;

    if (speed <= speedLimit && speed != NaN)
        return 'ok';

    if (speed > speedLimit){
        exceededSpeedLimit += speed - speedLimit;
        console.log('exceededSpeedLimit', exceededSpeedLimit);
        points += Math.floor(exceededSpeedLimit / 5);
        console.log('exceededSpeedLimit / 5:', exceededSpeedLimit / 5, 'points:',points);
        if (points >= 12)
            return 'license suspended'
        return points;
    }

    return NaN;
}


