const  go = (direction, speed) =>
{
    const max_speed = 75;
    console.log(`The car is moving ${direction} , at ${speed} mph.`)
    if (speed > max_speed)
        console.log("SLOW DOWN")
}

//go("forward", 95)
//go("slidways", 33)

const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]

foods.forEach(element => {
    console.log(element)
    if (element === "hotdog")
        console.log("it's a hotdog")
    else    
        console.log("it's not print not hotdog")
});

// for each element in the array if it's a
// "hotdog" print hotdog and if it's not print 
//"not hotdog" to the console!

//Loop over every item in this array:
//[45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
//Return a new array that contains only strings. Log out the result.
//Hint: The typeof operator

const mixed_array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

var string_array= []

mixed_array.forEach(element => {
    if (typeof(element) === "string")
        string_array.push(element)
   
})
console.log(string_array)


//other way
const newArray = mixed_array.filter(item_one => typeof item_one === "string")

console.log(newArray)
