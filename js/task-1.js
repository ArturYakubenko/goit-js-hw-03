function slugify(title) {
     const words = title.toLowerCase().split("")
    
    
    for (let i = 0; i < words.length; i++) { 
        if (words[i] === " ") {
            words.splice(i, 1, "-")
        }
    }
    const word = words.join("")
    return word
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));