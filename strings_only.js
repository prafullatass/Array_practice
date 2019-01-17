
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