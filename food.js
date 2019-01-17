

// for each element in the array if it's a
// "hotdog" print hotdog and if it's not print 
//"not hotdog" to the console!

const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]

foods.forEach(element => {
    console.log(element)
    if (element === "hotdog")
        console.log("it's a hotdog")
    else    
        console.log("it's not print not hotdog")
});

/* use just for stmt
for (let index = 0; foods < array.length; index++) {
    const element = foods[index];
}*/