const  go = (direction, speed) =>
{
    const max_speed = 75;
    console.log(`The car is moving ${direction} , at ${speed} mph.`)
    if (speed > max_speed)
        console.log("SLOW DOWN")
}

go("forward", 95)
go("slidways", 33)


